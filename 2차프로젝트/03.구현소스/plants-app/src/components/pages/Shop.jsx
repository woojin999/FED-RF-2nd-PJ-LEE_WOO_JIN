import React from "react";
import PdList from "../modules/PdList";
function Shop(props) {
  return (
    <>
      <div className="shop-tit">
        <h2>Your herbal first aid kit</h2>
      </div>
      <PdList category={"single"} className={"off"} />
      <div className="shop-tit">
        <h2>Save with bundles</h2>
      </div>
      <PdList category={"bundle"} className={"off"} />
    </>
  );
}

export default Shop;
