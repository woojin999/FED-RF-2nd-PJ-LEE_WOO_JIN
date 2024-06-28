import React from 'react';

import "../../css/promise.scss";

function Promise(props) {
    return (
      <>
        <div id="promise-area">
          <section className="promise-area">
            <div className="promise-area-wrap">
              <div className="video-box col-6">
                <video
                  src={process.env.PUBLIC_URL + "/videos/sub.mp4"}
                  autoPlay
                  muted
                  loop
                  playsInline="true"
                />
              </div>
              <div className="txt-box col-6">
                <p>OUR PROMISE</p>
                <h2>
                  Always Organic. <br />
                  Always Non GMO.
                  <br />
                  No fillers.
                  <br />
                  Ever.
                </h2>
              </div>
            </div>
          </section>
        </div>
      </>
    );
}

export default Promise;