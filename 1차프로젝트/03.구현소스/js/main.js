
// 메인 js - main.js //

// import setElement from "./common.js";
// setElement();

let pgNum = 0;
let stsWheel = false;
const elePage = document.querySelectorAll(".page");
const totalCnt = elePage.length;
// console.log("대상", elePage, totalCnt, "개");

window.addEventListener("wheel", wheelFn, { passive: false });

setTimeout(() => {
  window.scrollTo(0, 0);
}, 300);

function wheelFn(e) {
  // console.log("휠");
  e.preventDefault();

  if (stsWheel) return;
  stsWheel = true;
  setTimeout(() => {
    stsWheel = false;
  }, 500);
  let delta = e.wheelDelta;
  // 휠델타는 이벤트 객체에서 리턴해주는 방향,이동거리 등의 정보값
  // console.log("델타값:", delta);

  if (delta < 0) {
    // 아랫페이지로 가야하니까 페이지번호 증가
    pgNum++;
    // 한계수체크(끝번호고정)
    if (pgNum == totalCnt) {
      pgNum = totalCnt - 1;
      // 마지막페이지순번은 전체개수 -1
    } /// if//
  } else {
    // 반대는 윗방향이니까 페이지 번호 감소
    pgNum--;
    if (pgNum < 0) {
      pgNum = 0;
    } // if //
  }
  // console.log("pgNum:", pgNum,"total",totalCnt);

  let pos = elePage[pgNum].offsetTop;
  // offsetTop 은 최상단에서부터 거리
  // console.log("이동할 위치 ",pgNum ,pos);

  //5-2. 페이지 스크롤 위치 이동하기
  // scrollTo(0, y축이동값)
  window.scrollTo(0, pos);
} // wheelFn 함수 ///////////

// 상단 메뉴 /////
let openHam = document.querySelector(".open-ham");
let closeHam = document.querySelector(".close-ham");
let hamMenu = document.querySelector(".ham-menu");
let mwrap = document.querySelectorAll(".mwrap");
let mwrapList = document.querySelectorAll(".menu-list ul li ul");
console.log(mwrapList);

// 이벤트 파트/////////////
let evtBtn = document.querySelectorAll(".evtbtn");
// let eventbtn2 = document.querySelector('.eventbtn2');
let eventslide = document.getElementById("eventslide");
// console.log(eventslide);
let evtImgWrap = document.querySelector(".event-img-wrap");

let prot = false;

// 배너 슬라이드
let slBtn = document.querySelectorAll(".slide-btn li");
let bSlider = document.querySelector(".slider");

slBtn[0].addEventListener("click", function () {
  bSlider.style.left = "0";
  slBtn.forEach((val) => {
    val.style.display = "block";
    let thisval = this;
    if ((thisval = val)) this.style.display = "none";
  });
});
slBtn[1].addEventListener("click", function () {
  bSlider.style.left = "-100%";
  slBtn.forEach((val) => {
    val.style.display = "block";
    let thisval = this;
    if ((thisval = val)) this.style.display = "none";
  });
});
slBtn[2].addEventListener("click", function () {
  bSlider.style.left = "-200%";
  slBtn.forEach((val) => {
    val.style.display = "block";
    let thisval = this;
    if ((thisval = val)) this.style.display = "none";
  });
});

// 우측 메뉴 클릭 열기
openHam.addEventListener("click", function () {
  hamMenu.classList.add("on");
  console.log(hamMenu.offsetWidth);
});
// 우측메뉴 닫기
closeHam.addEventListener("click", function () {
  hamMenu.classList.remove("on");
  console.log(hamMenu.offsetWidth);
});

mwrap.forEach((ele, i) => {
  ele.onclick = () => {
    
    for (const x of mwrapList) {
      console.log(x);
      x.style.padding = '0 0';
      x.style.height = '0';
      x.style.border = '0';
    }

    mwrapList[i].style.padding = "30px 0";
    console.log(ele, i);
    mwrapList[i].style.height = "auto";
    console.log(ele, i);
    mwrapList[i].style.border = "2px solid #000;";
  };
});

// 이벤트 슬라이드 버튼
for (let x of evtBtn) {
  x.onclick = evtGoSlide;
}

function evtGoSlide() {
  // 광클 금지
  if (prot) return;
  prot = true;
  setTimeout(() => {
    prot = false;
  }, 600);

  let isEventRbtn = this.classList.contains("eventbtn2");
  // console.log(isEventRbtn);
  console.log(evtImgWrap.offsetWidth);
  if (isEventRbtn) {
    if (evtImgWrap.offsetWidth > 934) {
      eventslide.style.left = "-33.333%";
    } else if (evtImgWrap.offsetWidth > 467) {
      eventslide.style.left = "-50%";
    } else {
      eventslide.style.left = "-100%";
    }

    eventslide.style.transition = ".6s ease-in-out";

    setTimeout(() => {
      eventslide.appendChild(eventslide.querySelectorAll("li")[0]);
      eventslide.style.left = "0";
      eventslide.style.transition = "none";
    }, 600);
  } else {
    let list = eventslide.querySelectorAll("li");
    eventslide.insertBefore(list[list.length - 1], list[0]);

    if (evtImgWrap.offsetWidth > 934) {
      eventslide.style.left = "-33.333%";
    } else if (evtImgWrap.offsetWidth > 467) {
      eventslide.style.left = "-50%";
    } else {
      eventslide.style.left = "-100%";
    }

    eventslide.style.transition = "none";

    setTimeout(() => {
      eventslide.style.left = "0";
      eventslide.style.transition = ".6s ease-in-out";
    }, 600);
  }
}

// 비디오 이벤트

const videoMV = document.querySelector(".video-mv-img");
const videoImg = document.querySelectorAll(".video-img-box p");
const videoBg = document.querySelector(".video-mv-img img");
const v1 = document.querySelector(".v1");
const v2 = document.querySelector(".v2");
let islv = true;

videoMV.onclick = () => {
  console.log("비디오 무비");

  videoMV.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${
      islv ? "QyQEY9zDQbI" : "VTTkU4SReM8"
    }?autoplay=1" allow="autoplay" title="[홍루이젠]  프레시 샌드위치로 속은 든든하게, 칼로리는 가볍게!"></iframe>
    `;
  videoMV.classList.remove("off");
};

videoImg[0].onclick = () => {
  videoMV.innerHTML = `
  <img
    src="./images/video_bg1.png"
    alt="비디오 동영상 이미지"
  />
  `;
  videoMV.classList.add("off");
  videoImg[0].style.border = "3px solid #f52334";
  videoImg[1].style.border = "none";

  islv = true;
};
videoImg[1].onclick = () => {
  videoMV.innerHTML = `
  <img
    src="./images/video_bg2.png"
    alt="비디오 동영상 이미지"
  />
  `;
  videoMV.classList.add("off");
  videoImg[0].style.border = "none";
  videoImg[1].style.border = "3px solid #f52334";

  islv = false;
};
