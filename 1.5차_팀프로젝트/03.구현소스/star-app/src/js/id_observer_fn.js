/********************************************
     [ 요소 화면에 등장시 보이기 ]
        추상화함수: IntersectionObserver 
        변경대상: .txt-content / .left-wrap / .right-wrap
    *******************************************/
// 내함수 불러오기
import mFn from "../js/my_function";

export default function observerFn () {
   ///////// 코드랩핑 시작
   const visualBox = mFn.qs(".visualView");
   const txtBox = mFn.qsa(".txt-content");
   const newsLbox = mFn.qs(".left-wrap");
   const newsRbox = mFn.qs(".right-wrap");
   const seriesBox = mFn.qsa("section.news-area > .right-wrap > .item-box");
   // console.log(seriesBox);

   txtBox.forEach((x) => {
      x.style.opacity = "0";
      x.style.transition = "1s ease-out";
      x.style.boxShadow = "0px 0px 40px #00ffff7a";
      revealOnViewport(x);
   });
   seriesBox.forEach((x) => {
      x.style.opacity = "0";
      x.style.transition = ".5s ease-out";
      revealOnViewport(x);
   });

   newsRbox.style.transition = "1s ease-out";
   newsLbox.style.transition = "1s ease-out 0.5s";

   visualBox.style.opacity = "0";
   visualBox.style.transition = ".5s ease-out";

   revealOnViewport(visualBox);
   revealOnViewport(newsLbox);
   revealOnViewport(newsRbox);

   /* 화면등장시 보이기 추상화 함수 */
   function revealOnViewport(target) {
      const observer = new IntersectionObserver((ele) => {
         ele.forEach((ele) => {
            if (ele.isIntersecting) {
               ele.target.style.opacity = 1;
            } else {
               ele.target.style.opacity = 0;
            }
         });
      });

      observer.observe(target);
   }
};
