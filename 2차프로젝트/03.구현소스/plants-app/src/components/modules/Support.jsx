import React from "react";

import { spData } from "../data/support";

function Support(props) {
  return (
    <>
      <div id="support-area">
        <section className="support-area-box">
          <div className="support-wrap">
            <h2>Herbal support, whenever you need it</h2>
            <div className="support-img-wrap">
              <ul>
                {spData.map((v, i) => (
                  <li key={i}>
                    <img src={v.isrc} alt="" />
                    <h3>{v.desc}</h3>
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
