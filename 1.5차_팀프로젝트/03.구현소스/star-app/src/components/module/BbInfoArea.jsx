import React from "react";
import "../../css/bb_info_area.scss";
// import { ReactComponent as arrow } from "../../css/svg/arrow.svg";
//////////import area////////////////////////////////

function BbInfoArea() {
  return (
    <>
      <div className="section-top" id="info-area">
        <div className="cont-box fx-box ">
          <div className="imgbox ">
            <img
              src={process.env.PUBLIC_URL+`/images/sub_badbatch_img/poster_1.jpg`}
              alt="포스터 이미지"
            />
          </div>
          <div className="desc-box">
            <div className="bullet"></div>
            <h2 className="title">
              Star Wars:
              <br />
              The Bad Batch
            </h2>
            <div className="desc ">
              Rating l TV-PG Release Date l May 4, 2021 Genre l Action,
              Adventure, Animation, Science Fiction
            </div>
            <div className="desc ">
              ating l TV-PG Release Date l May 4, 2021 Genre l Action,
              Adventure, Animation, Science Fiction The Bad Batch follows the
              elite and experimental clones of the Bad Batch (first introduced
              in “The Clone Wars”) as they find their way in a rapidly changing
              galaxy in the immediate aftermath of the Clone War. Members of Bad
              Batch—a unique squad of clones who vary genetically from their
              brothers in the Clone Army—each possess a singular exceptional
              skill that makes them extraordinarily effective soldiers and a
              formidable crew
            </div>
            <button className="btn-link">
              <img
                src={process.env.PUBLIC_URL+`/images/sub_badbatch_img/icon_link.png`}
                alt="링크 아이콘"
              />
              <span className="link-txt">Era: Reign of the Empire</span>
              {/* svg: arrow */}
              {/* <arrow width="24px" height="10px" /> */}
            </button>
          </div>
        </div>
        <div className="bulr-box"></div>
      </div>
    </>
  );
}

export default BbInfoArea;
