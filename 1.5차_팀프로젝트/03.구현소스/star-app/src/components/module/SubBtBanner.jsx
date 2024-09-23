///스타워즈PJ - 서브하단배너
import React from "react";
import $ from "jquery";

//css
import "../../css/sub_banner.css";

//svg
// import { ReactComponent as arrow } from "/images/arrow.svg";
// import { ReactComponent as arrow2 } from "/images/arrow2.svg";
// import { ReactComponent as crose } from "/images/crose.svg";
//////import area///////////////////////////////////////////

function SubBtBanner() {
 
    //슬라이더 박스
    // const slider = $(".sub-ban-wrap");
    //움직이는 요소
    const inner = $(".sub-ban-box");
    const btn = $(".sub-btn");

    //btn에 ele, idx 요소를 가지고 forEach 돈다. idx < 버튼 순서 때문
    btn.map((ele, idx) => {
      //ele에 클릭 이벤트가 발생하면 이벤트 할당
      ele.onclick = (e) => {
        //preventDefault: 윈도우 기본값 설정 끔, 기본값 변경해야할 경우 사용
        e.preventDefault();
        inner.style.top = -100 * idx + "%";
        inner.style.transition = ".4s";
      };
    }); //forEach////////////////////////


  /////////////리턴 코드구역 /////////////////////////////////
  return (
    <>
      <div className="section-top col-7" id="bt-banner-area">
        <div className="sub-ban-wrap">
          <ul className="sub-ban-box">
            <li className="sub-ban-1 sub-ban-img">
              <video
                src={process.env.PUBLIC_URL+`/images/sub_badbatch_img/title_BG.mp4`}
                autoPlay
                muted
                playsInline
                loop
              ></video>
            </li>
            <li className="sub-ban-2 sub-ban-img">
              <video
                src={process.env.PUBLIC_URL+`/images/sub_badbatch_img/sub_ban_mando.mp4`}
                autoPlay
                muted
                playsInline
                loop
              ></video>
            </li>
            <li className="sub-ban-3 sub-ban-img">
              <video
                src={process.env.PUBLIC_URL+`/images/sub_badbatch_img/sub_ban_ahsoka.mp4`}
                autoPlay
                muted
                playsInline
                loop
              ></video>
            </li>
          </ul>
          <div className="desc-wrap">
            <div className="title">
              <h3>
                Check out
                <br />
                more episodes
              </h3>
            </div>
            <div className="Kategorie">
              <ul className="fx-box">
                <li className="on title-sub sub-btn">
                  <a href="#">Bad batch</a>
                </li>
                <li className="title-sub sub-btn">
                  <a href="#">The mandaloriad</a>
                </li>
                <li className="title-sub sub-btn">
                  <a href="#">Ahosoka</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubBtBanner;
