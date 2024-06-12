import React from "react";

import { faq } from "../data/faq";
// 제이쿼리
import $ from "jquery";

function Faq() {
  function faqToggle() {
    let asd =$(this.attr("className"));
    console.log(asd);
    // $(".faq-box p").toggle(function () {
    //   console.log(this);
    // });
  }

  return (
    <>
      <div id="faq-area">
        <section className="faq-area-box">
          <div className="faq-wrap">
            <h2>FAQ</h2>
            <div className="faq-wrap-box faq-grid">
              {faq.map((v, i) => (
                <div key={i} className={"faq-box"} onClick={() => faqToggle()}>
                  <img src={v.isrc} alt="image" />
                  <h3>{v.question}</h3>
                  <p>{v.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Faq;
