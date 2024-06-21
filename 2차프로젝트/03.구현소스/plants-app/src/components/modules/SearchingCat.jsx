import React from "react";
import { Link } from "react-router-dom";


function SearchingCat({ dt }) {
  const total = dt.length;
  return (
    <>
      {total > 0 && (
        <ul className="plist">
          {dt.map((v, i) => (
            <li key={i}>
              <Link
                to="/detail"
                state={{ category: v.category, pname: v.pname }}
              >
                <div className="product-img-box">
                  <img src={v.isrc1} alt="" />
                  {v.category == "single" ? (
                    <video src={v.isrc2} muted autoPlay loop />
                  ) : v.category == "bundle" ? (
                    <img className="prd-img2" src={v.isrc2} alt={v.tit} />
                  ) : (
                    ""
                  )}
                  <div className="add-box">
                    <span>QUICK ADD</span>
                  </div>
                  <div
                    className={
                      "sale-box " + (v.category == "bundle" ? "on" : "")
                    }
                  >
                    <p>SALE</p>
                  </div>
                </div>
                <div className="product-txt">
                  <p>{v.tit}</p>
                  <span>${v.price}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {total <= 0 && <p>Sorry, there are no products here.</p>}
    </>
  );
}

export default SearchingCat;
