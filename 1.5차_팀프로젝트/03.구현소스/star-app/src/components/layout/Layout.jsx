// 전체 레이아웃 컴포넌트 ///
import { useCallback, useEffect, useState } from "react";
import { FooterArea } from "./FooterArea";
import MainArea from "./MainArea";
import { TopArea } from "./TopArea";

// 컨텍스트 API 불러오기
import { sCon } from "../page/sCon.jsx";
import { useNavigate } from "react-router-dom";

////////////////////////import area///////////////////////////////////

export default function Layout() {
  let loginTemp = null;
  if(sessionStorage.getItem("login-sts")) 
  loginTemp = sessionStorage.getItem("login-sts");

  //[상태관리변수 구역]///////////////////////////////////

  //1. 로그인 상태관리변수
  const [loginSts, setLoginSts] = useState(loginTemp);
  // console.log("로그인?", loginSts);

  /////[공통관리함수 구역]///////////////////////////////////
  //1. 로그아웃 함수
  const logoutFn = useCallback(() => {
    //1. 로그인 상태값 null
    setLoginSts(null);
    //2. 세션스 지우기 : minfo
    sessionStorage.removeItem("login-sts");
    //3. 로그인 메세지 초기화
    // setLoginMsg(null);
    //4. 메인페이지로 이동
    goPage("/");
  }, []);

  //2. 라우팅 이동함수
  const goNave = useNavigate();
  const goPage = useCallback((pm1, pm2) => {
    goNave(pm1, pm2);
  }, []);

  //화면 랜더링 구역/////////////////////////////////////////////////////
  useEffect(() => {
    //로그인 상태 체크//////////////
    //만약 세션스의 minfo 값이 null이 아니라면 로그인 상태변수 업데이트
    //ㄴ> null이 아니면 조건문 true 처리
    if (sessionStorage.getItem("minfo")) {
      //세션스 변수할당
      let sessionSts = sessionStorage.getItem("minfo");
      //로그인 상태값
      setLoginSts(sessionSts);
      //로그인 메시지 업데이트
      //ㄴ> 세션스의 unm(이름값)을 보내준다
      // makeMsg(JSON.parse(sessionSts).unm);
    } ////if/////////////
  }, []);

  //// 코드 리턴구역 //////////////
  return (
    // Provider value속성으로 전역노출 변수를 설정함!
    <sCon.Provider
      value={{
        //로그인 상태관리변수
        loginSts,
        setLoginSts,
        //로그아웃 함수
        logoutFn,
      }}
    >
      {/* 1.상단영역 : 메모이제이션을 위해 직접값전달! */}
      <TopArea 
      loginSts={loginSts} 
      logoutFn={logoutFn} 
      />
      {/* 2.메인영역 */}
      <MainArea />
      {/* 3.하단영역 */}
      <FooterArea />
    </sCon.Provider>
  );
} /////////// Layout /////////////////////
