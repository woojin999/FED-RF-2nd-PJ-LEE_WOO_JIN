import React from "react";
import { Link } from "react-router-dom";

import { productLIst } from "../data/product_list";

function SearchingCat({ dt }) {
  const pdData = productLIst["bundle"];
  const selData = Object.values(pdData);
  const selDataKey = Object.keys(pdData);
  const total = dt.length;
  return (
    <>
      {/* {total > 0 && (
        <ul className="plist">
          {dt.map((v, i) => (
            <li key={i}>
              <Link
                to="/detail"
                state={{ category: "bundle", pname: selDataKey[i] }}
              >
                <img src={v.isrc1} alt="" />
                <h3>{v.tit}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )} */}
      {}
      <h1>SearchingCat</h1>
    </>
  );
}

export default SearchingCat;
