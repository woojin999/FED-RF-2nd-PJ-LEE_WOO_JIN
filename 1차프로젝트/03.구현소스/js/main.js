
// 상단 메뉴 /////
let openHam = document.querySelector('.open-ham');
let closeHam = document.querySelector('.close-ham');
let hamMenu = document.querySelector('.ham-menu');


// 이벤트 파트/////////////
let evtBtn = document.querySelectorAll('.evtbtn');
// let eventbtn2 = document.querySelector('.eventbtn2');
let eventslide =document.getElementById('eventslide');
// console.log(eventslide);

let prot = false;

// 배너 슬라이드
let sBtn1 = document.querySelector(".sbtn-01");
let sBtn2 = document.querySelector(".sbtn-02");
let sBtn3 = document.querySelector(".sbtn-03");
let bSlider = document.querySelector('.slider')

sBtn1.addEventListener("click", (e) => {
  bSlider.style.left = '0';
  console.log("ddaad",e);
  /* this.style.display = 'none'; */
});
sBtn2.addEventListener("click", () => {
  bSlider.style.left = '-100%';
});
sBtn3.addEventListener("click", () => {
  bSlider.style.left = '-200%';
});

// 우측 메뉴 클릭 열기
openHam.addEventListener('click',function () {
    hamMenu.classList.add('on');
});
// 우측메뉴 닫기
closeHam.addEventListener('click', function () {
    hamMenu.classList.remove('on');
});

// 이벤트 슬라이드 버튼 
for (let x of evtBtn) {
    x.onclick = evtGoSlide;
  }


function evtGoSlide(){

    // 광클 금지
    if (prot) return; 
    prot = true; 
    setTimeout(() => {
      prot = false; 
    }, 500);

    let isEventRbtn = this.classList.contains('eventbtn2')
    console.log(isEventRbtn);
    if (isEventRbtn) {
        
        
        eventslide.style.left ="-33.333%";
        eventslide.style.transition = ".5s ease-in-out";
        
        setTimeout(() => {
            eventslide.appendChild(eventslide.querySelectorAll("li")[0]);
            eventslide.style.left = "0";
            eventslide.style.transition = "none";
        }, 600);
    }else{
        let list = eventslide.querySelectorAll("li");
        eventslide.insertBefore(list[list.length - 1], list[0]);
        eventslide.style.left ="-33.333%";
        eventslide.style.transition = "none";

        setTimeout(() => {
            eventslide.style.left = "0";
            eventslide.style.transition = ".5s ease-in-out";
        }, 500);
    }
}
