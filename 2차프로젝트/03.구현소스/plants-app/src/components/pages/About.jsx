import React, { useEffect, useLayoutEffect } from "react";

import { aboutData } from "../data/about";
import "../../css/about.scss";
import PdInfo from "../modules/PdInfo";
import PdList from "../modules/PdList";
import * as sFn from "../func/auto_wheel";
import $ from "jquery";

function About(props) {
  // console.log(aboutData["main"]);
  const mainData = aboutData["main"];
  const subData = aboutData["sub"];
  useEffect(() => {
    window.addEventListener("scroll", sFn.scrollFn);
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    $(".cart-box").css({ right: "-350px", opacity: "0" });
  }, []);
  return (
    <>
      <div id="about-area">
        <section className="about-area">
          <div className="about-main">
            {mainData.map((v, i) => (
              <div key={i} className="about-main-wrap">
                <ul>
                  <li className="col-6">
                    <img src={process.env.PUBLIC_URL + v.isrc} alt="" />
                  </li>
                  <li className="col-6">
                    <h2>{v.desc}</h2>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="about-sub">
            {subData.map((v, i) => (
              <div key={i} className="about-sub-wrap">
                <ul>
                  <li className="col-6">
                    <img src={process.env.PUBLIC_URL + v.isrc} alt="" />
                  </li>
                  <li className="col-6">
                    <div className="sub-txt-wrap">
                      <p>{v.subtit}</p>
                      <h2>{v.tit}</h2>
                      <p>{v.desc}</p>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <PdInfo category={"about"} />
      <PdList category={"single"} className={"off"} blog={"blog"} />
    </>
  );
}

export default About;
