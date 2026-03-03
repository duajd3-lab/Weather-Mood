// ===============================
// 🌤 날씨 전체 통합 (단기+중기+시간예보+주간요약)
// ===============================

const serviceKey = encodeURIComponent("0123891d17b0e073ff763a40afc5aed555b9b50358d33ebf729a71244c77c4e0");

// ===============================
// 1️⃣ 날짜 배열 (오늘~3일)
// ===============================
let date3 = [];
for (let i = 0; i < 3; i++) {
    let d = new Date();
    d.setDate(d.getDate() + i);
    let year = d.getFullYear();
    let month = String(d.getMonth() + 1).padStart(2, "0");
    let day = String(d.getDate()).padStart(2, "0");
    let weekDay = ['일', '월', '화', '수', '목', '금', '토'][d.getDay()];
    date3.push({ txt: year + month + day, day: weekDay, monthDay: month + "." + day });
}

// ===============================
// 2️⃣ 단기예보 base_time 자동 계산
// ===============================
function getShortBaseTime() {
    const now = new Date();
    const hour = now.getHours();
    const baseTimes = ["0200", "0500", "0800", "1100", "1400", "1700", "2000", "2300"];
    let selected = "0200";
    for (let t of baseTimes) {
        if (hour >= Number(t.substring(0, 2))) selected = t;
    }
    return selected;
}

// ===============================
// 3️⃣ 중기예보 tmFc 자동 계산
// ===============================
function getMidTmFc() {
    const now = new Date();
    const hour = now.getHours();
    let baseHour;
    if (hour < 6) {
        now.setDate(now.getDate() - 1);
        baseHour = "1800";
    } else if (hour < 18) {
        baseHour = "0600";
    } else {
        baseHour = "1800";
    }
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    return `${y}${m}${d}${baseHour}`;
}

// ===============================
// 4️⃣ 날씨 아이콘 함수
// ===============================
function getWeatherIcon({ sky, pty, text }) {
    if (pty && pty !== "0") {
        if (pty === "1") return "rainy";
        if (pty === "2") return "weather_mix";
        if (pty === "3") return "mode_cool";
        if (pty === "4") return "thunderstorm";
    }
    if (sky) {
        if (sky === "1") return "clear_day";
        if (sky === "3") return "partly_cloudy_day";
        if (sky === "4") return "cloud";
    }
    if (text) {
        if (text.includes("비/눈")) return "weather_mix";
        if (text.includes("눈")) return "mode_cool";
        if (text.includes("비")) return "rainy";
        if (text.includes("맑음")) return "clear_day";
        if (text.includes("구름많음")) return "partly_cloudy_day";
        if (text.includes("흐림")) return "cloud";
    }
    return "help";
}

// ===============================
// 5️⃣ 단기/중기/시간예보 메인 함수
// ===============================
async function dataFun() {
    try {
        const baseTime = getShortBaseTime();
        const tmFc = getMidTmFc();

        // 🔹 단기예보
        const shortRes = await fetch(
            `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?` +
            `serviceKey=${serviceKey}&numOfRows=1000&pageNo=1&dataType=JSON` +
            `&base_date=${date3[0].txt}&base_time=${baseTime}&nx=61&ny=131`
        );
        const shortData = await shortRes.json();
        const items = shortData.response.body.items.item;

        let dataFilter = { 1: {}, 2: {}, 3: {} };
        date3.forEach((date, idx) => {
            let dayData = {};
            items.forEach(item => {
                if (item.fcstDate === date.txt) {
                    if (!dayData[item.fcstTime]) dayData[item.fcstTime] = {};
                    dayData[item.fcstTime][item.category] = item.fcstValue;
                }
            });
            dataFilter[idx + 1] = dayData;
        });

        // 🔹 오늘 + 내일 이어지는 시간예보
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        swiperWrapper.innerHTML = "";

        const now = new Date();
        const currentHour = now.getHours();

        // 오늘 데이터
        let todayData = Object.entries(dataFilter[1] || {});

        
        // 내일 데이터
        let tomorrowData = Object.entries(dataFilter[2] || {});

        // 시간 기준 정렬
        todayData.sort((a, b) => Number(a[0]) - Number(b[0]));
        tomorrowData.sort((a, b) => Number(a[0]) - Number(b[0]));

        // 1️⃣ 현재 시간 이후 오늘 데이터만 필터
        let filteredToday = todayData.filter(([time]) => {
            return Number(time.substring(0, 2)) >= currentHour;
        });

        // 2️⃣ 만약 오늘 남은 데이터가 적으면 내일 새벽 이어붙임
        let combinedData = [...filteredToday, ...tomorrowData];

        // 👉 최대 24개 시간까지만 표시 (선택사항)
        combinedData = combinedData.slice(0, 24);

        // 화면 출력
        combinedData.forEach(([time, values]) => {
            const hour = Number(time.substring(0, 2));
            const ampm = hour < 12 ? "오전" : "오후";
            const displayHour = hour % 12 === 0 ? 12 : hour % 12;

            swiperWrapper.innerHTML += `
        <div class="swiper-slide">
            <span class="material-symbols-outlined">
                ${getWeatherIcon({ sky: values.SKY, pty: values.PTY })}
            </span>
            <b>${values.TMP ?? "-"}°</b>
            <div>${values.POP ?? "-"}%</div>
            <div>${ampm} ${displayHour}시</div>
        </div>
    `;
        });

        // Swiper 재생성
        if (window.mySwiper) window.mySwiper.destroy();
        window.mySwiper = new Swiper('.swiper', {
            slidesPerView: 5,
            freeMode: true
        });

        // 🔹 단기 1~3일 요약
        // 🔹 단기 1~3일 요약 (수정된 오전/오후 아이콘)
        date3.forEach((date, idx) => {
            const ul = document.querySelectorAll('.weather-week ul')[idx];
            ul.querySelector('li.week-info b').textContent = idx === 0 ? "오늘" : date.day;
            ul.querySelector('li.week-info small').textContent = date.monthDay;

            const dayData = dataFilter[idx + 1];
            const temps = Object.values(dayData).map(v => Number(v.TMP)).filter(v => !isNaN(v));

            ul.querySelector('.min').textContent = temps.length ? Math.min(...temps) + "°" : "-";
            ul.querySelector('.max').textContent = temps.length ? Math.max(...temps) + "°" : "-";

            const iconSpans = ul.querySelectorAll('.week-icon .material-symbols-outlined');

            // 오전 아이콘: 00~11시 중 가장 이른 시간 데이터 사용
            let morning = Object.entries(dayData)
                .filter(([t]) => Number(t) < 1200)
                .sort((a, b) => Number(a[0]) - Number(b[0]))[0];

            // 오전 데이터가 없으면 첫 시간 데이터 사용
            if (!morning) {
                morning = Object.entries(dayData)
                    .sort((a, b) => Number(a[0]) - Number(b[0]))[0];
            }

            // 오후 아이콘: 12~23시 중 가장 이른 시간 데이터 사용
            let afternoon = Object.entries(dayData)
                .filter(([t]) => Number(t) >= 1200)
                .sort((a, b) => Number(a[0]) - Number(b[0]))[0];

            // 오후 데이터가 없으면 마지막 시간 데이터 사용
            if (!afternoon) {
                afternoon = Object.entries(dayData)
                    .sort((a, b) => Number(a[0]) - Number(b[0]))
                    .slice(-1)[0];
            }

            iconSpans[0].textContent = morning ? getWeatherIcon({ sky: morning[1].SKY, pty: morning[1].PTY }) : "help";
            iconSpans[1].textContent = afternoon ? getWeatherIcon({ sky: afternoon[1].SKY, pty: afternoon[1].PTY }) : "help";
        });
        // 🔹 중기예보 4~7일
        const midLandRes = await fetch(
            `https://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?` +
            `serviceKey=${serviceKey}&numOfRows=10&pageNo=1&dataType=JSON` +
            `&regId=11B00000&tmFc=${tmFc}`
        );
        console.log(midLandRes);
        
        const midLandData = await midLandRes.json();
        const landItem = midLandData.response.body.items.item[0];

        const midTaRes = await fetch(
            `https://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?` +
            `serviceKey=${serviceKey}&numOfRows=10&pageNo=1&dataType=JSON` +
            `&regId=11B10101&tmFc=${tmFc}`
        );
        const midTaData = await midTaRes.json();
        const taItem = midTaData.response.body.items.item[0];

        for (let i = 3; i < 7; i++) {
            const ul = document.querySelectorAll('.weather-week ul')[i];
            let d = new Date();
            d.setDate(d.getDate() + i);
            let month = String(d.getMonth() + 1).padStart(2, "0");
            let day = String(d.getDate()).padStart(2, "0");
            let weekDay = ['일', '월', '화', '수', '목', '금', '토'][d.getDay()];
            ul.querySelector('li.week-info b').textContent = weekDay;
            ul.querySelector('li.week-info small').textContent = month + "." + day;

            const min = taItem["taMin" + (i + 1)];
            const max = taItem["taMax" + (i + 1)];
            ul.querySelector('.min').textContent = min !== undefined ? min + "°" : "-";
            ul.querySelector('.max').textContent = max !== undefined ? max + "°" : "-";

            const am = landItem["wf" + (i + 1) + "Am"];
            const pm = landItem["wf" + (i + 1) + "Pm"];
            const iconSpans = ul.querySelectorAll('.week-icon .material-symbols-outlined');
            iconSpans[0].textContent = getWeatherIcon({ text: am });
            iconSpans[1].textContent = getWeatherIcon({ text: pm });
        }

    } catch (error) {
        console.error("날씨 API 오류:", error);
    }
}

// ===============================
// 실행 + 10분 자동 갱신
// ===============================
dataFun();
setInterval(dataFun, 10 * 60 * 1000);