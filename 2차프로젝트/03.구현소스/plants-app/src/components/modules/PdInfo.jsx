import React from "react";
import { productInfo } from "../data/product_info";

function PdInfo({ category }) {
  const selData = productInfo[category];
  //   console.log(selData[0].isrc);
  return (
    <>
      <div id="product-info-area">
        <section className="product-info">
          <div className="product-info-box">
            <div className="product-info-txt">
              <p>{selData.tit1}</p>
              <h2>{selData.desc}</h2>
              <p>{selData.tit2}</p>
            </div>
            <div className="product-info-img">
              <ul>
                {selData.images.map((v, i) => (
                  <li key={i}>
                    <img src={v.isrc} alt="images" />
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
