const prdNew = {
  new1: {
    img: "product_new1.png",
    imghv: "product_new_hover1.png",
    name: "프리미엄 햄치즈 샌드위치",
    desc: "탕종식빵과 터키브레스트 햄,통모짜렐라치즈의 만남",
  },
  new2: {
    img: "product_new2.png",
    imghv: "product_new_hover2.png",
    name: "프레시 파 베이컨 크림치즈",
    desc: "부드러운 크림치즈에 쪽파와 베이컨이가득!",
  },
  new3: {
    img: "product_new3.png",
    imghv: "product_new_hover3.png",
    name: "매콤에그마요 총좌빙",
    desc: "매콤한 소스와 고소한 에그마요가 듬뿍",
  },
  new4: {
    img: "product_new4.png",
    imghv: "product_new_hover4.png",
    name: "홍밀크",
    desc: "우유 속 비정제 흑설탕의 건강함 달콤함",
  },
  new5: {
    img: "product_new5.png",
    imghv: "product_new_hover5.png",
    name: "초콜릿 밀크",
    desc: "달콤한 초콜릿의 진한 맛과 우유의 조화",
  },
};

const prdWrap = document.querySelector('.prdWrap')
console.log(prdWrap);

evtMakeList();

function evtMakeList() {
  let hcode = "";
  for (let x in prdNew) {
    let data = prdNew[x];

    hcode += `   
    <li>
      <a href="#">
        <img
          src="./images/${data.img}"
          alt="상품이미지"
        />
        <img
          src="./images/${data.imghv}"
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
} // makelist

