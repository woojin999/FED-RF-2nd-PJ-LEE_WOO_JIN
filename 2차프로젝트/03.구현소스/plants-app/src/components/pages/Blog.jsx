import React, { useLayoutEffect } from "react";

import "../../css/blog.scss";
import { sblogData } from "../data/blog";
import { Link } from "react-router-dom";
import PdList from "../modules/PdList";

function Blog() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div id="blog-area">
        <section className="blog-area">
          <div className="blog-main">
            <div className="blog-txt col-6">
              <p>FEATURED POST</p>
              <h2>What is a herbal tincture?</h2>
              <p>
                Tinctures are a fast acting form of herbal medicine that can be
                used to target specific issues.
              </p>
              <div className="read-box">
                <a href="#">
                  <p className="read">READ MORE</p>
                </a>
              </div>
            </div>
            <div className="blog-main-img col-6">
              <img src="/images/blog4.png" alt="" />
            </div>
          </div>
        </section>
        <section className="bloglist-area-box">
          <div className="bloglist-wrap">
            <div className="bloglist-img-wrap">
              <ul>
                {sblogData.map((v, i) => (
                  <li key={i}>
                    <Link
                      to="/blogDetail"
                      state={{
                        isrc: v.isrc,
                        tit: v.tit,
                        desc: v.desc,
                        maindesc: v.maindesc,
                        descimg:v.descimg,
                        suvtit:v.subtit
                      }}
                    >
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

      <PdList category={"single"} className={"off"} blog={"blog"} />
    </>
  );
}

export default Blog;
