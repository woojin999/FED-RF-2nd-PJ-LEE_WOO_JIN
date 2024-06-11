import React from "react";

import { productLIst } from "../data/product_list";
import { Link } from "react-router-dom";

function PdList({ category, className }) {
  const selData = productLIst[category];

  return (
    <>
      <div id="product-list-area">
        <section className="product-list inbox">
          <div className="product-list-box">
            {
              <>
                <div className={"shop-link " + className}>
                  <Link to="/shop">
                    <span className="shop-all">SHOP ALL</span>
                  </Link>
                </div>
                {category == "bundle" && (
                  <div className="shop-tit">
                    <h2>
                      Save <img src="/images/sticker.png" alt="sticker" />
                      &nbsp;with bundles
                    </h2>
                  </div>
                )}
              </>
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
