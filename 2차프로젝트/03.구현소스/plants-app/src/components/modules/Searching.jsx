import React, { useRef, useState } from "react";
import SearchingCat from "./SearchingCat";
import $ from "jquery";

import "../../css/searching.scss";

import { productListex } from "../data/product_listex";

function Searching({ kword }) {
  const [kw, setKw] = useState(kword);

  const beforeKword = useRef(kword);

  if (beforeKword.current != kword) {
    // 컴포넌트 리랜더링 (검색결과 변경)
    console.log(beforeKword.current, "==", kword);
    setKw(kword);
    // 다음 검색을 위해 다시 현재 검색어를 참조 변수에 저장
    beforeKword.current = kword;
    $("#searchingValue").val(kword);
  }

  const pdListData = productListex;

  const newList = pdListData.filter((val) => {
    let newVal = val.pkeyword.toLocaleLowerCase();
    let key = kw.toLocaleLowerCase();
    if (newVal.indexOf(key) !== -1) return true;
  });

  const searchBtn = () => {
    setKw($("#searchingValue").val());
  };
  return (
    <>
      <div id="searching-area">
        <section className="searching-area">
          <div className="searching-box">
            <div className="searching-wrap">
              <input
                id="searchingValue"
                type="text"
                placeholder="Search results"
                defaultValue={kword}
                onKeyUp={(e) => {
                  if (e.key == "Enter") {
                    setKw(e.target.value);
                  }
                }}
              />
              <button onClick={searchBtn}>
                <p>
                  <i className="fa-solid fa-magnifying-glass fa-2x"></i>
                </p>
              </button>
            </div>
          </div>
          <div className="searching-info-text">
            {newList.length > 0 ? (
              <p>
                {newList.length} results found "
                {$("#searchingValue").val() == null
                  ? kword
                  : $("#searchingValue").val()}
                "
              </p>
            ) : (
              <p>
                No results found "
                {$("#searchingValue").val() == null
                  ? kword
                  : $("#searchingValue").val()}
                ". Check the spelling or use a different word or phrase.
              </p>
            )}
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
