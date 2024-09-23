// 메인페이지 컴포넌트 //

import IdBannerArea from "../module/IdBannerArea.jsx";
import IdNewsArea from "../module/IdNewsArea";
import IdContent from "../module/IdContent";
import IdVisualArea from "../module/IdVisualArea";

// css 불러오기
import "../../css/id_main.scss";
import { useEffect } from "react";
import observerFn from "../../js/id_observer_fn.js";
import showPosterFn from "../../js/id_show_poster_fn";




export default function Main() {

  useEffect(()=>{
    observerFn();
    showPosterFn();
  },[]);
  
  // 코드 리턴구역
  return (
    <>
      {/* 2. 메인배너영역   */}
      <IdBannerArea />
      {/* 3. 메인 영역  */}
      <main id="main-index">
        <div className="content-area inbox">
          {/* 3-1. 컨텐츠영역(세계관)  */}
          <IdContent />
          {/* 3-2. 뉴스영역(뉴스,시리즈)  */}
          <IdNewsArea />
          {/* 3-3.메인 하단 배너 박스  */}
          <IdVisualArea />
        </div>
      </main>
    </>
  );
} ///////Main ////