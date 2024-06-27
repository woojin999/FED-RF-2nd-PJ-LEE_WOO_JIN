import React from "react";
import { productInfo } from "../data/product_info";

import "../../css/product_info.scss";

function PdInfo({ category }) {
  const selData = productInfo[category];
  //   console.log(selData[0].isrc);
  return (
    <>
      <div id="product-info-area">
        <section className="product-info page">
          <div className="product-info-box">
            <div className="product-info-txt">
              <p>{selData.tit1}</p>
              <h2>{selData.desc}</h2>
              <p className="tit2">{selData.tit2}</p>
            </div>
            <div className="product-info-img mpage">
              <ul>
                {selData.images.map((v, i) => (
                  <li key={i}>
                    <img src={process.env.PUBLIC_URL + v.isrc} alt="images" />
                    <h3>{v.itxt}</h3>
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

export default PdInfo;
