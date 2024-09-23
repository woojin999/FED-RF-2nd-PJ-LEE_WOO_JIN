import React, { useState } from "react";

import Modal from "./Modal";

// CSS
import "../../css/as_banner.scss";

function AsBanner() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <section id="top-title" className="as-section-top">
        <div className="as-top-banner">
          <img src={process.env.PUBLIC_URL+`/images/sub_ahsoka_images/top-banner.jpeg`} alt="top banner" />
          <div className="ban-desc-box">
            <div className="ban-logo">
              <img
                src={process.env.PUBLIC_URL+`/images/sub_ahsoka_images/ahsoka_logo.png`}
                alt="ahsoka logo"
              />
            </div>
            <div className="as-title">
              <p>
                Former Jedi Knight Ahsoka Tano investigates an
                <br />
                emerging threat to a vulnerable galaxy.
              </p>
            </div>
            <div className="btn-box">
              <span className="btn1">
                <a href="#"
                onClick={(e)=>{
                  e.preventDefault();
                  toggleModal();
                }}
                >STREAM NOW</a>
                <Modal 
                show={showModal}
                onClose={toggleModal}
                >
                  <img src={process.env.PUBLIC_URL+`/images/sub_ahsoka_images/mv01.jpeg`} alt="ahsoka" />
                </Modal>
              </span>
              <span className="btn2">
                <a href="#">▶ WATCH TRAILER</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AsBanner;
