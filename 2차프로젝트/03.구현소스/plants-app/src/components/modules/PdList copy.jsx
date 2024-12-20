import React from "react";

import { productList } from "../data/product_list";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "../../css/product_list.scss";

function PdList({ category, className, classSale,blog }) {
  const pdData = productList[category];
  const selData = Object.values(pdData);
  const selDataKey = Object.keys(pdData);

  // console.log(selData,selDataKey[0]);

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
                      Save{" "}
                      <img
                        src="process.env.PUBLIC_URL + /images/sticker.png"
                        alt="sticker"
                      />
                      &nbsp;with bundles
                    </h2>
                  </div>
                )}
                {blog == "blog" && (
                  <div className="blog-tit">
                    <h2>Shop herbal saviours</h2>
                  </div>
                )}
              </>
            }
            <ul className="product-img-slider">
              {selData.map((v, i) => (
                <li key={i}>
                  <Link
                    to="/detail"
                    state={{ category: category, pname: selDataKey[i] }}
                  >
                    <div className="product-img-box">
                      <img src={process.env.PUBLIC_URL + v.isrc1} alt={v.tit} />
                      {category == "single" ? (
                        <video src={v.isrc2} muted autoPlay loop />
                      ) : category == "bundle" ? (
                        <img
                          className="prd-img2"
                          src={process.env.PUBLIC_URL + v.isrc2}
                          alt={v.tit}
                        />
                      ) : (
                        ""
                      )}

                      <div className="add-box">
                        <span>QUICK ADD</span>
                      </div>
                      <div className={"sale-box " + classSale}>
                        <p>SALE</p>
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
