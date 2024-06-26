import React, { useEffect } from "react";

import "../../css/sl_banner.scss";

function SlBanner(props) {
  useEffect(() => {
    let target = document.querySelector(".sl-banner ul");
    let tagetEle = target.querySelectorAll("li");
    const updateCriteria = () => tagetEle[0].offsetWidth;
    let criteria = updateCriteria();
    window.addEventListener("resize", () => {
      criteria = updateCriteria();
    });

    let currVal = 0;
    function moveText() {
      target.style.translate = --currVal + "px";
      if (currVal <= Math.floor(-criteria)) {
        target.appendChild(tagetEle[0]);
        target.style.translate = "0px";
        currVal = 0;
      }
      setTimeout(moveText, 15);
    }

    setTimeout(moveText);
  }, []);
  return (
    <div className="sl-banner">
      <ul>
        <li>
          <h2>🛒 Free shipping on orders over 60$</h2>
        </li>
        <li>
          <h2>🛒 Free shipping on orders over 60$</h2>
        </li>
        <li>
          <h2>🛒 Free shipping on orders over 60$</h2>
        </li>
        <li>
          <h2>🛒 Free shipping on orders over 60$</h2>
        </li>
        <li>
          <h2>🛒 Free shipping on orders over 60$</h2>
        </li>
      </ul>
    </div>
  );
}

export default SlBanner;
