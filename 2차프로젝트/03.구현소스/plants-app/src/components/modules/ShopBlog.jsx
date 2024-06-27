import React from "react";

import { sblogData } from "../data/blog";

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
                {sblogData.map(
                  (v, i) =>
                    i < 4 && (
                      <li key={i}>
                        <Link
                          to="/blogDetail"
                          state={{
                            isrc: v.isrc,
                            tit: v.tit,
                            desc: v.desc,
                            maindesc: v.maindesc,
                            descimg: v.descimg,
                            suvtit: v.subtit,
                          }}
                        >
                          <img src={process.env.PUBLIC_URL + v.isrc} alt="" />
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
                    )
                )}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ShopBlog;
