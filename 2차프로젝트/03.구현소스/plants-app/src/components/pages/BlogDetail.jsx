import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import "../../css/blog_detail.scss";

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
    return (
      <>
        <div id="blog-detail-area">
          <section className="blog-detail-area">
            <div className='blog-top-area'>
                <h2>{tit}</h2>
                <div className='blog-img-box'>
                <img src={isrc} alt="" />

                </div>
            </div>
            <div className='blog-main-area'>
                <div className='blog-desc col-8'>
                    {
                        maindesc.split("^").map((v,i)=>(
                            console.log(v.split("%"))
                            // <p key={i}>{v}</p>
                            
                        ))
                    }
                </div>
                <div className='blog-entries col-4'></div>
            </div>
          </section>
        </div>
        <h2>블디</h2>
      </>
    );
}

export default BlogDetail;