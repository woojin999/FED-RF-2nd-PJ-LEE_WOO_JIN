import React, { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "../../css/blog_detail.scss";
import { sblogData } from "../data/blog";
import PdList from "../modules/PdList";

function BlogDetail(props) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const loc = useLocation();
  const isrc = loc.state.isrc;
  const tit = loc.state.tit;
  const desc = loc.state.desc;
  const maindesc = loc.state.maindesc;
  const descimg = loc.state.descimg;
  const suvtit = loc.state.suvtit;

  // ^ - 줄바꿈
  // % - h2 태그
  // ※ - 이미지
  const titCode = (v) => {
    let data = v.split("%");
    // console.log(data);
    return (
      <>
        {data.map((v, i) => (
          <>
            {tabCode(v)}
            <h2 key={i}>{suvtit[i]}</h2>
          </>
        ))}
      </>
    );
  };

  const tabCode = (v) => {
    return (
      <>
        {v.indexOf("※") == -1
          ? v.split("^").map((v, i) => <p key={i}>{v}</p>)
          : imgCode(v)}
      </>
    );
  };

  const imgCode = (v) => {
    let data = v.split("※");
    return (
      <>
        {data.map((v, i) => (
          <>
            {v.split("^").map((v, i) => (
              <p key={i}>{v}</p>
            ))}
            <img key={i} src={descimg[i]} alt="" />
          </>
        ))}
      </>
    );
  };

  return (
    <>
      <div id="blog-detail-area">
        <section className="blog-detail-area">
          <div className="blog-top-area">
            <h2>{tit}</h2>
            <div className="blog-img-box">
              <img src={isrc} alt="" />
            </div>
          </div>
          <div className="blog-main-area">
            <div className="blog-desc col-9">
              {maindesc.indexOf("%") == -1
                ? tabCode(maindesc)
                : titCode(maindesc)}
            </div>
            <div className="blog-entries col-3">
              <h3>Other Entries</h3>
              <ul>
                {sblogData.map(
                  (v, i) =>
                    tit != v.tit && (
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
                          <img src={v.isrc} alt="" />
                          <h4>{v.tit}</h4>
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <PdList category={"single"} classSale={""} />
    </>
  );
}

export default BlogDetail;
