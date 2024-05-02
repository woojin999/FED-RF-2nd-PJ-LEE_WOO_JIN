import mFn from "./my_function.js";

import * as mandalData from "../data/sub_themandalorian_data.js";


const epData = mandalData.episodeData;
const epList = mFn.qs(".ep-list");

let eplicode = `<ul class="fx-box">`;

for(let i = 0; i < 12; i++){
  // console.log(epData[i].image);
  eplicode += `
  <li>
    <div class="ep-img-box">
      <img src="./images/${epData[i].image}" alt="" />
      <div class="ep-bg-box"></div>
      <div class="ep-txt-box">
        <h3>
          <span class="ep-title">
            ${epData[i].title}
          </span>
        </h3>
        <p class="ep-desc">
          ${epData[i].desc}
        </p>
      </div>
    </div>
  </li>
  `;
}
eplicode += `</ul>`;

epList.innerHTML = eplicode;

///////////////////////////////////////////////////////////////

const epbtn = mFn.qsa(".epbtn");
const vdbtn = mFn.qsa(".vdbtn");
const epSlide = mFn.qsa(".ep-img-wrap ul li");
const videoWrap = mFn.qs(".video-wrap");
const videoli = mFn.qs(".video-list");
const videoBox = mFn.qs(".video-cont-box");
const videoTab = mFn.qs(".video-tab");

const vdData = mandalData.videoData;



let vlicode = `<ul class="fx-box">`;
for (let i = 0; i <= 5; i++) {
  vlicode += `
    <li>
      <div class="video-box">
        <div class="video-img">
          <img src="./images/${vdData[i].image}" alt="" />
        </div>
        <div class="video-txt-box">
          <h3>
            <span>
              ${vdData[i].desc}
            </span>
          </h3>
        </div>
      </div>
    </li>
  `;
}
vlicode += `</ul>`;

videoli.innerHTML = vlicode;

const vdSlide = mFn.qsaEl(videoWrap, ".video-img-wrap ul li");
const video = mFn.qsaEl(videoli, ".video-box");


let vdcode = ``;
video.forEach((ele, i) => {
  ele.onclick = () => {
    vdcode += `
    <div class="video-tab-btn fa-solid fa-xmark fa-3x"></div>
    <iframe src="https://www.youtube.com/embed/${vdData[i].video}"></iframe>
  `;
    videoTab.innerHTML = vdcode;
    videoBox.classList.add("on");

    mFn.qsEl(videoTab, "div").onclick = () => {
      console.log("ddd");
      videoBox.classList.remove("on");
      vdcode = ``;
    };
  };
});


let epSnum = 0;
let vdSnum = 0;
let prot = false;

for (let x of epbtn) {
  x.onclick = GoEpSlide;
}
for (let x of vdbtn) {
  x.onclick = GoVdSlide;
}

console.log(epSlide.length);

function GoEpSlide() {
  // 광클 금지
  if (prot) return;
  prot = true;
  setTimeout(() => {
    prot = false;
  }, 500);

  let isEpRbtn = this.classList.contains("epbtn2");
  let cntNum;
  let epSlCnt = epSlide.length;

  isEpRbtn ? epSnum++ : epSnum--;

  epSlide.forEach((v) => {
    v.style.left = -33.3333 * epSnum + "%";
  });

  cntNum = 3;

  if (epSnum < 0) {
    epSnum = 0;
  } else if (epSnum > epSlCnt - cntNum) {
    epSnum = epSlCnt - cntNum;
  }

  if (epSnum == 0 || epSnum == epSlCnt - cntNum) {
    this.style.display = "none";
  } else {
    for (let x of epbtn) {
      x.style.display = "block";
    }
  }
}

function GoVdSlide() {
  // 광클 금지
  if (prot) return;
  prot = true;
  setTimeout(() => {
    prot = false;
  }, 500);

  let isVdRbtn = this.classList.contains("vdbtn2");

  let cntNum;
  let vdSlCnt = 5;
  console.log(vdSlCnt);

  isVdRbtn ? vdSnum++ : vdSnum--;

  vdSlide.forEach((v) => {
    v.style.left = -33.3333 * vdSnum + "%";
  });

  cntNum = 3;

  if (vdSnum < 0) {
    vdSnum = 0;
  } else if (vdSnum > vdSlCnt - cntNum) {
    vdSnum = vdSlCnt - cntNum;
  }

  if (vdSnum == 0 || vdSnum == vdSlCnt - cntNum) {
    this.style.display = "none";
  } else {
    for (let x of vdbtn) {
      x.style.display = "block";
    }
  }
}

///////////////////////////////////

const crtImgBox = mFn.qs(".character-img-box");

let crtcode = `<div class="img-list">
              <ul class="list01">`;

for (let i = 1; i <= 10; i++) {
  crtcode += `
        <li>
            <div class="list-box">
                <img src="./images/character${i}.jpeg" alt="" />
                <h3>
                    <span> Kelleran Beq</span>
                </h3>
            </div>
        </li>
    `;
}
crtcode += `
</ul>
</div>
<div class="img-list">
<ul class="list02">`;
for (let i = 11; i <= 25; i++) {
  crtcode += `
        <li>
            <div class="list-box">
                <img src="./images/character${i}.jpeg" alt="" />
                <h3>
                    <span> Kelleran Beq</span>
                </h3>
            </div>
        </li>
    `;
}
crtImgBox.innerHTML = crtcode;

let target = mFn.qsEl(crtImgBox, ".list01");
let target2 = mFn.qsEl(crtImgBox, ".list02");
// 기준값 업데이트 함수
const updateCriteria = () => mFn.qsaEl(target, "li")[0].offsetWidth;
const updateCriteria2 = () => mFn.qsaEl(target2, "li")[0].offsetWidth;
// 기준값(대상 li의 가로크기값)
let criteria = updateCriteria();
let criteria2 = updateCriteria2();

mFn.addEvt(window, "resize", () => {
  criteria = updateCriteria();
  criteria2 = updateCriteria2();
});

let currVal = 0;
let currVal2 = 0;

function moveGallery() {
  target.style.translate = --currVal + "px";

  if (currVal <= Math.floor(-criteria)) {
    target.appendChild(mFn.qsaEl(target, "li")[0]);
    target.style.translate = "0px";
    currVal = 0;
  } /// if///

  if (!stopSts) setTimeout(moveGallery, 6);
} ////// moveGallery 함수 //////

function moveGallery2() {
  target2.style.translate = --currVal2 + "px";

  if (currVal2 <= Math.floor(-criteria2)) {
    target2.appendChild(mFn.qsaEl(target2, "li")[0]);
    target2.style.translate = "0px";
    currVal2 = 0;
  } /// if///

  if (!stopSts) setTimeout(moveGallery2, 10);
} /// moveGallery2 함수

let stopSts = false;

mFn.addEvt(crtImgBox, "mouseenter", () => {
  stopSts = true;
});

mFn.addEvt(crtImgBox, "mouseleave", () => {
  stopSts = false;
  moveGallery();
  moveGallery2();
});

setTimeout(moveGallery);
setTimeout(moveGallery2);
