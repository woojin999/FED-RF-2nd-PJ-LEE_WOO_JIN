import React from "react";

import "../../css/banner.scss";

function Banner() {
  return (
    <>
      <div id="ban-area">
        <section className="ban-area">
          <div className="ban-box">
            <div className="video-box">
              <video
                src={process.env.PUBLIC_URL + "/videos/main.mp4"}
                muted
                autoPlay
                loop
                playsinline
              ></video>
            </div>
            <div className="ban-txt">
              <h2>We only use 100% Organic Certified Herbs</h2>
              <p>
                Plants are only as powerful as the soil they are grown on.
                That's why we only pick herbs that have been cultivated without
                the use of soil depleting chemical fertilisers.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Banner;
