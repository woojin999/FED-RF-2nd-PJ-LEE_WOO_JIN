
// 메인 js - main.js //

import setElement from "./common.js";
setElement();

// product 데이터
import * as prdData from "../data/product_data.js";


// product 페이지
const prdWrap = document.querySelector(".prdWrap");

let hcode = "";
let prdBtn = document.querySelectorAll(".prdBtn li");
let snum = 0;
let prdSlBtn = document.querySelectorAll(".prdSlBtn");
let prdslide = document.getElementById("prdslide");
let prdImgWrap = document.querySelector(".product-img-wrap");
// 광클금지
let prot = false;

makeProduct();
prdMakeList(prdData.prdNew);


function makeProduct(){

    prdBtn.forEach((val) => {
      val.addEventListener("click", () => {
        // on 클래스 모두 지움
        snum = 0;
        prdSlBtn[0].style.display = "none";
        prdslide.style.transition = "none";

        for (const x of prdBtn) {
          x.classList.remove("on");
        }
        hcode = "";
        switch (val) {
          case prdBtn[0]:
            prdBtn[0].classList.add("on");
            prdMakeList(prdData.prdNew);
            break;
          case prdBtn[1]:
            prdBtn[1].classList.add("on");
            prdMakeList(prdData.prdSw);
            break;
          case prdBtn[2]:
            prdBtn[2].classList.add("on");
            prdMakeList(prdData.prdDst);
            break;
          case prdBtn[3]:
            prdBtn[3].classList.add("on");
            prdMakeList(prdData.prdDrk);
            break;
        }
      });
    });

    prdSlBtn[0].style.display = "none";

    for (let x of prdSlBtn) {
      x.onclick = prdGoSlide;
    }

}

function prdMakeList(menu) {
  for (let x in menu) {
    let data = menu[x];
    hcode += `   
    <li>
      <a href="#;">
        <img
          src="./images/${data.imghv}"
          alt="상품이미지"
        />
        <img
          src="./images/${data.img}"
          alt="상품이미지"
        />
        <div class="product-txt-box">
          <strong>${data.name}</strong>
          <span
            >${data.desc}</span
          >
        </div>
      </a>
    </li>
    `;
  } // for문
  prdWrap.innerHTML = hcode;
  prdslide.style.left = "0%";
  
  if(prdslide.childElementCount == 4) {
    
    prdSlBtn[1].style.display = "none";
  }else{
    
    prdSlBtn[1].style.display = "block";
  }
} // prdNewList



function prdGoSlide() {
  // 광클 금지
  if (prot) return;
  prot = true;
  setTimeout(() => {
    prot = false;
  }, 500);

  let liCnt = prdslide.childElementCount;
  
  let isRbtn = this.classList.contains("slBtn2");

  isRbtn ? snum++ : snum--;

  let cntNum;

  if (prdImgWrap.offsetWidth > 1050) {
    cntNum = 4;
    prdslide.style.left = -25 * snum + "%";
  } else if (prdImgWrap.offsetWidth > 700) {
    cntNum = 3;
    prdslide.style.left = -33.33 * snum + "%";
  } else if (prdImgWrap.offsetWidth > 350) {
    cntNum = 2;
    prdslide.style.left = -50 * snum + "%";
  } else {
    cntNum = 1;
    prdslide.style.left = -100 * snum + "%";
  }

  if (snum < 0) {
    snum = 0;
  } else if (snum > liCnt - cntNum) {
    snum = liCnt - cntNum;
  } // elseif

  if (snum === 0 || snum === liCnt - cntNum) {
    // 해당 버튼 숨기기
    this.style.display = "none";
    // prdSlBtn[0].style.display = "block";
  } else {
    // 버튼 다시 보이기
    for (let x of prdSlBtn) {
      x.style.display = "block";
    }
  } //// else /////

  if (snum !== 0) {
    prdSlBtn[0].style.display = "block";
  } else {
    prdSlBtn[1].style.display = "block";
  }
  console.log("snum", snum);

  prdslide.style.transition = ".6s ease-in-out";
}



/************************************* prd 끝 *************************************/


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
