import React from "react";

import { productList } from "../data/product_list";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "../../css/product_list.scss";
import "swiper/css";
import "swiper/css/navigation";

function PdList({ category, className, classSale, blog }) {
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
                      Save <img src="/images/sticker.png" alt="sticker" />
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
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              allowTouchMove={false}
              navigation={true}
              /* 사용할 모듈을 여기에 적용시킨다 */
              modules={[Navigation]}
              // 스와이퍼 사이즈별 슬라이드수 변경!
              breakpoints={{
                400: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
                touchRatio: 0,
              }}
              className="mySwiper2"
            >
              <div className="product-img-slider">
                {selData.map((v, i) => (
                  <SwiperSlide key={i}>
                    <Link
                      to="/detail"
                      state={{ category: category, pname: selDataKey[i] }}
                    >
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
                        <div className={"sale-box " + classSale}>
                          <p>SALE</p>
                        </div>
                      </div>
                      <div className="product-txt">
                        <p>{v.tit}</p>
                        <span>${v.price}</span>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
}

export default PdList;
