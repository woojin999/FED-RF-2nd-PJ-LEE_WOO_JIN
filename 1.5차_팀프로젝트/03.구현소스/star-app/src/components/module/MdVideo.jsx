import React, { useLayoutEffect } from "react";
import { videoData } from "../../data/sub_themandalorian_data";
import domFn from "../../js/my_function";

import "../../css/md_video.scss";
import { mandalvideo } from "../../data/sub_themandalorian";
function MdVideo(props) {
  useLayoutEffect(() => {
    mandalvideo();
  });
  return (
    <div id="mdvideo-area">
      <section className="video-area cont-box section-top">
        <div className="video-wrap inboxman">
          <h2>
            <span>Video</span>
          </h2>
          <div className="video-img-wrap fx-box inboxmanman">
            <div className="video-list"></div>
            <div className="slbtn-box">
              <button className="mdabtn ab1 fa-solid fa-angle-left vdbtn1 vdbtn"></button>
              <button className="mdabtn ab2 fa-solid fa-angle-right vdbtn2 vdbtn"></button>
            </div>
            <div className="video-cont-box">
              <div className="video-tab"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MdVideo;
