import React, { useEffect, useLayoutEffect } from "react";
import PdList from "../modules/PdList";
import PdInfo from "../modules/PdInfo";
import ShopBlog from "../modules/ShopBlog";
import SlBanner from "../modules/SlBanner";
import * as sFn from "../func/auto_wheel";
function Shop() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  useEffect(() => {
    window.addEventListener("scroll", sFn.scrollFn);
  }, []);
  return (
    <>
      <div className="shop-tit">
        <h2>Your herbal first aid kit</h2>
      </div>
      <PdList category={"single"} className={"off"} clN={"on"} />
      <PdList category={"bundle"} className={"off"} classSale={"on"}/>
      <SlBanner />
      <PdInfo category={"shop"} />
      <ShopBlog />
    </>
  );
}

export default Shop;
