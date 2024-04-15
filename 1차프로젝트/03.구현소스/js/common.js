// 공통처리 JS common

// import comData from "../data/common_data.js";

// import prdData from "../data/product_data.js";

export default function setElement() {
    const topArea = document.querySelector('#top-area');
    const hamArea = document.querySelector('#ham-area');
    const banArea = document.querySelector('#ban-area');
    const footerArea = document.querySelector('#footer-area');

    topArea.innerHTML = comData.topArea;
    hamArea.innerHTML = comData.hamArea;
    banArea.innerHTML = comData.banArea;
    footerArea.innerHTML = comData.footerArea;

    // makeProduct();
    // prdMakeList(menu);
    // prdGoSlide();
}

// product 페이지
const prdWrap = document.querySelector(".prdWrap");

let hcode = "";
let prdBtn = document.querySelectorAll(".prdBtn li");
let snum = 0;
let prdSlBtn = document.querySelectorAll(".prdSlBtn");
let prdslide = document.getElementById("prdslide");
let prdImgWrap = document.querySelector(".product-img-wrap");

function makeProduct(){
    console.log(prdImgWrap);

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
            prdMakeList(prdNew);
            break;
          case prdBtn[1]:
            prdBtn[1].classList.add("on");
            prdMakeList(prdSw);
            break;
          case prdBtn[2]:
            prdBtn[2].classList.add("on");
            prdMakeList(prdDst);
            break;
          case prdBtn[3]:
            prdBtn[3].classList.add("on");
            prdMakeList(prdDrk);
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