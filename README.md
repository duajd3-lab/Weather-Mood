

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

* Front-End : React, React Router
* Back-End : Node.js, PHP, XAMPP
* Data-Base : MySQL

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
  날씨에 맞는 코디를 **데일리 / 스트릿 스타일**로 추천합니다.

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

| 사용기술 | 설명 |Badge |
| :---:| :---: | :---: |
| **React** | **SPA기반 프레임워크** |![react](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)|
|**React Router Dom** | **페이지 라우팅 관리** |![reactrouter](https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=reactrouter&logoColor=white)|
| **React Hook Form** | **폼 상태 및 데이터 관리** |![reacthookform](https://img.shields.io/badge/ReactHookForm-F24E1E?style=flat-square&logo=reacthookform&logoColor=white)|
| **Axios** | **클라이언트에서 서버로 API 요청 처리** |![axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)|

### 2. UI/UX 라이브러리

| 사용기술 | 설명 | Badge |
| :---:| :---: | :---: |
| **MUI** | **UI 프레임워크** |![mui](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white) |
| **Swiper** | **슬라이더** |![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=axios&logoColor=white)|
| **react-swipeable** | **스와이프 제스처** |![npm](https://img.shields.io/badge/react--swipeable-00e6a4?style=flat-square&logo=npm&logoColor=white)|
| **motion** | **애니메이션** |![motion](https://img.shields.io/badge/motion-fff312?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQgOSI+CiAgPHBhdGggZD0iTSA5LjA2MiAwIEwgNC4zMiA4Ljk5MiBMIDAgOC45OTIgTCAzLjcwMyAxLjk3MSBDIDQuMjc3IDAuODgyIDUuNzA5IDAgNi45MDIgMCBaIE0gMTkuNjU2IDIuMjQ4IEMgMTkuNjU2IDEuMDA2IDIwLjYyMyAwIDIxLjgxNiAwIEMgMjMuMDA5IDAgMjMuOTc2IDEuMDA2IDIzLjk3NiAyLjI0OCBDIDIzLjk3NiAzLjQ5IDIzLjAwOSA0LjQ5NiAyMS44MTYgNC40OTYgQyAyMC42MjMgNC40OTYgMTkuNjU2IDMuNDkgMTkuNjU2IDIuMjQ4IFogTSA5Ljg3MiAwIEwgMTQuMTkyIDAgTCA5LjQ1IDguOTkyIEwgNS4xMyA4Ljk5MiBaIE0gMTQuOTc0IDAgTCAxOS4yOTQgMCBMIDE1LjU5MiA3LjAyMSBDIDE1LjAxOCA4LjExIDEzLjU4NSA4Ljk5MiAxMi4zOTIgOC45OTIgTCAxMC4yMzIgOC45OTIgWiIgZmlsbD0icmdiKDAsIDAsIDApIj48L3BhdGg+Cjwvc3ZnPgo=&logoColor=white)|
| **Sass** | **스타일링**|![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)|
| **sweetalert2** | **커스텀 팝업 알림 UI** |![sweetalert2](https://img.shields.io/badge/sweetalert2-F27474?style=flat-square&logo=datefns&logoColor=white)|

### 3. Back-End

| 사용기술 | 설명 | Badge |
| :---:| :---: | :---: |
| **Node.js** | **JavaScript 런타임 환경** |![nodedotjs](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)|
| **PHP** | **회원 및 상품 관리, 관리자 페이지 구현 등 서버 측 로직 처리** |![PHP](https://img.shields.io/badge/PHP-8892BE?style=flat-square&logo=npm&logoColor=white)|
| **MySQL** | **데이터베이스 관리**  |![MySQL](https://img.shields.io/badge/MySQL-00758F?style=flat-square&logo=JSON&logoColor=white)|
| **XAMPP** | **Apache, MySQL, PHP를 통합 제공하는 로컬 서버 개발 도구** |![XAMPP](https://img.shields.io/badge/XAMPP-FB7A24?style=flat-square&logo=nodemon&logoColor=white)|
| **Axios** | **서버에서 API 요청 처리** |![axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)|

### 4. 개발 도구

|사용기술 | 설명 | Badge | 
| :---:| :---: | :---: |
| **Visual Studio Code (VS Code)** | **코드 편집기( 에디터 )** |![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjAwMyAyTDEyIDEzLjMwM0w0Ljg0IDhMMiAxMEw4Ljc3MiAxNkwyIDIyTDQuODQgMjRMMTIgMTguNzAyTDI0LjAwMyAzMEwzMCAyNy4wODdWNC45MTNMMjQuMDAzIDJaTTI0IDkuNDM0VjIyLjU2NkwxNS4yODkgMTZMMjQgOS40MzRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K&logoColor=white) |
|**GitHub** | **버전 관리** |![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white)| 
| **Vercel** | **서버리스 플랫폼** |![vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)|
| **Figma** | **디자인 & UI/UX**|![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white) |


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


# 소연희의 개발 상세

## 📑 요약
* 담당
  * 스플래시 화면 구현
  * 로그인/로그아웃 기능 구현
  * 회원가입 기능 구현
  * 마이페이지 구성 및 주문 내역 표시
  * 장바구니 기능 구현(선택/전체 삭제, 금액 계산 등)
  * 결제 및 결제 완료 페이지 구현
* 담당 컴포넌트 상세
  * Splash.jsx <br/>
    → 첫 방문 시 로고와 로딩 애니메이션을 보여주는 스플래시 화면 구현
  * Login.jsx <br/>
    → 사용자 로그인 기능 구현 및 로그인 성공 시 세션 유지 처리 <br/>
    → Axios를 통해 로그인 상태를 확인
  * Signup.jsx <br/>
    → 기본 정보 입력을 통한 회원가입 처리 <br/>
    → 회원가입 폼 제출 시 Axios로 서버에 데이터 전송 (PHP로 MySQL DB에 저장)
  * CartList.jsx <br/>
    → 장바구니에 담긴 상품 데이터를 PHP에서 불러와 렌더링 <br/>
    → 체크박스를 통한 선택 상품만 결제 가능하며, 선택/삭제 요청 시 서버로 삭제 요청 전송 <br/>
    → 총 금액 계산은 프론트에서 자동 처리
  * Pay.jsx <br/>
    → 선택한 상품 결제 진행 화면으로 주문 정보 입력 및 확인 처리 <br/>
    → PHP 서버에서 주문 정보 저장 처리
  * PayDone.jsx <br/>
    → 결제 완료 후 안내 메시지를 표시하는 화면 구현
  * My.jsx <br/>
    → 로그인된 사용자 정보를 서버에서 불러와 사용자 이름, 아이디를 마이페이지 상단에 렌더링 <br/>
    → 주문 내역 확인, 자주 묻는 질문 등을 제공하는 마이페이지 구현
  * OrderList.jsx <br/>
    → 사용자의 주문 내역을 PHP서버에서 불러와 화면에 표시
 
## 🧩 공통 컴포넌트 제작
* 📜AgreeCheck.jsx - 약관 동의나 상품 선택 시 사용하는 체크박스 컴포넌트
* 📜AlertBtn1.jsx - 버튼이 1개인 팝업창으로, 사용자 확인이 필요한 상황에 사용되는 컴포넌트
* 📜AlertBtn2.jsx - 버튼이 2개인 팝업창으로, 확인/취소 등 선택이 필요한 경우에 사용되는 컴포넌트
* 📜BtnLong.jsx - 페이지 하단 또는 주요 작업에 사용하는 긴 버튼 형태의 컴포넌트
* 📜BtnShort.jsx - 두 가지 선택지에서 사용되는 짧은 버튼 형태의 컴포넌트
* 📜DataLoading.jsx - 데이터 로딩 중 표시되는 공통 로딩 컴포넌트
* 📜InfoMessage.jsx - 안내 문구 또는 데이터가 없을 때 표시되는 메시지 컴포넌트
* 📜PayDoneBar.jsx - 결제 완료 등의 페이지 상단에 부제목 형태로 사용되는 컴포넌트
* 📜PayProductItem.jsx - 결제 및 주문내역 화면에서 상품 정보를 보여주는 카드형태의 아이템 컴포넌트
* 📜ProductPrice.jsx - 장바구니 및 결제페이지에서 상품 가격 정보를 표시하는 컴포넌트

  
## 💥 트러블 슈팅

### 📌 CartList.jsx

 1. 장바구니에서 개별 상품을 삭제할 경우에는 화면에서 바로 반영되었으나, 여러 상품을 선택한 후 "선택 삭제" 버튼을 클릭하면 화면에 삭제된 결과가 즉시 반영되지 않는 이슈 발생
  
    *선택 삭제 후 checkItems 상태를 cartList 기준으로 초기화했지만 즉각 반영되지 않음
       
    ⇒ **해결방법**: 해당 문제를 해결하기 위해 삭제 요청이 완료된 후 서버에서 장바구니 데이터를 다시 받아와 cartList와 checkItems 상태를 갱신하도록 처리 <br/>

 2. 사용자가 장바구니에서 "결제하기" 버튼을 클릭하지 않고 결제 페이지에서 브라우저의 뒤로가기를 누르면, 장바구니에서 상품이 사라지는 이슈 발생
  
    *결제 페이지 진입 시점에 장바구니 상태가 비워지는 로직이었음
       
    ⇒ **해결방법**: 이를 방지하기 위해 "결제하기" 버튼을 클릭한 시점에만 결제 페이지로 이동되도록 처리하여, 뒤로가기로 인한 장바구니 유실 방지 <br/>

### 📌 Pay.jsx

 1. 상품 디테일 페이지에서 "구매하기" 버튼을 클릭하면, 결제 페이지에서 총 상품 금액이 실제보다 높게 표시되는 이슈 발생
  
    *p_price 값이 이미 수량(ea)이 곱해진 상태였는데, 결제 페이지에서 다시 한 번 * ea를 해버려 중복 계산 발생
       
    ⇒ **해결방법**: 이 문제를 해결하기 위해 총 금액 계산 시 * ea를 제거하였고, 금액 정보는 let product = [] 형태로 전달하지 않고 상태값으로 관리하도록 수정, Number()를 사용해 전달된 값들이 정확히 숫자형으로 인식되도록 하여 금액 계산에 오류가 없도록 보완 <br/>

### 📌 OrderList.jsx

 1. 주문내역 페이지에서 특정 상품을 클릭하면 해당 상품의 상세 페이지로 이동하도록 구현했지만, 이때 type 값이 전달되지 않아 상세 페이지에서 해당 상품 정보가 정확히 매칭되지 않는 이슈 발생
  
    *orders 테이블에 상품의 cat_id(카테고리 ID)를 저장하지 않아 어떤 타입인지 알 수 없었음
       
    ⇒ **해결방법**: 이를 해결하기 위해 orders.php에 cat_id 컬럼을 추가하고, postData 함수에서 해당 값을 함께 저장하도록 수정, 이후 type을 정상적으로 전달받아 상세 페이지 이동 시 상품이 제대로 로드되도록 처리 <br/>

### 📌 PayProductItem.jsx

 1. 결제 페이지와 주문내역 페이지에서 동일한 상품 컴포넌트를 사용하고 있는데, 결제 페이지에서는 상품을 클릭해도 상세 페이지로 이동하면 안 되며, 주문내역에서는 이동이 되어야 하는 이슈 발생
  
    *클릭 동작이 공통 컴포넌트에 항상 활성화되어 있어 모든 페이지에서 작동하고 있었음
       
    ⇒ **해결방법**: 이를 해결하기 위해 컴포넌트에 click prop을 추가하고 기본값을 false로 설정, 주문내역 페이지에서는 click={true}로 전달하여 해당 페이지에서만 상품 클릭 시 상세 페이지로 이동하도록 분기 처리 <br/>
