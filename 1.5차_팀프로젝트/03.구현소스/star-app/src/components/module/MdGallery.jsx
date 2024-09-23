import React, { useLayoutEffect } from 'react';

import "../../css/md_gallery.scss";

import domFn from "../../js/my_function";
import { mandalgallery } from '../../data/sub_themandalorian';

function MdGallery(props) {
  useLayoutEffect(()=>{
    mandalgallery();
  })
    return (
      <div id="mdgallery-area">
        <section className="gallery-area cont-box section-top">
          <div className="gallery-wrap inboxman">
            <h2>
              <span>Galleries</span>
            </h2>
            <div className="gallery-box fx-box gbox1">
              <div className="col-7 col-2nd-12 gimg-box">
                <img
                  src={process.env.PUBLIC_URL+"/images/sub_themandalorian_images/gallery_main1.jpeg"}
                  alt="갤러리메인이미지"
                />
              </div>
              <div className="col-5 col-2nd-12 gtxt-box">
                <div className="bullet"></div>
                <h3>
                  <span> Poster Gallery | The Mandalorian Season 3 </span>
                </h3>
                <p className="galaxy-sub-txt">
                  Explore a continuously updated collection of The Mandalorian
                  Season 3 posters!
                </p>
                <p>26 Images</p>
              </div>
            </div>
            <div className="gallery-box fx-box gbox2">
              <div className="col-7 col-2nd-12 gimg-box">
                <img
                  src={process.env.PUBLIC_URL+"/images/sub_themandalorian_images/gallery_main2.jpeg"}
                  alt="갤러리메인이미지"
                />
              </div>
              <div className="col-5 col-2nd-12 gtxt-box">
                <div className="bullet"></div>
                <h3>
                  <span>Stills Gallery | The Mandalorian Season 3</span>
                </h3>
                <p>19 Images</p>
              </div>
            </div>
            <div className="gallery-cont-box">
              <div className="gallery-tab-btn fa-solid fa-xmark fa-4x"></div>
              <div className="gallery-img-txt"></div>
              <div className="gallery-tab"></div>
              <button className="mdabtn ab1 fa-solid fa-angle-left gbtn gbtn1"></button>
              <button className="mdabtn ab2 fa-solid fa-angle-right gbtn gbtn2"></button>
            </div>
          </div>
        </section>
      </div>
    );
}

export default MdGallery;