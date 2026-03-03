

// 공공데이터포털에서 발급받은 개인 인증키
// 모든 날씨 / 미세먼지 API 호출에 사용됨

// ============================================
// 🔆 일출·일몰 반원 애니메이션
// ============================================
const riseSetApiUrl = "http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo?location=%EC%84%9C%EC%9A%B8&locdate=20260302&ServiceKey=0123891d17b0e073ff763a40afc5aed555b9b50358d33ebf729a71244c77c4e0&_type=json";

// HHMM 문자열 -> HH:MM
function formatTime(timeStr) {
    if (!timeStr || timeStr.trim() === "----") return "--:--";
    return `${timeStr.substring(0, 2)}:${timeStr.substring(2, 4)}`;
}

// HHMM -> 오늘 날짜 Date 객체
function timeStrToDate(timeStr) {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(timeStr.substring(0, 2)), parseInt(timeStr.substring(2, 4)), 0);
}

// 진행률 계산 (0~1)
function getProgress(start, end, now) {
    const total = end - start;
    const elapsed = now - start;
    let p = elapsed / total;
    return Math.max(0, Math.min(1, p));
}

// SVG 반원
const circle = document.querySelector(".progress");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;






// 진행률 업데이트
function setProgress(percent) {

}

// 태양 위치 업데이트
function setSunPosition(percent) {

}

// 일출·일몰 API 호출
fetch(riseSetApiUrl)
    .then(res => res.json())
    .then(data => {
        const item = data.response.body.items.item;
        const sunriseStr = item.sunrise.trim();
        const sunsetStr = item.sunset.trim();

        let riseStr = [sunriseStr.substring(0, 2), sunriseStr.substring(2)];
        let setStr = [sunsetStr.substring(0, 2), sunsetStr.substring(2)];
        let nowStr = [new Date().getHours(), new Date().getMinutes()];


        let a = ((nowStr[0] - riseStr[0]) * 60) + (nowStr[1] - riseStr[1]);
        let b = ((setStr[0] - riseStr[0]) * 60) + (setStr[1] - riseStr[1])
        let c = Math.round(a / b * 100);
        let d = Math.round(a / b * 100) / 100 * 50;
        circle.style.strokeDasharray = `${d} 100`;

        const sun = document.querySelector(".sun");
        sun.style.transform = `rotate(${c / 100 * 180}deg) translateX(80px)`;



        document.querySelector(".sunrise h2").textContent = formatTime(sunriseStr);
        document.querySelector(".sunset h2").textContent = formatTime(sunsetStr);

        const sunrise = timeStrToDate(sunriseStr);
        const sunset = timeStrToDate(sunsetStr);

        function updateSun() {
            const now = new Date();
            const progress = getProgress(sunrise, sunset, now);
            setProgress(progress);
            setSunPosition(progress);
            requestAnimationFrame(updateSun);
        }

        updateSun();
    })
    .catch(err => console.error("일출·일몰 API 오류:", err));


// =====================================================
// 🔒 설정
// =====================================================
const serviceKey = "0123891d17b0e073ff763a40afc5aed555b9b50358d33ebf729a71244c77c4e0";
const stationName = "의정부동";


// =====================================================
// 🌫 미세먼지 API
// =====================================================
async function getAirQuality() {

    const url =
        `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?` +
        `serviceKey=${serviceKey}` +   
        `&returnType=json` +
        `&numOfRows=1&pageNo=1` +
        `&stationName=${encodeURIComponent(stationName)}` +
        `&dataTerm=DAILY&ver=1.3`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        const item = data.response?.body?.items?.[0];
        if (!item) return;

        applyDust(".pm10", item.pm10Value, "pm10");
        applyDust(".pm25", item.pm25Value, "pm25");

    } catch (err) {
        console.error("미세먼지 로드 실패:", err);
    }
}

// =====================================================
// 🎨 미세먼지 화면 적용 (등급만 표시)
// =====================================================
function applyDust(selector, value, type) {

    const box = document.querySelector(selector);
    if (!box) return;

    const textEl = box.querySelector("b");
    const iconEl = box.querySelector(".icon");

    const grade = getGrade(value, type);

    const gradeMap = {
        1: { text: "좋음", icon: "sentiment_very_satisfied", className: "grade-1" },
        2: { text: "보통", icon: "sentiment_satisfied", className: "grade-2" },
        3: { text: "나쁨", icon: "sentiment_dissatisfied", className: "grade-3" },
        4: { text: "매우나쁨", icon: "sentiment_very_dissatisfied", className: "grade-4" }
    };

    // ✅ grade-1~4 제거
    textEl.classList.remove("grade-1","grade-2","grade-3","grade-4");
    iconEl.classList.remove("grade-1","grade-2","grade-3","grade-4");

    if (gradeMap[grade]) {
        const current = gradeMap[grade];

        textEl.textContent = current.text;
        iconEl.textContent = current.icon;

        textEl.classList.add(current.className);
        iconEl.classList.add(current.className);

    } else {
        textEl.textContent = "--";
        iconEl.textContent = "help";
    }
}


// =====================================================
// 📊 등급 계산
// =====================================================
function getGrade(value, type) {

    const num = Number(value);
    if (isNaN(num)) return 0;

    if (type === "pm10") {
        if (num <= 30) return 1;
        if (num <= 80) return 2;
        if (num <= 150) return 3;
        return 4;
    }

    if (type === "pm25") {
        if (num <= 15) return 1;
        if (num <= 35) return 2;
        if (num <= 75) return 3;
        return 4;
    }

    return 0;
}


// =====================================================
// 🌤 날씨 시스템
// =====================================================
const nx = 61;
const ny = 131;

async function getWeatherData() {

    const now = new Date();
    const baseInfo = getBaseTime(now, 45);
    const ncstInfo = getBaseTime(now, 40);

    const fcstUrl =
        `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?` +
        `serviceKey=${serviceKey}` +
        `&pageNo=1&numOfRows=1000&dataType=JSON` +
        `&base_date=${baseInfo.date}` +
        `&base_time=${baseInfo.time}` +
        `&nx=${nx}&ny=${ny}`;

    const ncstUrl =
        `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?` +
        `serviceKey=${serviceKey}` +
        `&pageNo=1&numOfRows=1000&dataType=JSON` +
        `&base_date=${ncstInfo.date}` +
        `&base_time=${ncstInfo.time}` +
        `&nx=${nx}&ny=${ny}`;

    try {

        const [fcstRes, ncstRes] = await Promise.all([
            fetch(fcstUrl),
            fetch(ncstUrl)
        ]);

        const fcstData = await fcstRes.json();
        const ncstData = await ncstRes.json();

        const ncstWeather = extractNcst(ncstData);
        const fcstWeather = extractFcst(fcstData);

        const finalWeather = { ...fcstWeather, ...ncstWeather };

        applyWeather(finalWeather);

    } catch (err) {
        console.error("날씨 로드 실패:", err);
    }
}


// =====================================================
// base_time 계산
// =====================================================
function getBaseTime(now, minuteStandard) {

    const date = new Date(now);

    if (date.getMinutes() < minuteStandard) {
        date.setHours(date.getHours() - 1);
    }

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");

    return {
        date: `${yyyy}${mm}${dd}`,
        time: `${hh}30`
    };
}


// =====================================================
// 📦 실황 추출
// =====================================================
function extractNcst(data) {

    const items = data.response?.body?.items?.item;
    if (!items) return {};

    const weather = {};
    items.forEach(i => weather[i.category] = i.obsrValue);

    return {
        T1H: weather.T1H,
        REH: weather.REH,
        WSD: weather.WSD,
        PTY: weather.PTY
    };
}


// =====================================================
// 📦 예보 추출
// =====================================================
function extractFcst(data) {

    const items = data.response?.body?.items?.item;
    if (!items) return {};

    const times = [...new Set(items.map(i => i.fcstTime))].sort();
    const targetTime = times[0];

    const weather = {};
    items.forEach(i => {
        if (i.fcstTime === targetTime) {
            weather[i.category] = i.fcstValue;
        }
    });

    return weather;
}


// =====================================================
// 🎨 화면 출력
// =====================================================
function applyWeather(weather) {

    document.getElementById("temp").innerHTML =
        `${weather.T1H ?? "--"}<small>℃</small>`;

    document.getElementById("humidity").innerHTML =
        `${weather.REH ?? "--"}<small>%</small>`;

    document.getElementById("wind").innerHTML =
        `${weather.WSD ?? "--"}<small>m/s</small>`;

    // 🌧 강수량 안전 처리
    let rainText = "없음";

    if (
        weather.RN1 &&
        weather.RN1 !== "강수없음" &&
        weather.RN1 !== "0"
    ) {
        rainText = weather.RN1 + "mm";
    }

    document.getElementById("rain").innerHTML = rainText;

    // 🌤 하늘 상태
    const skyText = document.getElementById("sky");
    const skyIcon = document.getElementById("skyIcon");

    const skyMap = {
        "1": { text: "맑음", icon: "wb_sunny" },
        "3": { text: "구름많음", icon: "partly_cloudy_day" },
        "4": { text: "흐림", icon: "cloud" }
    };

    const ptyMap = {
        "1": { text: "비", icon: "rainy" },
        "2": { text: "비/눈", icon: "weather_mix" },
        "3": { text: "눈", icon: "mode_cool" },
        "4": { text: "소나기", icon: "thunderstorm" }
    };

    if (weather.PTY && weather.PTY !== "0") {
        const pty = ptyMap[weather.PTY];
        skyText.textContent = pty?.text || "-";
        skyIcon.textContent = pty?.icon || "help";
    } else {
        const sky = skyMap[weather.SKY];
        skyText.textContent = sky?.text || "-";
        skyIcon.textContent = sky?.icon || "help";
    }
}


// =====================================================
// 🚀 실행
// =====================================================
getAirQuality();
getWeatherData();

setInterval(() => {
    getAirQuality();
    getWeatherData();
}, 600000);
