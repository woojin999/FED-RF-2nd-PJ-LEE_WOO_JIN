import React from "react";

// 데이터
import { epiData } from "../../data/sub_ahsoka_data";

// CSS
import "../../css/as_episode.scss";

function AsEpisode() {
  return (
    <>
      <div className="page">
        <section id="episode-area" className="as-section-top">
          <div className="content-box">
            <div className="tit-box fx-box">
              <h3 className="title-sub">Episode Guides</h3>
            </div>
            <span className="under-line"></span>
            {/* <!-- 에피소드 박스 --> */}
            <div className="episode-box scAct">
              {/* <!-- 에피소드 데이터 들어갈 곳 --> */}
              <div className="slider-wrap">
                <ul>
                  {epiData.map((v, i) => (
                    <li key={i}>
                      <figure>
                        <a href="#">
                          <img
                            src={process.env.PUBLIC_URL+`/images/sub_ahsoka_images/${v.idx}.jpeg`}
                            alt={v.idx}
                          />
                        </a>
                      </figure>
                      <div className="desc-box">
                        <div className="title-box">
                          <h3>{v.title}</h3>
                          <p>{v.desc}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AsEpisode;
