
/********************************************
 [ 시리즈이미지,뉴스이미지 클릭시 toggle로 on넣어 
  posterBox / newBox 클래스에 맞는 데이터 보기/닫기]
  이벤트 대상: .item-box
      변경대상: .item-box
*******************************************/
// 내함수 불러오기
import mFn from "../js/my_function";
/* html main영역구조 + 공통데이터 불러오기 */
import * as mainData from "../data/id_main_data.js";

export default function showPosterFn () {
    const newBox = mFn.qsa(".news-box");
    const posterBox = mFn.qsa(".right-wrap.second .item-box");
    // console.log('mainData.newsItemData',);
  
  
  
    // console.log(posterBox, newBox);
    /* 뉴스 */
    newBox.forEach((ele, idx) => {
      mFn.addEvt(ele, "click", () => showItem(ele, idx));
    }); ////////forEach//////
    /* 포스터 */
    posterBox.forEach((ele, idx) => {
      mFn.addEvt(ele, "click", () => showItem(ele, idx));
    }); ////////forEach//////
  
    
    function showItem(ele, idx) {
    
      console.log("클릭됨", idx);
  
      ele.classList.toggle("on");
  
      // "on" 클래스가 추가되었을 때만 스크롤 잠금
      if (ele.classList.contains("on")) {
        document.body.style.overflow = 'hidden';
  
      } else {
        document.body.style.overflowX = 'hidden';
        document.body.style.overflowY = 'auto';
      }
  
  
  
      // 클릭 될때마다 opacity값을 css의 초기값으로 설정(꼬임차단)
      ele.style.setProperty("--opacity", "0");
  
      if (ele.classList.contains("news-box")) {
        
        console.log("뉴스영역");
        // console.log('mainData.newsItemData',newsItem);
        
        ele.style.setProperty(
          "--content1",`"${mainData.newsItemData[idx].tit}"`);
        ele.style.setProperty(
          "--content2",`"${mainData.newsItemData[idx].info}"`);
        ele.style.setProperty(
          "--bg-image",`url(${process.env.PUBLIC_URL}/images/main_images/${mainData.newsItemData[idx].src})`);
  
      } else {
        console.log("시리즈영역");
        ele.style.setProperty("--content1",`"${mainData.seriesData[idx].title}"`);
        ele.style.setProperty("--content2", `'${mainData.seriesData[idx].detail}'`);
        ele.style.setProperty("--bg-image",`url(${process.env.PUBLIC_URL}/images/main_images/${mainData.seriesData[idx].src})`);
      }
      setTimeout(() => {
        //비동기처리 (css transition 적용시간을 위한 대기시간주기)
  
        //기존 열려있는게 있다면 투명도 0처리 후 클릭요소만 투명도 1주기
        newBox.forEach(ele=>{ele.style.setProperty("--opacity", "0");})
        posterBox.forEach(ele=>{ele.style.setProperty("--opacity", "0");})
        ele.style.setProperty("--opacity", "1");
      }, 0);
  
  
    } /////showPoster/////
  
};