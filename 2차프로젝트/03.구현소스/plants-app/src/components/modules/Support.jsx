import React from "react";

import { spData } from "../data/support";

import "../../css/support.scss";

function Support({ category }) {
  const selData = spData[category];
  return (
    <>
      <div id="support-area">
        <section className="support-area-box page">
          <div className="support-wrap">
            <h2>{selData.tit}</h2>
            <div className="support-img-wrap mpage">
              <ul>
                {selData.images.map((v, i) => (
                  <li key={i}>
                    <img src={process.env.PUBLIC_URL + v.isrc} alt="" />
                    <div>
                      {category == "main" ? (
                        <h3>{v.desc}</h3>
                      ) : (
                        <>
                          <h3>{v.iname}</h3>
                          <p>{v.desc}</p>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Support;
