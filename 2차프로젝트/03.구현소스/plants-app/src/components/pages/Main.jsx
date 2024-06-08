// 메인페이지 컴포넌트 //

import Banner from "../modules/Banner";
import PdList from "../modules/PdList";

export default function Main() {
  //
  return (
    <>
      {/* 배너 컴포넌트 */}
      <Banner />
      <PdList category={"single"} />
    </>
  );
} ///////Main ////
