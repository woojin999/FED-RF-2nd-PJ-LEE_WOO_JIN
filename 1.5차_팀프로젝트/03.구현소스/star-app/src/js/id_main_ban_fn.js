// 스타워즈 PJ 메인배너 Fn - id_main_ban_fn.js //////////////

// 내함수 js 가져오기 (새이름지음)
import mFn from "./my_function.js";

  /********************************************
 [ 메인배너 버튼 클릭시 left값 이동하기 ]
 이벤트대상: .banbtn
 변경대상: .ban_wrap 
*******************************************/

export function banFn () {


  (() => {
    ///////// 코드랩핑 시작

    const banner = mFn.qs(".ban_wrap");
    const btns = mFn.qsa(".banbtn");
    let txt = mFn.qs(".pageInfo");

    let banImg = mFn.qs(".blur-wrap>img");
    const video = mFn.qs(".video");
    const videoControl = mFn.qs(".video_control");
    let isClick = false;

    console.log(banner, btns);

    btns.forEach((x) => (x.onclick = moveBan));

    function moveBan() {
      // console.log('클릭됐다!')
      // 광클금지설정 (초기 false )
      if (isClick) return;
      isClick = true;
      setTimeout(() => {
        isClick = false;
      }, 400);

      if (txt.innerText === "01 / 02") {
        txt.innerText = "02 / 02";
        banner.style.left = "-100%";
        /* 동영상컨트롤러 */
        videoControl.style.display = "none";
        setTimeout(() => {
          banImg.style.scale = "1.1";
        }, 400);
        banner.style.setProperty("--transition", "0.3s 0.8s");
        banner.style.setProperty("--scale", "1");
        banner.style.setProperty("--opacity", "1");
      } else if (txt.innerText === "02 / 02") {
        txt.innerText = "01 / 02";
        banner.style.left = "-0%";
        /* 동영상컨트롤러 */
        setTimeout(() => {
          videoControl.style.display = "block";
          /* 비디오재생 처음부터 */
          video.currentTime = 0;
        }, 100);
        setTimeout(() => {
          banImg.style.scale = "1";
        }, 400);
        banner.style.setProperty("--transition", "0s 0.1s");
        banner.style.setProperty("--scale", "0.9");
        banner.style.setProperty("--opacity", "0");
      }
    } ///moveBan//

    /********************************************
   [ 메인배너 드래그시 left값 이동하기 ]
  이벤트 /변경대상: .ban_wrap 
  드래그 시작값 , 끝날값 양/음수에 따라 left값이동
  *******************************************/

    let touchStartX = 0; // 터치시작 값
    let touchEndX = 0; // 터치끝 값
    let diffX = 0; // 드래그한 양/음수값

    mFn.addEvt(banner, "touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      console.log("터치시작:", touchStartX);
    });
    mFn.addEvt(banner, "touchend", (e) => {
      touchEndX = e.changedTouches[0].clientX;
      console.log("터치끝:", touchEndX);
      touchMoveBan();
    });

    function touchMoveBan() {
      diffX = touchEndX - touchStartX;
      console.log("차이값:", diffX);

      if (Math.abs(diffX) > 50) {
        //최소 슬라이드범위( + / - 50)
        if (diffX < 0) {
          // 0보다 작을때 left -100%
          moveBan();
          // moveBannerLeft();
        } else if (diffX > 0) {
          // 0보다 클때 left 0%
          moveBan();
          // moveBannerRight();
        }
      } ///if///
    } ////// touchMoveBan 함수 ///
  })(); ///////// 코드랩핑 끝

  /********************************************
 [ 메인배너 플레이버튼 클릭시 
    클래스 on 넣었다 뺏다하며 동영상 실행/멈춤 ]
    이벤트대상: .video
    변경대상: .video_control
*****************************************/
  (() => {
    ///////// 코드랩핑 시작
    const video = mFn.qs(".video");
    const videoControl = mFn.qs(".video_control");

    mFn.addEvt(videoControl, "click", () => {
      if (video.paused) {
        video.play();
        videoControl.classList.remove("on");
      } else {
        video.pause();
        videoControl.classList.add("on");
      }
    });
  })(); ///////// 코드랩핑 끝
};