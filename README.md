

## ✨ 소개
<b>Weather Mood</b>는 날씨 정보를 기반으로 사용자의 일상과 연결되는 라이프스타일 앱입니다.<br>
기존의 날씨 서비스는 기온이나 강수 확률 등 수치 중심의 정보를 제공하는 경우가 많습니다.<br>

하지만 실제 일상에서는<br>

“그래서 오늘 뭐 입지?”<br>
“지금 밖에서 운동해도 괜찮을까?”<br>
“오늘 날씨에 어울리는 분위기는 어떤 걸까?”<br>

처럼 날씨를 기준으로 한 행동과 선택이 더 중요한 요소가 됩니다.<br>

이러한 점에 주목하여, 단순히 날씨를 확인하는 것을 넘어 날씨와 일상을 연결하는 서비스를 만들고자 <b>Weather Mood</b> 프로젝트를 기획하게 되었습니다.<br>

<b>Weather Mood</b>는 메인 화면에서 남성 또는 여성 AI 캐릭터가 현재 날씨에 맞는 옷차림을 보여주어 사용자가 날씨에 어울리는 코디를 직관적으로 확인할 수 있도록 합니다.
또한 코디, 활동, 음악 등 다양한 요소를 함께 제공하여 날씨에 맞는 하루의 분위기와 일상을 자연스럽게 경험할 수 있도록 구성되어 있습니다.

## 🔗 배포 URL


## 📑 프로젝트 요약

### 1. 주제

* 날씨 정보를 기반으로 하루의 분위기와 일상을 연결하는 서비스

### 2. 목표

* 날씨 정보를 직관적으로 전달하여 사용자가 쉽게 이해하고 활용할 수 있도록 하는 것
* 코디, 활동, 음악 등 다양한 일상 요소를 함께 제공하여 사용자가 하루를 보다 편리하게 보낼 수 있도록 하는 것
  
### 3. 핵심 기능

* 현재 날씨 정보 제공 (기온, 날씨 상태 확인)
* AI 캐릭터를 활용한 날씨 기반 코디 추천 기능
* 캐주얼, 스트릿, 모던, 로맨틱, 미니멀 등 스타일별 코디 카테고리 제공
* 코디 이미지를 크게 볼 수 있는 팝업 기능
* 날씨 분위기에 맞는 음악 추천 기능
* 날씨에 맞는 야외 활동 추천 (러닝, 자전거, 캠핑, 스포츠 등)
* 마음에 드는 코디와 음악을 저장할 수 있는 보관함 기능
* 직관적인 하단 네비게이션을 통한 페이지 이동 기능
* 다양한 디바이스에서 사용할 수 있는 반응형 UI


### 4. 주요 기술 스택

* Front-End : HTML5, CSS3, JavaScript
* Data : Weather API, JSON
* Design : Figma, Photoshop, Illustrator
* Tools : Visual Studio Code, GitHub

## 📅 개발 기간

2026.02 ~ 2026.03
   
## 👥 Team

- 💻 **개발** : 김나영  
- 🧑‍💼 **총괄** : 손영재  
- 🎨 **디자인** : 심채빈  
- 📝 **기획** : 이예원  

## 👩🏻‍🤝‍🧑🏻 팀원 역할

|  이름 | 주요 담당 기능                                            |  참여 |
| :-: | :-------------------------------------------------- | :-: |
| 김나영 | 코디 추천 기능 (codi), 코디 상세 팝업창 구현                       |  ✔  |
| 손영재 | 메인 화면 (index), 보관함 기능 (scrap, moodScrap, codiScrap) |  ✔  |
| 심채빈 | UI 디자인 전체, 음악 추천 기능 (mood), 날씨 기반 야외 활동 추천          |  ✔  |
| 이예원 | 현재 날씨 기능 (weather), 상세 날씨 정보 (weatherSub)           |  ✔  |


## 💡 주요 기능

* 🌤 **AI 캐릭터 날씨 코디**
  현재 날씨 데이터를 기반으로 AI 캐릭터가 날씨에 맞는 코디를 보여줍니다.

* 🌦 **상세 날씨 정보 제공**
  현재 기온, 날씨 상태 등 다양한 날씨 정보를 확인할 수 있습니다.

* 👕 **날씨 기반 코디 추천**
  날씨에 맞는 코디를 **캐주얼 / 스트릿 스타일**로 추천합니다.

* 🎵 **날씨 기반 음악 추천**
  날씨 분위기에 어울리는 음악을 추천합니다.

* 🌳 **야외 활동 추천**
  현재 날씨에 맞는 야외 활동을 **아이콘과 함께 추천**합니다.

* ⭐ **보관함 기능**
  마음에 드는 **코디와 음악을 저장**하여 다시 확인할 수 있습니다.

* 🔍 **팝업 상세 보기**
  코디와 음악 콘텐츠를 클릭하면 **팝업창으로 크게 확인할 수 있습니다.**


## 🗂️ 폴더 구조

```id="weather-mood-structure"
WEATHER-MOOD
│
├── css                 # 웹사이트 전체 스타일 파일
│   ├── common          # 공통 스타일 (폰트, 리셋, 공통 UI)
│   │   ├── common.css
│   │   ├── font.css
│   │   └── reset.css
│   │
│   ├── bg.css          # 배경 관련 스타일
│   ├── codi.css        # 날씨 기반 코디 페이지 스타일
│   ├── codiScrap.css   # 코디 보관함 스타일
│   ├── index.css       # 메인 페이지 스타일
│   ├── mood.css        # 음악 추천 페이지 스타일
│   ├── moodScrap.css   # 음악 보관함 스타일
│   ├── scrap.css       # 스크랩 페이지 스타일
│   ├── set.css         # 설정 페이지 스타일
│   ├── weather.css     # 날씨 메인 페이지 스타일
│   └── weatherSub.css  # 날씨 상세 정보 페이지 스타일
│
├── image               # 프로젝트에 사용되는 이미지 및 아이콘
│
├── js                  # 웹사이트 기능 구현 JavaScript
│   ├── codi.js         # 날씨 기반 코디 추천 기능
│   ├── codi.json       # 코디 데이터
│   ├── codiScrap.js    # 코디 스크랩 기능
│   ├── common.js       # 공통 기능 스크립트
│   ├── index.js        # 메인 페이지 기능
│   ├── index.json      # 메인 페이지 데이터
│   ├── mood-playlist.json # 날씨 기반 음악 추천 데이터
│   ├── mood.js         # 음악 추천 기능
│   ├── moodScrap.js    # 음악 스크랩 기능
│   ├── scrap.js        # 스크랩 관리 기능
│   ├── set.js          # 사용자 설정 기능
│   ├── weather.js      # 현재 날씨 정보 기능
│   └── weatherSub.js   # 상세 날씨 정보 기능
│
├── bg.html             # 배경 설정 페이지
├── branch.html         # 페이지 이동 관련 화면
├── codi.html           # 날씨 기반 코디 추천 페이지
├── codiScrap.html      # 코디 보관함 페이지
├── index.html          # 메인 페이지
├── mood.html           # 날씨 기반 음악 추천 페이지
├── moodScrap.html      # 음악 보관함 페이지
├── scrap.html          # 전체 스크랩 관리 페이지
├── set.html            # 사용자 설정 페이지
├── weather.html        # 현재 날씨 페이지
├── weatherSub.html     # 상세 날씨 정보 페이지
│
└── README.md           # 프로젝트 소개 및 설명 문서
```


## 💻 개발 환경

### 1. Frond-End

|      사용기술      | 설명                   |                                                       Badge                                                       |
| :------------: | :------------------- | :---------------------------------------------------------------------------------------------------------------: |
|    **HTML5**   | 웹 페이지 구조 설계          |         ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square\&logo=html5\&logoColor=white)        |
|    **CSS3**    | 웹 페이지 스타일 및 레이아웃 디자인 |          ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square\&logo=css3\&logoColor=white)          |
| **JavaScript** | 사용자 인터랙션 및 기능 구현     | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square\&logo=javascript\&logoColor=black) |

---

### 2. 데이터 및 API

|       사용기술      | 설명               |                                              Badge                                              |
| :-------------: | :--------------- | :---------------------------------------------------------------------------------------------: |
|     **JSON**    | 코디 및 음악 데이터 관리   | ![JSON](https://img.shields.io/badge/JSON-000000?style=flat-square\&logo=json\&logoColor=white) |
| **Weather API** | 현재 날씨 및 날씨 정보 제공 |   ![API](https://img.shields.io/badge/API-FF6F00?style=flat-square\&logo=api\&logoColor=white)  |

---

### 3. 디자인

|       사용기술      | 설명                |                                                           Badge                                                           |
| :-------------: | :---------------- | :-----------------------------------------------------------------------------------------------------------------------: |
|    **Figma**    | UI/UX 디자인 및 화면 설계 |             ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square\&logo=figma\&logoColor=white)            |
|  **Photoshop**  | 이미지 편집 및 디자인 작업   |    ![Photoshop](https://img.shields.io/badge/Photoshop-31A8FF?style=flat-square\&logo=adobephotoshop\&logoColor=white)    |
| **Illustrator** | 아이콘 및 그래픽 디자인     | ![Illustrator](https://img.shields.io/badge/Illustrator-FF9A00?style=flat-square\&logo=adobeillustrator\&logoColor=white) |

---

### 4. 개발 도구

|          사용기술          | 설명              |                                                      Badge                                                      |
| :--------------------: | :-------------- | :-------------------------------------------------------------------------------------------------------------: |
| **Visual Studio Code** | 코드 편집 및 개발 환경   | ![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=flat-square\&logo=visualstudiocode\&logoColor=white) |
|       **GitHub**       | 프로젝트 버전 관리 및 협업 |      ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square\&logo=github\&logoColor=white)      |


## 📚 프로젝트 문서 자료

| 문서종류 | 파일명 | 설명 |
| :---:| :---: | :---: |
| 화면설계 | [화면설계.pdf](https://github.com/yeonhee001/ripo/blob/main/work/semi%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_B%ED%8C%80_01%EA%B8%B0%ED%9A%8D%2C%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84.pdf) | 주요 페이지의 화면 구성, 사용자 흐름 등 와이어프레임 기반 설계 자료 |
| 디자인 | [디자인.pdf](https://github.com/yeonhee001/ripo/blob/main/work/semi%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_B%ED%8C%80_02%EB%94%94%EC%9E%90%EC%9D%B8.pdf) | Figma로 작업한 디자인 시안. 색상, 폰트, UI 요소 등 자료 |
| 발표자료 | [발표자료.pdf](https://github.com/yeonhee001/ripo/blob/main/work/semi%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_B%ED%8C%80_%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C.pdf) | 팀 프로젝트 발표용 슬라이드 자료 |
| 완료 보고서 | [완료보고서.pdf](https://github.com/yeonhee001/ripo/blob/main/work/semi%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_B%ED%8C%80_%EC%99%84%EB%A3%8C%EB%B3%B4%EA%B3%A0%EC%84%9C.pdf) | 프로젝트 진행 결과 요약 등 최종 보고 |

## 💾 프로젝트 저장소
프론트엔드와 서버 소스 코드는 별도의 저장소로 분리되어있습니다.
* [서버 저장소 바로가기](https://github.com/yeonhee001/php-ripoServer.git)


## 👩‍💻 이예원의 개발 상세

## 📑 요약
* 담당
  * 날씨 메인 화면 구현
  * 상세 날씨 정보 페이지 구현
  * 기상청 공공데이터 API 연동
  * 미세먼지 정보 표시 기능 구현
  * 일출 · 일몰 시각화 기능 구현
  * 달 위상 정보 표시 기능 구현

* 담당 페이지 상세
  * Weather.html <br/>
    → 기상청 단기예보 API를 활용하여 현재 날씨와 시간별 날씨 정보를 화면에 표시 <br/>
    → Swiper 라이브러리를 활용한 **시간별 날씨 슬라이드 UI 구현** <br/>
    → 오늘 및 **7일 주간 날씨 예보 정보 제공**

  * WeatherSub.html <br/>
    → 날씨의 **상세 정보를 확인할 수 있는 페이지 구현** <br/>
    → 현재 기온, 하늘 상태, 습도, 풍속, 강수량 등 상세 날씨 정보 제공 <br/>
    → 미세먼지 / 초미세먼지 상태 표시

  * 미세먼지 기능 <br/>
    → 공공데이터 **대기오염 API**를 활용하여 미세먼지 정보를 화면에 표시 <br/>
    → 미세먼지 상태를 **좋음 / 보통 / 나쁨 / 매우 나쁨** 단계로 구분하여 사용자에게 시각적으로 제공

  * 일출 · 일몰 기능 <br/>
    → 공공데이터 **일출·일몰 API** 데이터를 활용하여 sunrise / sunset 시간 표시 <br/>
    → SVG 그래프를 활용해 **현재 시간 기준 태양 위치 시각화 기능 구현**

  * 달 위상 기능 <br/>
    → 공공데이터 **달 위상 API**의 lunAge 데이터를 활용하여 현재 달의 단계 계산 <br/>
    → SVG 그래픽을 활용하여 **달 위상 시각화 구현**
  
## 💥 트러블 슈팅

### 📌 weather.js

1. 날씨 API 데이터를 불러왔지만 화면에 값이 표시되지 않는 문제 발생

   *API 호출은 정상적으로 이루어졌지만 비동기 처리로 인해 데이터가 렌더링되기 전에 코드가 실행되는 문제 발생*

   ⇒ **해결방법**: fetch로 데이터를 받아온 후 then() 또는 async/await를 사용하여 데이터가 로드된 이후 화면에 출력하도록 수정하고, 데이터가 존재할 때만 화면에 렌더링하도록 조건문을 추가

---

2. 날씨 API 데이터가 undefined로 출력되는 문제 발생

   *API 응답 데이터 구조를 정확히 확인하지 않고 객체 값에 접근하여 잘못된 경로로 데이터를 가져오는 문제 발생*

   ⇒ **해결방법**: console.log()를 활용해 API 응답 데이터를 확인하고 실제 데이터 구조에 맞게 객체 접근 경로를 수정하여 정상적으로 값을 출력하도록 개선

---

### 📌 weatherSub.js

1. 미세먼지 데이터가 정상적으로 표시되지 않는 문제 발생

   *미세먼지 API 호출 후 데이터 배열에서 원하는 값의 인덱스를 잘못 지정하여 값이 undefined로 출력되는 문제 발생*

   ⇒ **해결방법**: API 응답 데이터 구조를 확인하여 정확한 배열 인덱스와 객체 경로로 값을 가져오도록 수정하고, 데이터가 없을 경우 기본값을 표시하도록 처리

---

2. 일출 · 일몰 그래프에서 태양 위치가 정상적으로 표시되지 않는 문제 발생

   *현재 시간과 sunrise / sunset 시간을 문자열로 비교하면서 계산 오류 발생*

   ⇒ **해결방법**: 시간을 숫자형 데이터로 변환하여 계산하도록 수정하고, 현재 시간을 기준으로 sunrise ~ sunset 사이의 비율을 계산하여 SVG 그래프 위치에 적용

---

3. 달 위상 정보가 실제 달 상태와 다르게 표시되는 문제 발생

   *lunAge 데이터를 정확히 이해하지 못해 달 단계 계산 기준이 잘못 설정된 문제 발생*

   ⇒ **해결방법**: lunAge 기준값을 다시 정리하여 신월, 초승달, 상현달, 보름달, 하현달 단계로 조건문을 수정하고 SVG 그래픽을 단계별로 적용하여 정확한 달 위상이 표시되도록 개선
