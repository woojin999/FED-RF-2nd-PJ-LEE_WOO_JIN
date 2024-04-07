// 상단 메뉴 /////
let openHam = document.querySelector(".open-ham");
let closeHam = document.querySelector(".close-ham");
let hamMenu = document.querySelector(".ham-menu");

// 이벤트 파트/////////////
let evtBtn = document.querySelectorAll(".evtbtn");
// let eventbtn2 = document.querySelector('.eventbtn2');
let eventslide = document.getElementById("eventslide");
// console.log(eventslide);

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
});
// 우측메뉴 닫기
closeHam.addEventListener("click", function () {
  hamMenu.classList.remove("on");
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
  console.log(isEventRbtn);
  if (isEventRbtn) {
    eventslide.style.left = "-33.333%";
    eventslide.style.transition = ".6s ease-in-out";

    setTimeout(() => {
      eventslide.appendChild(eventslide.querySelectorAll("li")[0]);
      eventslide.style.left = "0";
      eventslide.style.transition = "none";
    }, 600);
  } else {
    let list = eventslide.querySelectorAll("li");
    eventslide.insertBefore(list[list.length - 1], list[0]);
    eventslide.style.left = "-33.333%";
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
    <iframe src="https://www.youtube.com/embed/${islv ? 'QyQEY9zDQbI': 'VTTkU4SReM8'}?autoplay=1" allow="autoplay" title="[홍루이젠]  프레시 샌드위치로 속은 든든하게, 칼로리는 가볍게!"></iframe>
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
