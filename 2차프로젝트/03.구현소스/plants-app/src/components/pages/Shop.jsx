import React, { useLayoutEffect } from "react";
import PdList from "../modules/PdList";
import PdInfo from "../modules/PdInfo";
import ShopBlog from "../modules/ShopBlog";
function Shop() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="shop-tit">
        <h2>Your herbal first aid kit</h2>
      </div>
      <PdList category={"single"} className={"off"} />

      <PdList category={"bundle"} className={"off"} classSale={"on"} />
      <PdInfo category={"shop"} />
      <ShopBlog />
    </>
  );
}

export default Shop;
