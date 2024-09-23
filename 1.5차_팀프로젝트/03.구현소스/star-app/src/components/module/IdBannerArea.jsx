// 2. 메인 배너영역 컴포넌트 - IdBannerArea.jsx
import React from "react";

// CSS 불러오기
import "../../css/id_banner_main.scss";
// 기능함수 불러오기


import { useEffect } from "react";
import { banFn } from "../../js/id_main_ban_fn";


function IdBannerArea(props) {
  useEffect(()=>{
  banFn();

  },[])
  

  return (
    <div id="ban-area-index">
      <div className="ban-area-index col-12">
        <div className="ban_wrap">
          <video
            className="video"
            preload="auto"
            muted="muted"
            autoPlay="1"
            loop
            playslnline=""
            src={
              process.env.PUBLIC_URL + "/images/main_images/starwars_mv1.mp4"
            }
          ></video>
          <div className="blur-wrap">
            <div className="blur-box"></div>
            <img
              src={process.env.PUBLIC_URL + "/images/main_images/news04.jpg"}
              alt="메인배너이미지"
            />
          </div>
        </div>
        <div className="ban-btn">
          <div className="banbtn L">&lt;</div>
          <span className="pageInfo">01 / 02</span>
          <div className="banbtn R">&gt;</div>
        </div>
        <div className="scroll_induce"></div>
        <div className="video_control">
          <img
            className="play"
            src={process.env.PUBLIC_URL + "/images/main_images/ic_play.png"}
            alt="플레이버튼"
          />
          <img
            className="pause"
            src={process.env.PUBLIC_URL + "/images/main_images/ic_pause.png"}
            alt="멈춤버튼"
          />
          <span className="pause">STOP Video</span>
          <span className="play">PLAY Video</span>
        </div>
      </div>
    </div>
  );
}

export default IdBannerArea;
