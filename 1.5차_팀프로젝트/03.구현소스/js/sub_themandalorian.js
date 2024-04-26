import mFn from "./my_function.js";

const crtImgBox = mFn.qs(".character-img-box");

let hcode = `<div class="img-list">
              <ul class="list01">`;

for (let i = 1; i <= 10; i++) {
    hcode += `
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
            
hcode += `
</ul>
</div>
<div class="img-list">
<ul class="list02">`;

for (let i = 11; i <= 25; i++) {
  hcode += `
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



crtImgBox.innerHTML = hcode;

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
