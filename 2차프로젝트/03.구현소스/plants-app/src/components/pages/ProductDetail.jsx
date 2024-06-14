import React from "react";
import PdList from "../modules/PdList";
import PdInfo from "../modules/PdInfo";
import Support from "../modules/Support";

function ProductDetail({ product }) {
  return (
    <>
      <div id="product-detail">
        <section className="product-detail">
          <div className="product-detail-wrap">
            <div className="product-detail-content">
              <div className="col-6 detail-img-box">
                <img src="/images/calm.png" alt="" />
              </div>
              <div className="col-6 detail-txt">
                <h2>Calm</h2>
                <p>$37.00</p>
                <div className="product-count-box">
                  <i className="fa-solid fa-minus fa-lg"></i>
                  <input type="text" value={1} />
                  <i className="fa-solid fa-plus fa-lg"></i>
                </div>
                <div className="cart-btn-box">
                  <button>ADD TO CART</button>
                </div>
                <div>
                  <p>DESCRIPTION</p>
                  <h3>
                    A non‑alcoholic herbal tincture made with 3 potent nervines
                    (Oat Tops, Skullcap, Hawthorn) and an adaptogen
                    (Ashwagandha) that come together to create the ultimate hug
                    in a drop, essential in moments of stress or anxiety. Take
                    Calm to ease those frazzled nerves and experience a sense of
                    comforting peace when you need it the most.
                  </h3>
                  <p>Free shipping on orders over £50</p>
                  <p>Ships within 2 days</p>
                </div>
              </div>
            </div>
            <div className="product-detail-sub">
              <div className="product-benefit">
                <p>KEY BENEFITS</p>
                <h2>
                  Calming nervines to help you find a sense of peace on
                  stressful days WHEN TO USE
                </h2>
              </div>
            </div>
          </div>
          <PdInfo category={"main"} />
          <Support />
        </section>
      </div>
      <PdList category={"bundle"} className={"off"} />
    </>
  );
}

export default ProductDetail;
