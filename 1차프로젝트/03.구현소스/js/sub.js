import setElement from "./common.js";
setElement();

// 상단 메뉴 /////
let openHam = document.querySelector(".open-ham");
let closeHam = document.querySelector(".close-ham");
let hamMenu = document.querySelector(".ham-menu");

// 우측 메뉴 클릭 열기
openHam.addEventListener("click", function () {
  hamMenu.classList.add("on");
});
// 우측메뉴 닫기
closeHam.addEventListener("click", function () {
  hamMenu.classList.remove("on");
});

// 스크롤
console.log(window.scrollY);

window.addEventListener("wheel", subWheelFn);

setTimeout(() => {
  window.scrollTo(0, 0);
}, 300);

let subWrap = document.querySelector(".sub-wrap");
let brandBox = document.querySelectorAll(".brand-box");
let blistBox = document.querySelector(".blist.on strong");

console.log(blistBox);
brandBox[0].style.visibility = "visible";
function subWheelFn(e) {
  // console.log("휠");
  // e.preventDefault();
  let scrollY = window.scrollY;
  console.log(scrollY);
  brandBox.forEach((ele) => {
    ele.style.visibility = "hidden";
    ele.style.transition = "none";
    ele.style.opacity = "0";

    if (scrollY <= 300) {
      subWrap.style.background = "#ffe2de";
      brandBox[0].style.visibility = "visible";
      brandBox[0].style.opacity = "1";
    } else if (scrollY > 300 && scrollY <= 1300) {
      subWrap.style.background = "#fff9cd";
      brandBox[1].style.visibility = "visible";
      brandBox[1].style.opacity = "1";
    } else if (scrollY > 1300 && scrollY <= 2300) {
      subWrap.style.background = "#fdf08a";
      brandBox[2].style.visibility = "visible";
      brandBox[2].style.opacity = "1";
    } else if (scrollY > 2300 && scrollY <= 3700) {
      subWrap.style.background = "#fff9cd";
      brandBox[3].style.visibility = "visible";
      brandBox[3].style.opacity = "1";
    }
    ele.style.transition = "opacity 1.5s";
  });
}

// 전체document높이
let docH = document.body.clientHeight;
// 화면높이
let winH = window.innerHeight;
// 스크롤 한계값
let scLlimit = docH - winH;
// console.log("문서높이", docH, "\n화면높이:", winH, "\n한계값", scLlimit);

const simple = document.querySelectorAll(".simple-img-box img");
const sweet = document.querySelectorAll(".sweet-img-box img");
const soft = document.querySelectorAll(".soft-img-box img");
console.log(simple[0]);

window.addEventListener("scroll", moveCheese);
function moveCheese() {
  console.log("cheese");

  let scTop = window.scrollY;

  let cTop = (winH * scTop) / scLlimit;

  simple[0].style.top = cTop - 300 + "px";
  simple[1].style.top = cTop - 300 + "px";
  sweet[0].style.top = cTop - 600 + "px";
  sweet[1].style.top = cTop - 600 + "px";
  soft[0].style.top = cTop - 900 + "px";
  soft[1].style.top = cTop - 900 + "px";

  simple[2].style.top = (cTop - 900) * -1 + "px";
  simple[3].style.top = (cTop - 900) * -1 + "px";
  sweet[2].style.top = (cTop - 1000) * -1 + "px";
  sweet[3].style.top = (cTop - 1000) * -1 + "px";
  soft[2].style.top = (cTop - 1200) * -1 + "px";
}
