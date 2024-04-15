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
let blistBox = document.querySelector('.blist.on strong');


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
    //   blistBox[1].style.background = "#fff9cd";
    } else if (scrollY > 1300 && scrollY <= 2300) {
      subWrap.style.background = "#fdf08a";
      brandBox[2].style.visibility = "visible";
      brandBox[2].style.opacity = "1";
    //   blistBox[2].style.background = "#fdf08a";
    } else if (scrollY > 2300 && scrollY <= 3700) {
      subWrap.style.background = "#fff9cd";
      brandBox[3].style.visibility = "visible";
      brandBox[3].style.opacity = "1";
    //   blistBox[3].style.background = "#fff9cd";
    } 
    // else if (scrollY > 3300 && scrollY <= 4300) {
    //   subWrap.style.background = "#9ad6cb";
    //   brandBox[4].style.visibility = "visible";
    //   brandBox[4].style.opacity = "1";
    // }
    ele.style.transition = "opacity 1.5s";
  });
}

// 전체document높이
let docH = document.body.clientHeight;
// 화면높이
let winH =  window.innerHeight;
// 스크롤 한계값
let scLlimit = docH - winH;
console.log('문서높이', docH,'\n화면높이:',winH,'\n한계값',scLlimit);

const cheese = document.querySelector('#cheese');
const sham = document.querySelector('#sham');
const simple03 = document.querySelector('#simple03');
const simple04 = document.querySelector('#simple04');
const sweet01 = document.querySelector('#sweet01');
const sweet02 = document.querySelector('#sweet02');
const sweet03 = document.querySelector('#sweet03');
const sweet04 = document.querySelector('#sweet04');
const soft01 = document.querySelector('#soft01');
const soft02 = document.querySelector('#soft02');
const soft03 = document.querySelector('#soft03');
console.log(cheese);

window.addEventListener('scroll',moveCheese);
function moveCheese() {
    console.log('cheese');

    let scTop = window.scrollY;

    let cTop = winH * scTop / scLlimit;

    cheese.style.top = cTop-300 + 'px';
    sham.style.top = cTop-300 + 'px';
    sweet01.style.top = cTop-600 + 'px';
    sweet02.style.top = cTop-600 + 'px';
    soft01.style.top = cTop-900 + 'px';
    soft02.style.top = cTop-900 + 'px';
    
    simple03.style.top = (cTop-900)*-1 + 'px';
    simple04.style.top = (cTop-900)*-1 + 'px';
    sweet03.style.top = (cTop-1000)*-1 + 'px';
    sweet04.style.top = (cTop-1000)*-1 + 'px';
    soft03.style.top = (cTop-1200)*-1 + 'px';

}