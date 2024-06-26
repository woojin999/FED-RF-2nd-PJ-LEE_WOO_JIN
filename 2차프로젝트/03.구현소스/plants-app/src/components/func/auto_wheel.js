import $ from "jquery";

// // 전체 페이지번호
// let pno = 0;
// // 전체 페이지번호 초기화함수
// const zeroPno = () => {
//   pno = 0;
// };
// // 페이지 요소
// let pg;
// // 전체 페이지개수
// let pgcnt;
// // console.log("페이지개수:", pgcnt, pg);

// // 요소를 할당한 경우 로딩구역에서 할당

// const page = $(".page");
let page;
$(() => {
  // 페이지 요소
  page = $(".page");
  // 전체 페이지개수
//   pgcnt = pg.length;
}); /////////// load ///////////////

const showTit = (x) => {
//   console.log("ㅇㅇㅇ");
  console.log(($(window).height() / 3) * 2);
  const screenH = ($(window).height() / 3) * 2;

  const retVal = (e) => e.getBoundingClientRect().top;
  console.log(retVal);
  let xval = retVal(x);
  if (xval < screenH && xval > 0) {
    console.log("1123");
  }
  
}; 
function wheelFn() {
    // console.log("휠");
    // console.log(page);
    console.log("dd",page);
  for (let x of page) showTit(x)
}

// function movePg() {
//   // 대상: html,body -> 두개를 모두 잡아야 공통적으로 적용됨!
//   $("html,body")
//     .stop()
//     .animate(
//       {
//         scrollTop: $(window).height() * pno + "px",
//       },
//       700,
//       "easeInOutQuint",
//       actPage
//       // 애니메이션 후 actPage함수를 호출!
//     ); ///// animate //////
// } ///////////////// movePg ////////////////

// function initSet() {
//   // 1. 초기화하기

//   // 대상: 이미지 - .imgc
//   $(".page").css({
//     opacity: 0,
//     transition: "1s ease-in-out",
//   }); /////////// css //////////
// } /////////// initSet 함수 ///////////////

// function actPage() {
//   if (pno != 0 || pno != 6) {
//     $(".page").eq(pno).find("page").css({
//       opacity: 1,
//     }); ///////// css /////////
//   } ///////// if //////////////

//   // 첫페이지일때 등장요소 초기화!
//   if (pno == 0) initSet();
// } ///////// actPage 함수 //////////////////
export { wheelFn };
