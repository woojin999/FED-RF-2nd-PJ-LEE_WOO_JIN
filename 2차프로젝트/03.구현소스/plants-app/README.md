# React -  Plants to the Rescue Project(쇼핑몰 프로젝트)(2차프로젝트)

- 리액트를 활용하여 아로마 쇼핑몰 구현
- [Plants to the Rescue 이용해보기](https://woojin999.github.io/FED-RF-2nd-PJ-LEE_WOO_JIN/2%EC%B0%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/03.%EA%B5%AC%ED%98%84%EC%86%8C%EC%8A%A4/plants-app/build/)
- [Git-Url](https://github.com/woojin999/FED-RF-2nd-PJ-LEE_WOO_JIN/tree/main/2%EC%B0%A8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/03.%EA%B5%AC%ED%98%84%EC%86%8C%EC%8A%A4/plants-app)



## ⏱ 개발기간 

2024.06.08 ~ 2024.07.24


## 🛠 프로젝트 주요 기능

- 회원가입 / 로그인
- 상품 리스트 / 상품 상세 페이지
- 상품 장바구니
- 상품 검색
- 질문 게시판
- 마이페이지
- 반응형 웹 구현

## 🛠 프로젝트 기타 기능

- 텍스트배너 무한 슬라이드
- 메인페이지 스크롤시 페이드 인아웃 기능
- 웹 페이지 크기 축소시 상품 리스트 스와이퍼로 변환/ 네이바 햄버거버튼 노출/ 레이아웃 변경
- FaQ 파트 토글 기능
- 상단 네비 고정 및 상단 이동 버튼

## 🛠 트러블 슈팅

###  Issue1

**🚨 이슈** 
- 마이페이지 게시판에서 본인 글을 클릭했을때 해당 글 디테일로 이동해야 하지만 게시판 리스트로 노출 되는 이슈

**💥 원인**
  - 일반 게시글 버튼으로 접근할때 useState 첫 상태값이 항상 List로 설정 되어있기 때문에 마이페이지에서도 boardDetail의 상태값인 Read가 아닌 상태값 List로 설정 되어 이동

**💡 해결**
- 마이페이지 게시판 리스트에서 board 컴포넌트로 이동할 때 useLocation을 사용하여 데이터 값을 담아 값이 있을때만 usestate 의 상태값을 Read로 변경시켜 boardDetail이 출력 될 수 있게 해결

###  Issue2

**🚨 이슈** 
- 장바구니에 담겨있는 상품의 토탈 가격과 수량이 맞지 않는 이슈

**💥 원인**
  - 기존에는 회원간의 장바구니 구분이 없었기 때문에 로컬스토리지에 담겨있는 데이터의 총 갯수를 계산하였지만 회원별 장바구니를 다르게 변경하는 과정에서 오류 발생

**💡 해결**
 - 회원별 id값을 가져와 그 회원의 id값과 일치하는 상품만 데이터 조회 후 그 데이터의 갯수를 사용하여 토탈 값과 장바구니 수량 계산

<br/>

![screencapture-woojin999-github-io-FED-RF-2nd-PJ-LEE-WOO-JIN-2-03-plants-app-build-2024-11-14-13_08_07](https://github.com/user-attachments/assets/29c4c8c5-a7ca-41b3-9469-790433831a71)

