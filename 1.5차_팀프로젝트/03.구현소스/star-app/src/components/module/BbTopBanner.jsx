import React from "react";
import "../../css/bb_top_area.scss";

/////////////import area//////////////////////////////////////

function BbTopBanner() {
  return (
    <>
      <div className="top-banner">
        <div className="top-cont-bx col-3 col-2nd-12">
          <h2>
            <img
              src={process.env.PUBLIC_URL+`/images/sub_badbatch_img/title_logo.png`}
              alt="BAD BATCH logo"
            />
          </h2>
          <div className="desc">
            The Bad Batch is back for one last fight. The final season is now
            streaming. only on Disney&#43;
          </div>
          <div className="btn-box-bb fx-box">
            <button className="btn-main col-4nd-4 col-2">
              <a href="#">stream on disney&#43;</a>
            </button>
            <button className="btn-sub col-4nd-4 col-2">
              <a className="linktxt" href="#">
                S3 trailer ▶
              </a>
            </button>
          </div>
        </div>

        {/* <!-- 스크롤다운 라인 --> */}
        <div className="linebx">
          <div className="line"></div>
        </div>

        <video
          id="ifr"
          src={process.env.PUBLIC_URL+`/images/sub_badbatch_img/title_BG.mp4`}
          autoPlay
          muted
          playsInline
          loop
        ></video>
      </div>
    </>
  );
}

export default BbTopBanner;
