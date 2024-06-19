import React, { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import "../../css/product_detail.scss";

import $ from "jquery";

import { productLIst } from "../data/product_list";
import PdList from "../modules/PdList";
import PdInfo from "../modules/PdInfo";
import Support from "../modules/Support";
import Promise from "../modules/Promise";

function ProductDetail() {
  let cntNum = 1;
  $("#prdcnt").val("1");
  const countUp = () => {
    cntNum++;
    $("#prdcnt").val(cntNum);
  };
  const countDown = () => {
    if (cntNum > 1) cntNum--;
    $("#prdcnt").val(cntNum);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const loc = useLocation();
  const pname = loc.state.pname;
  const category = loc.state.category;
  console.log(pname, category);
  const pvo = productLIst[category][pname];
  console.log(pvo);
  return (
    <>
      <div id="product-detail">
        <section className="product-detail">
          <div className="product-detail-wrap">
            <div className="product-detail-content">
              <div className="col-6 detail-img-box">
                <img src={pvo.isrc1} alt="" />
              </div>
              <div className="col-6 detail-txt">
                <h2>{pvo.tit}</h2>
                <p>${pvo.price}</p>
                <div className="cart-wrap">
                  <div className="product-count-box">
                    <button onClick={countDown}>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <input type="text" id="prdcnt" defaultValue={1} />
                    <button onClick={countUp}>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <div className="cart-btn">
                    <button>ADD TO CART</button>
                  </div>
                </div>
                <div className="product-desc-box">
                  <p>DESCRIPTION</p>
                  <h3>{pvo.desc}</h3>
                  <p>Free shipping on orders over £50</p>
                  <p>Ships within 2 days</p>
                </div>
              </div>
            </div>
          </div>
          <PdInfo category={pname} />
          {category == "single" && <Support category={pname} />}
        </section>
      </div>
      <Promise />
      <PdList category={"bundle"} className={"off"} classSale={"on"} />
    </>
  );
}

export default ProductDetail;
