import React from "react";

import { sblogData } from "../data/shop_blog";

import "../../css/shop_blog.scss";
import { Link } from "react-router-dom";

function ShopBlog() {
  return (
    <>
      <div id="shopblog-area">
        <section className="shopblog-area-box">
          <div className="shopblog-wrap">
            <div className="shopblog-img-wrap">
              <ul>
                {sblogData.map((v, i) => (
                  i < 4 &&
                  <li key={i}>
                    <Link to="/blog">
                      <img src={v.isrc} alt="" />
                      <div>
                        {
                          <>
                            <h3>{v.tit}</h3>
                            <p>{v.desc}</p>
                          </>
                        }
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ShopBlog;
