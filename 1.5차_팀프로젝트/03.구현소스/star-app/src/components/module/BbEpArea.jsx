import React from "react";
import { epData } from "../../data/sub_badbatch_list_data";
import "../../css/bb_ep_area.scss";
//import

function BbEpArea() {
  ///리랜더링 구역//////////////////////
  return (
    <>
      <div className="section-top" id="episode-area">
        <div className="tit-box fx-box">
          <h3 className="title-sub">
            Episode Guides | New Each Thursday @ 9AM PT
          </h3>
          <a href="" className="linktxt">
            show more{" "}
          </a>
        </div>
        <span className="under-line"></span>
        <div className="Kategorie epSubmenu">
          <ul className="fx-box">
            <li className="on">
              <a href="#">season 3 (13)</a>
            </li>
            <span className="bar-line"></span>
            <li>
              <a href="#">season 3 (13)</a>
            </li>
            <span className="bar-line"></span>
            <li>
              <a href="#">season 3 (13)</a>
            </li>
          </ul>
        </div>
        {/* <!-- 에피소드 리스트 --> */}
        <div className="slider-wrap epSlide zoomImg col-12 col-2nd-12">
          <ul className="fx-box">
            {epData.map((v, i) => (
              <li key={i}>
                  <a href={v.link}>
                <figure className="imgbox">
                    <img
                      src={process.env.PUBLIC_URL+`/images/sub_badbatch_img/thumb_${v.idx}.jpg`}
                      alt={`E${v.title}`}
                    />
                </figure>
                  </a>
                <figcaption>
                  <div className="title-topic">Season3, Episode{v.idx}</div>
                  <h4 className="title-sub2">{v.title}</h4>
                </figcaption>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default BbEpArea;
