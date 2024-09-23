//메인sub badbatch js - sub_badbatch.js
import mFn from "./my_function.js";
import * as listMap from "./sub_badbatch_mapping.js";
import {epData, snsData,posData} from "../data/sub_badbatch_list_data.js";
// import common from "./common.js"
///////불러오기 영역//////////////////////

///COMMON JS 호출 /////////////////
// common();

// console.log(slideFn.carouselSlider);

// scrollFn.setScrollPos();
// scrollFn.startSS();

/* 슬라이드 리스트 맵핑 */
// listMap.epItems();
// listMap.snsItems();
// listMap.posItems();
// listMap.subbanItems();

///////////서브하단배너////////////////////
//슬라이더 박스
const slider = mFn.qs(".sub-ban-wrap");
//움직이는 요소
const inner = mFn.qs(".sub-ban-box");
const btn = mFn.qsa(".sub-btn");

//btn에 ele, idx 요소를 가지고 forEach 돈다. idx < 버튼 순서 때문
btn.forEach((ele, idx) => {
  //ele에 클릭 이벤트가 발생하면 이벤트 할당
  ele.onmouseenter = (e) => {
    //preventDefault: 윈도우 기본값 설정 끔, 기본값 변경해야할 경우 사용
    e.preventDefault();
    inner.style.top = -100 * idx + "%";
    inner.style.transition = ".4s";
  };
}); //forEach////////////////////////

export default function aaa() {
  //포스터 호버시 호버된 li 외 오퍼시티 줄이기
  function posOnFn() {
    const item = mFn.qsa(".pos-wrap li");
    const layer = mFn.qs(".pos-data-wrap");
    const posdata = posData;

    //마우스 호버시 li 커짐
    item.forEach((ele, idx) => {
      mFn.addEvt(ele, "mouseenter", itemClassAdd);
      mFn.addEvt(ele, "mouseleave", itemClassDel);

      //대상: item .pos-wrap li
      function itemClassDel() {
        if (ele) ele.classList.remove("on");
      }
      function itemClassAdd() {
        if (ele) {
          ele.classList.add("on");
        } /////////////if
      } ///////////////itemClassAdd

      //대상: layer .pos-data-wrap
      ele.onclick = () => {
        setLayer(idx);
        layer.classList.add("on");
      };
    }); //forEach
    //   layerOn();

    function setLayer(idx) {
      //포스터 레이어 생성
      let posCode = `
                <div class="pos-data-imgbox">
                <img src=${process.env.PUBLIC_URL+`/images/sub_badbatch_img/poster_${posdata[idx].idx}.jpg`} alt="${posdata[idx].title}" />
              </div>
              <div class="pos-data-text">
              <button class="close-btn-bb">
              <div class="">
              <img src=${process.env.PUBLIC_URL+`/images/sub_badbatch_img/close.png`} alt="">
              </div>
            </button>
                <div class="bullet"></div>
                <h3 class="title">${posdata[idx].title}</h3>
                <div class="desc">
                ${posdata[idx].text}
                </div>
                <!-- 이동링크 (관련 에피 페이지) -->
                <button class="btn-link">
                <a href="https://www.disneyplus.com/ko-kr/brand/star-wars?cid=DTCI-Synergy-StarWars-Site-Acquisition-Library-US-StarWars-NA-EN-NavPipe-StarWars_NavPipe_StarWarsStreamingAnytimeonDisneyPlus_Evergreen-NA">
                  <img src=${process.env.PUBLIC_URL+`/images/sub_badbatch_img/icon_link.png`} alt="링크 아이콘">
                  <span class="link-txt">more view</span>
                  <!-- svg 부모박스 -->
                  <div class="svg-arrow">
                    <svg class="svg-arrow1">
                      <use href="#arrow">
                    </svg>
                    </a>
                  </div>
              </button>
            
            </div>
                `;
      layer.innerHTML = posCode;

      mFn.qs(".close-btn-bb").onclick = () => {
        layer.classList.remove("on");
      }; ////close-btn
      console.log("ㅠㅠ", layer);
    }
  } ///////posOnFn 함수//////////////////
  posOnFn();
}
