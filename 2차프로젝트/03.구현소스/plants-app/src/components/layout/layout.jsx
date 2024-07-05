// 전체 레이아웃 컴포넌트 //

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import FooterArea from "./FooterArea";
import MainArea from "./MainArea";
import TopArea from "./TopArea";

import { dCon } from "../modules/dCon";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  // 상태관리 변수 //
  // 1. 로그인 상태관리변수
  const [loginSts, setLoginSts] = useState(sessionStorage.getItem("minfo"));
  // -> 초기값으로 로컬스토리지 "minfo" 를 할당함
  // 2. 로그인 환영 메시지 상태변수
  const [loginMsg, setLoginMsg] = useState(null);

  const goNav = useNavigate();
  // 따라서 별도의 함수를 만들고 이것을 콜백처리해준다
  // 함수메모처리 위해 useCallback() 에 넣어준다
  const goPage = useCallback((pm1, pm2) => {
    goNav(pm1, pm2);
  }, []);

  const makeMsg = useCallback((name) =>{
    setLoginMsg(name);
  })


  
  useEffect(()=>{
    if (sessionStorage.getItem("minfo")) {
      let ss = sessionStorage.getItem("mingo");
      setLoginSts(ss);
    }
  })
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  //
  return (
    <dCon.Provider
      value={{
        loginSts,
        setLoginSts,
        loginMsg,
        setLoginMsg,
        goPage,
        makeMsg,
        // logoutFn,
      }}
    >
      {/* 상단영역 */}
      <TopArea loginMsg={loginMsg} loginSts={loginSts} goPage={goPage}/>
      {/* 메인영역 */}
      <MainArea />
      {/* 하단영역 */}
      <FooterArea />
    </dCon.Provider>
  );
} ///////Layout ////
