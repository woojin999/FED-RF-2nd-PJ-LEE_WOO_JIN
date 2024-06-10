import React from "react";

import { productLIst } from "../data/product-list";
import { Link } from "react-router-dom";

function PdList({ category, className }) {
  const selData = productLIst[category];
  console.log(selData[0].isrc1);
  console.log(Object.keys(productLIst)[0]);
  return (
    <>
      <div id="product-list-area">
        <section className="product-list inbox">
          <div className="product-list-box">
            {
              <div className={"shop-link " + className}>
                <Link to="/shop">
                  <span className="shop-all">SHOP ALL</span>
                </Link>
              </div>
            }
            <ul className="product-img-slider">
              {selData.map((v, i) => (
                <li key={i}>
                  <Link to={v.link}>
                    <div className="product-img-box">
                      <img src={v.isrc1} alt={v.tit} />
                      {category == "single" ? (
                        <video src={v.isrc2} muted autoPlay loop />
                      ) : category == "bundle" ? (
                        <img className="prd-img2" src={v.isrc2} alt={v.tit} />
                      ) : (
                        ""
                      )}

                      <div className="add-box">
                        <span>QUICK ADD</span>
                      </div>
                    </div>
                    <div className="product-txt">
                      <p>{v.tit}</p>
                      <span>${v.price}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default PdList;
