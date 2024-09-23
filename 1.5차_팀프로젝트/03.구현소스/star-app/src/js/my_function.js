// DOM 선택 객체함수
const domFn = {
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
     
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
  
    // 바운딩위치값함수
    getBCR: (ele) => ele.getBoundingClientRect().top,
  
    // 옵셋탑값 반환함수
    getOT: (ele) => ele.offsetTop,

  }


 // 내보내기
export default domFn;
