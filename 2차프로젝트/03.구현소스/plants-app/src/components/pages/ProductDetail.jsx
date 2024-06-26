import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import "../../css/product_detail.scss";

import $ from "jquery";

import { productList } from "../data/product_list";
import PdList from "../modules/PdList";
import PdInfo from "../modules/PdInfo";
import Support from "../modules/Support";
import Promise from "../modules/Promise";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

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

  const loc = useLocation();
  const pname = loc.state.pname;
  const category = loc.state.category;
  const pvo = productList[category][pname];

  

  const goImg = () => {
    $(".pd-detail-img").addClass("on");
    $("body").css({ overflow: "hidden" });
  };

  const closeImg = () => {
    $(".pd-detail-img").removeClass("on");
    $("body").css({ overflow: "auto" });
   
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    $(".ham-area").css({ left: "-350px", opacity: "0" });
    $(".gotopbtn").removeClass("on");
    
    
  });
  return (
    <>
      <div id="product-detail">
        <section className="product-detail">
          <div className="product-detail-wrap">
            <div className="product-detail-content">
              <div className="col-6 detail-img-box" onClick={goImg}>
                <div className="dt-main-img">
                  <img src={pvo.isrc1} alt="" />
                </div>
                <div className="dt-sub-img">
                  <ul>
                    {pvo.subisrc.map((v, i) => (
                      <li key={i}>
                        <img src={v} alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
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
          <div className="pd-detail-img">
            <div className="dt-img-close" onClick={closeImg}>
              <i className="fa-solid fa-xmark fa-4x imgXbtn"></i>
            </div>
            <Swiper
              
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              slidesPerView={1}
              className="mySwiper"
              
            >
              <div className="pd-dt-img">
                <SwiperSlide>
                  <img src={pvo.isrc1} alt="" />
                </SwiperSlide>
                {pvo.subisrc.map((v, i) => (
                  <SwiperSlide key={i}>
                    <img src={v} alt="" />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
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
