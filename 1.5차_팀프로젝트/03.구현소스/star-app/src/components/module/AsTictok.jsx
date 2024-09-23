import React from "react";

// CSS
import "../../css/as_tictok.scss";

function AsTictok(props) {
  return (
    <>
      <div className="page">
        <section id="tiktoc-area" className="as-section-top">
          <div className="content-box">
            <div className="tit-box fx-box">
              <h3 className="title-sub">#Asoka</h3>
            </div>
            <span className="under-line"></span>
            <div className="tiktoc-box scAct">
              <div className="col-12">
                <ul>
                  <li>
                    <figure>
                      <a href="#">
                        <img src={process.env.PUBLIC_URL+`/images/sub_ahsoka_images/tt01.jpeg`} alt="tiktoc" />
                      </a>
                    </figure>
                    <div className="desc-box">
                      <div className="title-box">
                        <h3>Space mother is mothering.</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <a href="#">
                        <img src={process.env.PUBLIC_URL+`/images/sub_ahsoka_images/tt02.jpeg`} alt="tiktoc" />
                      </a>
                    </figure>
                    <div className="desc-box">
                      <div className="title-box">
                        <h3>It's the commitment.</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <a href="#">
                        <img src={process.env.PUBLIC_URL+`/images/sub_ahsoka_images/tt03.jpeg`} alt="tiktoc" />
                      </a>
                    </figure>
                    <div className="desc-box">
                      <div className="title-box">
                        <h3>This is a Loth-cat appreciation post.</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <a href="#">
                        <img src={process.env.PUBLIC_URL+`/images/sub_ahsoka_images/tt04.jpeg`} alt="tiktoc" />
                      </a>
                    </figure>
                    <div className="desc-box">
                      <div className="title-box">
                        <h3>This is a Shin Hati fan account.</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <a href="#">
                        <img src={process.env.PUBLIC_URL+`/images/sub_ahsoka_images/tt05.jpeg`} alt="tiktoc" />
                      </a>
                    </figure>
                    <div className="desc-box">
                      <div className="title-box">
                        <h3>Vader impression on point.</h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AsTictok;
