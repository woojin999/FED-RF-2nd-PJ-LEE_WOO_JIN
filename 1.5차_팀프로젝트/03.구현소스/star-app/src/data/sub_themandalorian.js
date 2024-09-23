import domFn from "../js/my_function";

import { videoData } from "./sub_themandalorian_data";

function mandalvideo() {
  const vdbtn = domFn.qsa(".vdbtn");

  const videoWrap = domFn.qs(".video-wrap");
  const videoli = domFn.qs(".video-list");
  const videoBox = domFn.qs(".video-cont-box");
  const videoTab = domFn.qs(".video-tab");

  const vdData = videoData;

  // console.log(videoWrap.offsetWidth);
  // videoWrap.offsetWidth;

  let vlicode = `<ul class="fx-box">`;
  for (let i = 0; i <= 10; i++) {
    vlicode += `
    <li>
      <div class="mdvideo-box">
        <div class="video-img">
          <img src="${process.env.PUBLIC_URL}/images/sub_themandalorian_images/${vdData[i].image}" alt="" />
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

  const vdSlide = domFn.qsaEl(videoWrap, ".video-img-wrap ul li");
  const video = domFn.qsaEl(videoli, ".mdvideo-box");

  let vdcode = ``;
  video.forEach((ele, i) => {
    ele.onclick = () => {
      vdcode += `
    <div class="video-tab-btn fa-solid fa-xmark fa-3x"></div>
    <iframe src="https://www.youtube.com/embed/${vdData[i].video}?autoplay=1" allow="autoplay""></iframe>
  `;
      videoTab.innerHTML = vdcode;
      videoBox.classList.add("on");
      // body.style.overflow = "hidden";

      domFn.qsEl(videoTab, "div").onclick = () => {
        console.log("ddd");
        videoBox.classList.remove("on");
        vdcode = ``;
        let ifr = domFn.qs(".video-tab iframe");
        ifr.setAttribute("src","");
      };
    };
  });

  let vdSnum = 0;
  let prot = false;
  for (let x of vdbtn) {
    x.onclick = GoVdSlide;
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
    let vdSlCnt = 11;
    console.log(vdSlCnt);

    isVdRbtn ? vdSnum++ : vdSnum--;

    vdSlide.forEach((v) => {
      if (videoWrap.offsetWidth > 1024) {
        v.style.left = -33.3333 * vdSnum + "%";
        cntNum = 3;
      } else if (videoWrap.offsetWidth > 860) {
        v.style.left = -50 * vdSnum + "%";
        cntNum = 2;
      } else {
        v.style.left = -100 * vdSnum + "%";
        cntNum = 1;
      }
    });

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

  // 화면 사이즈 줄일때 슬라이드 위치 초기화
  domFn.addEvt(window, "resize", () => {
    vdSlide.forEach((v) => {
      v.style.left = 0;
    });
   
    vdSnum = 0;
    vdbtn[0].style.display = "none";

    vdbtn[1].style.display = "block";
  }); ////////////// resize함수 //////////////////
}
function mandalgallery(params) {
  let prot = false;
  const crtImgBox = domFn.qs(".character-img-box");
  
let target = domFn.qsEl(crtImgBox, ".list01");
let target2 = domFn.qsEl(crtImgBox, ".list02");
// 기준값 업데이트 함수
const updateCriteria = () => domFn.qsaEl(target, "li")[0].offsetWidth;
const updateCriteria2 = () => domFn.qsaEl(target2, "li")[0].offsetWidth;
// 기준값(대상 li의 가로크기값)
let criteria = updateCriteria();
let criteria2 = updateCriteria2();

domFn.addEvt(window, "resize", () => {
  criteria = updateCriteria();
  criteria2 = updateCriteria2();
});

let currVal = 0;
let currVal2 = 0;

function moveGallery() {
  target.style.translate = --currVal + "px";

  if (currVal <= Math.floor(-criteria)) {
    target.appendChild(domFn.qsaEl(target, "li")[0]);
    target.style.translate = "0px";
    currVal = 0;
  } /// if///

  if (!stopSts) setTimeout(moveGallery, 6);
} ////// moveGallery 함수 //////

function moveGallery2() {
  target2.style.translate = --currVal2 + "px";

  if (currVal2 <= Math.floor(-criteria2)) {
    target2.appendChild(domFn.qsaEl(target2, "li")[0]);
    target2.style.translate = "0px";
    currVal2 = 0;
  } /// if///

  if (!stopSts) setTimeout(moveGallery2, 10);
} /// moveGallery2 함수

let stopSts = false;

domFn.addEvt(crtImgBox, "mouseenter", () => {
  stopSts = true;
});

domFn.addEvt(crtImgBox, "mouseleave", () => {
  stopSts = false;
  moveGallery();
  moveGallery2();
});

setTimeout(moveGallery);
setTimeout(moveGallery2);

//////////////////////갤러리////////////////////////
const gallery = domFn.qsa(".gallery-box");
const galleryBox = domFn.qs(".gallery-cont-box");
const galleryTab = domFn.qs(".gallery-tab");
const gtabBtn = domFn.qs(".gallery-tab-btn");
const gSlBtn = domFn.qsa(".gbtn");
const galleryTxt = domFn.qs(".gallery-img-txt");

let galcode = `<ul>`;
let galTxtcode = ``;
let galPgNum = 1;
let galPgTotal;
let isOnebox;

gallery.forEach((ele) => {
  let isFirstGbox = ele.classList.contains("gbox1");
  ele.onclick = () => {
    isFirstGbox ? (isOnebox = true) : (isOnebox = false);

    isFirstGbox ? (galPgTotal = 26) : (galPgTotal = 19);
    galleryBox.classList.add("on");
    for (let i = 1; i <= galPgTotal; i++) {
      galcode += `
      <li>
        <div class="gimg-wrap">
          <img src="${process.env.PUBLIC_URL}/images/sub_themandalorian_images/gallery_${
            isFirstGbox ? "a" : "b"
          }${i}.jpg" alt="갤러리이미지" class="image${
        isFirstGbox ? "a" : "b"
      }" />
        </div>
      </li>
      `;
    }

    galTxtcode += `
    <p>${
      isFirstGbox ? "Poster Gallery" : "Stills Gallery"
    } | The Mandalorian <br/> Season 3</p>
    <p>${galPgNum} of ${galPgTotal}</p>
    `;

    galcode += `</ul> `;

    galleryTab.innerHTML = galcode;
    galleryTxt.innerHTML = galTxtcode;
    // body.style.overflow = "hidden";
  };
});

gtabBtn.onclick = () => {
  galleryBox.classList.remove("on");
  galcode = `<ul>`;
  galTxtcode = ``;
  galPgNum = 1;
  // body.style.overflow = "auto";
};

/////////////// 갤러리 슬라이드 ////////////////
for (let x of gSlBtn) {
  x.onclick = galleryGoSlide;
}

function galleryGoSlide() {
  // 광클 금지
  if (prot) return;
  prot = true;
  setTimeout(() => {
    prot = false;
  }, 500);

  let isgalleryRbtn = this.classList.contains("gbtn2");
  const galSlide = domFn.qsEl(galleryTab, "ul");

  if (isgalleryRbtn) {
    galSlide.style.left = "-100%";
    galSlide.style.transition = ".4s ease-in-out";
    galSlide.style.opacity = "1";

    galPgNum == galPgTotal ? (galPgNum = 1) : galPgNum++;

    setTimeout(() => {
      galSlide.appendChild(galSlide.querySelectorAll("li")[0]);
      galSlide.style.left = "0%";
      galSlide.style.transition = "none";
    }, 500);

    galTxtcode = `
      <p>${
        isOnebox ? "Poster Gallery" : "Stills Gallery"
      } | The Mandalorian <br/> Season 3</p>
      <p>${galPgNum} of ${galPgTotal}</p>
      `;

    galleryTxt.innerHTML = galTxtcode;
  } else {
    let list = galSlide.querySelectorAll("li");
    galSlide.insertBefore(list[list.length - 1], list[0]);
    galSlide.style.left = "-100%";
    galSlide.style.transition = "none";

    galPgNum == 1 ? (galPgNum = galPgTotal) : galPgNum--;

    setTimeout(() => {
      galSlide.style.left = "0%";
      galSlide.style.transition = ".4s ease-in-out";
    }, 0);

    galTxtcode = `
      <p>${
        isOnebox ? "Poster Gallery" : "Stills Gallery"
      } | The Mandalorian <br/> Season 3</p>
      <p>${galPgNum} of ${galPgTotal}</p>
      `;

    galleryTxt.innerHTML = galTxtcode;
  }
}
}

export { mandalvideo, mandalgallery };
