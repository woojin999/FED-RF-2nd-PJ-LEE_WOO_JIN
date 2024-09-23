import React, { useEffect } from "react";

// 나의 함수
import mFn from "../../js/my_function";

// Module
import AsBanner from "../module/AsBanner";
import AsInfo from "../module/AsInfo";
import AsVideo from "../module/AsVideo";
import AsCharacter from "../module/AsCharacter";
import AsEpisode from "../module/AsEpisode";
import AsTictok from "../module/AsTictok";

// 공통 CSS
import "../../css/ahsoka.scss";

function Ahsoka() {

  

  const CRITERIA = (window.innerHeight / 3) * 2;
  function scrollFn(stage,scAct) {

    stage.forEach((ele, idx) => {
      // 대상의 BCR값 알아오기
      let pos = mFn.getBCR(ele);

      // 기준값보다 작아지면 on 넣기
      if (pos < CRITERIA) {
        scAct[idx].classList.add("on");
      } else {
        scAct[idx].classList.remove("on");
      }
    });
  } ///////////// scrollFn /////////////



  useEffect(() => {
    // 스크롤 페이드인/아웃 ///////////////////////////
    const stage = mFn.qsa(".page");
    const scAct = mFn.qsa(".scAct");
    // console.log("페이지:", stage, "\n scAct박스:", scAct);

    const pagePos = [];
    stage.forEach((ele, idx) => {
      pagePos[idx] = ele.offsetTop;
    });
    // console.log("페이지 높이값:", pagePos);

    mFn.addEvt(window, "scroll", ()=>scrollFn(stage,scAct));
  }, []);

  //  코드리턴구역 /////////
  return (
    <>
      {/* 상단 타이틀 배너 */}
      <AsBanner />
      {/* 시리즈 소개 영역 */}
      <AsInfo />
      {/* 비디오 영역 */}
      <AsVideo />
      {/* 캐릭터 소개 영역 */}
      <AsCharacter />
      {/* 에피소드 가이드 영역 */}
      <AsEpisode />
      {/* 틱톡 영역 */}
      <AsTictok />
    </>
  );
}

export default Ahsoka;
