import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import "../../css/product_detail.scss";

import { productLIst } from "../data/product_list";
import PdList from "../modules/PdList";
import PdInfo from "../modules/PdInfo";
import Support from "../modules/Support";

function ProductDetail({ product }) {
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
                    <button>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <input type="text" defaultValue={1} />
                    <button>
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
            {/* <div className="product-detail-sub">
              <div className="product-benefit">
                <p>KEY BENEFITS</p>
                <h2>{pvo.benefit}</h2>
              </div>
            </div> */}
          </div>
          <PdInfo category={pname} />
          <Support />
        </section>
      </div>
      <PdList category={"bundle"} className={"off"} />
    </>
  );
}

export default ProductDetail;
