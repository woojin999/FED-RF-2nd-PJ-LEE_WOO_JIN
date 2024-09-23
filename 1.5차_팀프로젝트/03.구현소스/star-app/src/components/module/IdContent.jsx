import React from "react";
import { contentData } from "../../data/id_main_data";

// CSS 불러오기
import "../../css/id_content.scss";


function IdContent(props) {
  return (
    <>
      <section className="content-area">
        <div>
          <h2 className="main_tit">
            <small>epic journey through</small> <br />
            The ages of Star Wars
          </h2>
        </div>
        {contentData.map((v, index) => {
            return(
          <div className={`txt-content ${v.boxClass}`} key={index}>
            <h4 className="tit">{v.title}</h4>
            <h2 className="tit title-sub2">{v.subtitle}</h2>
            <span className="desc">{v.description}</span>
          </div>)
        })}
      </section>
    </>
  );
}

export default IdContent;
