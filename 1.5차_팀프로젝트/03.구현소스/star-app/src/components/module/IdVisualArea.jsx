// 3-3.메인 하단배너박스 영역 컴포넌트 - IdVisualArea.jsx
import { Link } from 'react-router-dom';
import React from "react";
import { visualData } from "../../data/id_main_data";

// CSS 불러오기
import "../../css/id_visual_area.scss";

function IdVisualArea(props) {
  return (
    <section className="visualView-ban inbox">
    <div className="visualView">
      {visualData.map((v,i) => {
        return (
          <div key={i} className="visualimg">
            <span>
              {v.title}
              <p>{v.series}</p>
              <p className="desc">{v.desc}</p>
              <Link to={v.href} className="btn" >
                MORE VIEW
              </Link>
            </span>
          </div>
        );
      })}
    </div>
    </section>
  );
}

export default IdVisualArea;
