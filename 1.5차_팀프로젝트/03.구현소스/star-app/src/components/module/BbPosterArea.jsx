import React, { useEffect } from "react";
import aaa from "../../js/sub_badbatch";
import "../../css/bb_poster_area.scss";

import { posData } from "../../data/sub_badbatch_list_data";
////////importArea/////////////////////////////

function BbPosterArea() {
  //화면랜더링///////////
  useEffect(() => {
    aaa();
  }, []);

  //////코드리턴구역/////////////////
  return (
    <>
      <div className="section-top" id="pos-area">
        <div className="tit-wrap">
          <div className="tit-box">
            <h3>Poster Gallery The Bad Batch Season3</h3>
          </div>
        </div>
        <div className="pos-area-wrap ">
          <div className="pos-wrap cont-box">
            <ul className="slider-wrap gr-box">
              {posData.map((v, i) => (
                <li className="imgbox" key={i}>
                  <img
                    src={process.env.PUBLIC_URL+`/images/sub_badbatch_img/poster_${i + 1}.jpg`}
                    alt={`스타워즈 포스터${i}`}
                  />
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- 포스터 표시 데이터 --> */}
          <div className="pos-data-wrap">
            <div className="pos-data-box fx-box"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BbPosterArea;
