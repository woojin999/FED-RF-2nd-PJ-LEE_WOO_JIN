// 전체 레이아웃 컴포넌트 //

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import FooterArea from "./FooterArea";
import MainArea from "./MainArea";
import TopArea from "./TopArea";

import $ from "jquery";

import { dCon } from "../modules/dCon";
import { useNavigate } from "react-router-dom";
import CartList from "../modules/CartList";

export default function Layout() {
  // 상태관리 변수 //
  // 1. 로그인 상태관리변수
  const [loginSts, setLoginSts] = useState(sessionStorage.getItem("minfo"));
  // -> 초기값으로 로컬스토리지 "minfo" 를 할당함
  // 2. 로그인 환영 메시지 상태변수
  const [loginMsg, setLoginMsg] = useState(null);

  // 로컬스 카트 데이터

  let cartTemp = false;
  const [localsCart, setLocalsCart] = useState(
    localStorage.getItem("cart-data")
  );

  if(localsCart){
    let cartCnt = JSON.parse(localsCart).length;
    if(cartCnt > 0) cartTemp = true;
  }

  const [cartSts, setCartSts] = useState(cartTemp);

  const goNav = useNavigate();
  // 따라서 별도의 함수를 만들고 이것을 콜백처리해준다
  // 함수메모처리 위해 useCallback() 에 넣어준다
  const goPage = useCallback((pm1, pm2) => {
    goNav(pm1, pm2);
  }, []);

  const makeMsg = useCallback((name) => {
    setLoginMsg(name);
  });

  const logoutFn = useCallback(() => {
    setLoginSts(null);
    sessionStorage.removeItem("minfo");
    setLoginMsg(null);
    goPage("/");
  }, []);

  const openCart = useCallback((e) => {
    // e.preventDefault();
    $(".cart-box").css({ right: "0px", opacity: "1" });
    $(".ham-area").css({ left: "-350px", opacity: "0" });
    $(".cart-area").css({ zIndex: "999999999" });
  },[]);

  const closeCart = useCallback(() => {
    $(".cart-box").css({ right: "-350px", opacity: "0" });
  });

  useEffect(() => {
    if (sessionStorage.getItem("minfo")) {
      let ss = sessionStorage.getItem("minfo");
      setLoginSts(ss);
      makeMsg(JSON.parse(ss).uname);
    }
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
        logoutFn,
        openCart,
        closeCart,
        localsCart,
        setLocalsCart,
        cartSts,
        setCartSts
      }}
    >
      <CartList closeCart={closeCart} cartSts={cartSts} />
      {/* 상단영역 */}
      <TopArea
        loginMsg={loginMsg}
        loginSts={loginSts}
        goPage={goPage}
        logoutFn={logoutFn}
        closeCart={closeCart}
        openCart={openCart}
      />
      {/* 메인영역 */}
      <MainArea />
      {/* 하단영역 */}
      <FooterArea logoutFn={logoutFn} />
    </dCon.Provider>
  );
} ///////Layout ////

