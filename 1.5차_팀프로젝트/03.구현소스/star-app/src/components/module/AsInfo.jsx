import React from "react";

// CSS
import "../../css/as_info.scss";


function AsInfo(props) {
  return (
    <>
      <div className="page">
        <section id="info-area" className="as-section-top">
          <div className="content-box fx-box scAct">
            <div className="img-box col-6">
              <img src={process.env.PUBLIC_URL+`/images/sub_ahsoka_images/poster1.jpeg`} alt="ahsoka poster" />
            </div>
            <div className="desc-box col-6">
              <div className="bullet"></div>
              <h2 className="as-title">
                Star Wars :<br />
                Ahsoka
              </h2>
              <div className="as-desc">
                Rating: TV-14 Release Date: August 22, 2023 Genre: Action,
                Adventure, Science Fiction
              </div>
              <div className="as-desc">
                Set after the fall of the Empire, "Ahsoka" follows the former
                Jedi knight Ahsoka Tano as she investigates an emerging threat
                to a vulnerable galaxy.
              </div>
              <button className="btn-link">
                <a href="#">
                  <img
                    src={process.env.PUBLIC_URL+`/images/sub_ahsoka_images/icon_link_asoka.png`}
                    alt="era7 icon"
                  />
                  <span className="link-txt">Era: The New Republic</span>
                </a>
              </button>
            </div>
          </div>
          <div className="bulr-box">
            <div className="gradient"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AsInfo;
