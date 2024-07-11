import React, { useCallback, useContext, useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import "../../css/product_detail.scss";

import $ from "jquery";
import { dCon } from "../modules/dCon";

import { productList } from "../data/product_list";
import PdList from "../modules/PdList";
import PdInfo from "../modules/PdInfo";
import Support from "../modules/Support";
import Promise from "../modules/Promise";
import * as sFn from "../func/auto_wheel";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

function ProductDetail() {

   const myCon = useContext(dCon);

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

  const goSearchBtn = (txt) => {
    console.log(txt.tit);
    console.log("dd");
    // goSearch(txt);
    $(".cart-box").css({ right: "0px", opacity: "1" });
  };

  const openCart = useCallback(() => {
    
    $(".cart-box").css({ right: "0px", opacity: "1" });
    $(".ham-area").css({ left: "-350px", opacity: "0" });
    $(".cart-area").css({ zIndex: "999999999" });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    $(".ham-area").css({ left: "-350px", opacity: "0" });
    $(".gotopbtn").removeClass("on");
  });

  useEffect(() => {
    window.addEventListener("scroll", sFn.scrollFn);
  }, []);
  return (
    <>
      <div id="product-detail">
        <section className="product-detail">
          <div className="product-detail-wrap">
            <div className="product-detail-content">
              <div className="col-6 detail-img-box" onClick={goImg}>
                <div className="dt-main-img">
                  <img src={process.env.PUBLIC_URL + pvo.isrc1} alt="" />
                </div>
                <div className="dt-sub-img">
                  <ul>
                    {pvo.subisrc.map((v, i) => (
                      <li key={i}>
                        <img src={process.env.PUBLIC_URL + v} alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-6 detail-txt">
                <h2>{pvo.tit}</h2>
                <p>${pvo.price}.00</p>
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
                    <button onClick={(e)=>{
                      // e.preventDefault();
                      console.log("ddd");
                      // 1. 로컬스 생성
                      if (!localStorage.getItem("cart-data")) {
                        localStorage.setItem("cart-data", "[]");
                      } // if ////
                      // 2. 로컬스 파싱
                      let locals =localStorage.getItem("cart-data");
                      locals = JSON.parse(locals);

                      let retSts = locals.some(v=>{
                        if(v.tit == pvo.tit) return true;
                      })

                      if (retSts) {
                        alert("이미 카트에 담긴 상품입니다")
                        openCart();
                        return;
                      }

                      // 4. 로컬스에 데이터 추가
                      locals.push({
                        tit: pvo.tit,
                        pimage: pvo.isrc1,
                        price: pvo.price,
                        count: $("#prdcnt").val()
                      });

                      localStorage.setItem("cart-data", JSON.stringify(locals));

                      myCon.setLocalsCart(localStorage.getItem("cart-data"));

                      myCon.setCartSts(true);
                      console.log(myCon.cartSts);
                      openCart();
                    }}
                    >ADD TO CART</button>
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
                  <img src={process.env.PUBLIC_URL + pvo.isrc1} alt="" />
                </SwiperSlide>
                {pvo.subisrc.map((v, i) => (
                  <SwiperSlide key={i}>
                    <img src={process.env.PUBLIC_URL + v} alt="" />
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
