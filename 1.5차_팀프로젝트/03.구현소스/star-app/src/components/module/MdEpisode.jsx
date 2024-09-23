import React, { useLayoutEffect } from "react";
import { episodeData } from "../../data/sub_themandalorian_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import domFn from "../../js/my_function";

import "../../css/md_episode.scss";

function MdEpisode(props) {
  useLayoutEffect(() => {
    const epbtn = domFn.qsa(".epbtn");
    const epSlide = domFn.qsa(".ep-img-wrap ul li");
    const epWrap = domFn.qs(".ep-wrap");

    let epSnum = 0;
    let prot = false;

    for (let x of epbtn) {
      x.onclick = GoEpSlide;
    }

    function GoEpSlide() {
      // 광클 금지
      if (prot) return;
      prot = true;
      setTimeout(() => {
        prot = false;
      }, 500);

      let isEpRbtn = this.classList.contains("epbtn2");
      let cntNum;
      let epSlCnt = epSlide.length;

      isEpRbtn ? epSnum++ : epSnum--;

      epSlide.forEach((v) => {
        if (epWrap.offsetWidth > 1024) {
          v.style.left = -33.3333 * epSnum + "%";
          cntNum = 3;
        } else if (epWrap.offsetWidth > 860) {
          v.style.left = -50 * epSnum + "%";
          cntNum = 2;
        } else {
          v.style.left = -100 * epSnum + "%";
          cntNum = 1;
        }
      });

      if (epSnum < 0) {
        epSnum = 0;
      } else if (epSnum > epSlCnt - cntNum) {
        epSnum = epSlCnt - cntNum;
      }

      if (epSnum == 0 || epSnum == epSlCnt - cntNum) {
        this.style.display = "none";
      } else {
        for (let x of epbtn) {
          x.style.display = "block";
        }
      }
    }

    domFn.addEvt(window, "resize", () => {
      epSlide.forEach((v) => {
        v.style.left = 0;
      });

      epSnum = 0;
      epbtn[0].style.display = "none";

      epbtn[1].style.display = "block";
    }); 
  });
  return (
    <div id="mdepisode-area">
      <section className="episode-area cont-box section-top">
        <div className="ep-wrap inboxman">
          <h2>
            <span>Episode Guides | Seasons 1 & 2</span>
          </h2>
          <div className="ep-img-wrap fx-boxm">
            <div className="ep-list">
              <ul className="fx-boxm">
                {episodeData.map((v, i) => (
                  <li key={i}>
                    <div className="ep-img-box">
                      <img
                        src={process.env.PUBLIC_URL+"/images/sub_themandalorian_images/" + v.image}
                        alt=""
                      />
                      <div className="ep-bg-box"></div>
                      <div className="ep-txt-box">
                        <h3>
                          <span className="ep-title">{v.title}</span>
                        </h3>
                        <p className="ep-desc">{v.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="slbtn-box">
              <button className="mdabtn ab1 fa-solid fa-angle-left epbtn1 epbtn"></button>
              <button className="mdabtn ab2 fa-solid fa-angle-right epbtn2 epbtn"></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MdEpisode;
