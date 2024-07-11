import React, { useContext, useEffect } from "react";

import { dCon } from "./dCon";

import $ from "jquery";
import { Link } from "react-router-dom";

function CartList({ closeCart, cartSts }) {
  const myCon = useContext(dCon);
  const selData = JSON.parse(myCon.localsCart);
  console.log(selData);
  let dataCnt = 0;
  if(cartSts){
    dataCnt = selData.length;
  }
  console.log(cartSts);

  const totalFn = () => {
    let result = 0;

    $(".sum-price").each((idx, ele) => {
      result += Number($(ele).val());
    });
    return result;
  };

  useEffect(() => {
    $(".total-price").text("TOTAL : $" + totalFn() + ".00");
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
          <p>CART({dataCnt})</p>
        </div>
        <div className="cart-product">
          <p>Products</p>
          {!cartSts && (
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
            selData.map((v, i) => (
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
                    <button>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <input
                      type="text"
                      id="cart-prdcnt"
                      defaultValue={v.count}
                    />
                    <button>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <div className="rmBtn">
                    <p>remove</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartSts && (
          <div className="cart-name">
            <p className="total-price"></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartList;
