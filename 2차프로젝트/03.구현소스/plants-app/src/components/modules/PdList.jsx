import React from "react";

import { productLIst } from "../data/product-list";
import { Link } from "react-router-dom";

function PdList({ category }) {
  const selData = productLIst[category];
  console.log(selData[0].isrc1);
  return (
    <>
      <div id="product-list-area">
        <section className="product-list inbox">
          <div className="product-list-box">
            <div>
            <Link to="/shop">
              <span className="shop-all">SHOP ALL</span>
            </Link>
            </div>
            <ul className="product-img-slider">
              {selData.map((v, i) => (
                <li key={i}>
                  <Link to={v.link}>
                    <div className="product-img-box">
                      <img src={v.isrc1} alt={v.tit} />
                      <video src={v.isrc2} muted autoPlay loop/>
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
