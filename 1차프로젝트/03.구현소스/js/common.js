// 공통처리 JS common

import comData from "../data/common_data.js";


export default function setElement() {
  const topArea = document.querySelector("#top-area");
  const hamArea = document.querySelector("#ham-area");
  const footerBanArea = document.querySelector("#footer-ban-area");
  const footerArea = document.querySelector("#footer-area");

  topArea.innerHTML = comData.topArea;
  hamArea.innerHTML = comData.hamArea;
  footerBanArea.innerHTML = comData.footerBanArea;
  footerArea.innerHTML = comData.footerArea;
}
