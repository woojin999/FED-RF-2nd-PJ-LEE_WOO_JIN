// 메인페이지 컴포넌트 //

import { useLayoutEffect } from "react";
import Banner from "../modules/Banner";
import Faq from "../modules/Faq";
import PdInfo from "../modules/PdInfo";
import PdList from "../modules/PdList";
import Support from "../modules/Support";

export default function Main() {
  
  return (
    <>
      {/* 배너 컴포넌트 */}
      <Banner />
      <PdList category={"single"} classSale={""} />
      <PdInfo category={"main"} />
      <Support category={"main"} />
      <PdList category={"bundle"} className={"off"} classSale={"on"} />
      <Faq />
    </>
  );
} ///////Main ////
