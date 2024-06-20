import React, { useState } from "react";
import SearchingCat from "./SearchingCat";

import "../../css/searching.scss";

import { productLIst } from "../data/product_list";

function Searching({ kword }) {
  console.log("kword", kword);

  const [kw, setKw] = useState(kword);

  let newList;
  const pdListData = Object.values(productLIst);
//   console.log(pdListData);
   newList = pdListData.map((v) => {
    console.log(Object.values(v));
     Object.values(v).filter((val) => {
       let newVal = val.pkeyword.toLocaleLowerCase();
       let key = kw.toLocaleLowerCase();

       if (newVal.indexOf(key) !== -1) return true;
     });
    });
    // console.log(newList);
  return (
    <>
      <div id="searching-area">
        <section className="searching-area">
          <div className="searching-box">
            <div className="searching-wrap">
              <input type="text" placeholder="Search results" />
              <button>
                <p>
                  <i className="fa-solid fa-magnifying-glass fa-2x"></i>
                </p>
              </button>
            </div>
          </div>
          <div className="searching-info-text">
            <p>10 results found for "d"</p>
          </div>
          <div className="searching-info-area">
            <div className="searching-info">
              <div className="searching-list">
                <SearchingCat dt={newList} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Searching;
