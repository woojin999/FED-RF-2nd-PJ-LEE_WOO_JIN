import React from 'react';

import "../../css/md_info.scss";

function MdInfo(props) {
    return (
      <div className="" id="mdinfo-area">
        <section className="mdinfo-area">
          <div className="main-img-box">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/sub_themandalorian_images/main_poster.jpeg"
              }
              alt=""
            />
            <div className="main-img-title">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/sub_themandalorian_images/logo_title.png"
                }
                alt=""
              />
              <p>
                After the fall of the Empire, a lone Mandalorian makes his way
                through the lawless galaxy with his foundling, Grogu.
              </p>
              <div className="btn-box fx-boxm">
                <button className="btn-main col-6">
                  <a
                    href="https://www.disneyplus.com/ko-kr/series/the-mandalorian/3jLIGMDYINqD?cid=DTCI-Synergy-StarWars-Site-Acquisition-Originals-US-StarWars-Mandalorian-EN-SingleHero-StarWars_Mandalorian_SingleHero-NA"
                    target="_blank"
                  >
                    stream on disney&#43;
                  </a>
                </button>
                <button className="btn-sub col-6">
                  <a href="https://youtu.be/aOC8E8z_ifw" target="_blank">
                    S3 trailer ▶
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="sub-img-box fx-boxm">
            <div className="col-5">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/sub_themandalorian_images/main_poster2.jpeg"
                }
                alt=""
              />
            </div>
            <div className="col-7 info-txt-box">
              <div className="bullet"></div>
              <h2 className="title">The Mandalorian</h2>

              <div className="desc">
                <span>
                  Rating: TV-14 | Release Date November 12.2019 | Genre: Action,
                  Adventure, Science Fiction
                </span>
              </div>
              <div className="desc">
                <span>
                  After the fall of the Empire, a lone Mandalorian makes his way
                  through the lawless galaxy with his foundling, Grogu.
                </span>
              </div>
              <div className="rich-box fx-boxm">
                <a href="#">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/sub_themandalorian_images/info_logo.png"
                    }
                    alt=""
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;Era: The New Republic
                </a>
              </div>
            </div>
            <div className="sub-blur-img"></div>
          </div>
        </section>
      </div>
    );
}

export default MdInfo;