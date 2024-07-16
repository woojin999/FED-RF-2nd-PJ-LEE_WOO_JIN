import React, { useContext, useEffect, useLayoutEffect } from "react";

import { dCon } from "./dCon";

import $ from "jquery";
import { Link } from "react-router-dom";

function CartList({ closeCart, cartSts }) {
  const myCon = useContext(dCon);
  const selData = JSON.parse(myCon.localsCart);

  let memIdx = 0;
  if (myCon.loginSts) {
    memIdx = JSON.parse(myCon.loginSts).idx;
  }

  let dataCnt = 0;
  let memCartCnt = 0;
  if (cartSts) {
    if (myCon.loginSts == null) {
      dataCnt = selData.length;
    } else if (myCon.loginSts) {
      console.log(selData);
      selData.map((v) => {
        if (v.midx == memIdx) {
          memCartCnt++;
        }
        console.log(memCartCnt);
      });
    }
  }
  console.log(cartSts);

  const totalFn = () => {
    let result = 0;

    $(".sum-price").each((idx, ele) => {
      result += Number($(ele).val());
    });
    return result;
  };

  const cntBtn = (i, tgVal) => {
    selData[i].count = tgVal;

    let res = JSON.stringify(selData);
    localStorage.setItem("cart-data", res);
    myCon.setLocalsCart(res);
    setTimeout(() => {
      $(".total-price").text("$" + totalFn() + ".00");
    }, 0);
  };

  useEffect(() => {
    $(".total-price").text("$" + totalFn() + ".00");
  }, [dataCnt]);
  return (
    <div className="cart-area">
      <div className="cart-box">
        <div className="cart-wrap">
          <div className="cart-tit"></div>
          <div className="cart-top">
            <i
              className="fa-solid fa-xmark fa-3x cart-xbtn"
              onClick={closeCart}
            ></i>
          </div>
        </div>
        <div className="cart-name">
          <p>CART({myCon.loginSts == null ? dataCnt : memCartCnt})</p>
        </div>
        <div className="cart-product">
          <p>Products</p>
          {(!cartSts || (myCon.loginSts && memCartCnt == 0)) && (
            <div className="no-cart">
              <p>Your Cart is Empty</p>
              <div>
                <Link to="/shop">SHOP</Link>
              </div>
              <div>
                <Link to="/about">ABOUT</Link>
              </div>
              <div>
                <Link to="/blog">BLOG</Link>
              </div>
            </div>
          )}
          {cartSts &&
            selData.map(
              (v, i) =>
                (myCon.loginSts == null ? true : memIdx == v.midx) && (
                  <div key={i} className="cart-product-box">
                    <img src={process.env.PUBLIC_URL + v.pimage} alt="dd" />
                    <div className="cart-pd-info">
                      <p>{v.tit}</p>
                      <p>${v.price}.00</p>
                      <input
                        className="sum-price"
                        type="hidden"
                        defaultValue={v.price * v.count}
                      />
                      <div className="cart-cnt-box">
                        <button
                          onClick={(e) => {
                            let target = $(e.currentTarget).next();
                            target.val(
                              target.val() == 1 ? 1 : Number(target.val()) - 1
                            );

                            let tgVal = target.val();
                            cntBtn(i, tgVal);
                          }}
                        >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          id="cart-prdcnt"
                          defaultValue={v.count}
                          readOnly
                        />
                        <button
                          onClick={(e) => {
                            let target = $(e.currentTarget).prev();
                            target.val(Number(target.val()) + 1);
                            let tgVal = target.val();
                            cntBtn(i, tgVal);
                          }}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>

                      <div className="cart-flex">
                        <div className="pd-total">
                          <p>${v.price * v.count}.00</p>
                        </div>
                        <div
                          className="rmBtn"
                          onClick={() => {
                            if (
                              window.confirm("Are you sure you want to delete?")
                            ) {
                              // 데이터 지우기
                              selData.splice(i, 1);
                              // 데이터 문자화
                              let res = JSON.stringify(selData);
                              // 로컬에 반영
                              localStorage.setItem("cart-data", res);
                              myCon.setLocalsCart(res);
                              if (selData.length == 0) {
                                myCon.setCartSts(false);
                              }
                            }
                          }}
                        >
                          <p>REMOVE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
        </div>
        {cartSts && (
          <>
            <div className="cart-name">
              <span className="total-titgle">TOTAL</span>
              <p className="total-price"></p>
            </div>
            <div className="buyBtn">
              <p>BUY</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartList;
