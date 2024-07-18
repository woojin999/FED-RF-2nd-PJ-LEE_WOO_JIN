import React, { useContext, useEffect, useLayoutEffect, useState } from "react";

import "../../css/login.scss";
import { Link } from "react-router-dom";
import { initData } from "../func/mem_fn";
import { dCon } from "../modules/dCon";

function Login(props) {
  const myCon = useContext(dCon);

  // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // 2. 비밀번호변수
  const [pwd, setPwd] = useState("");

  // 1. 아이디변수
  const [userIdError, setUserIdError] = useState(false);
  // 2. 비밀번호변수
  const [pwdError, setPwdError] = useState(false);
  // [ 아이디관련 메시지 프리셋 ] ////
  const msgId = [
    "This is a required entry", //필수입력
    "ID does not exist", //아이디가 존재하지 않습니다
  ];
  const msgPwd = [
    // 비밀번호
    "This is a required entry", //필수입력
    "Password doesn't match", //비밀번호가 일치하지 않습니다
  ];

  // [3] 에러메시지 상태변수 : 초기값 msgId[0]
  // -> 기본 메시지가 출력됨
  const [idMsg, setIdMsg] = useState(msgId[0]);
  const [pwdMsg, setPwdMsg] = useState(msgId[0]);

  const changeUserId = (e) => {
    let val = e.target.value;

    if (val != "") {
      setUserIdError(false);
    } else {
      setIdMsg(msgId[0]);
      setUserIdError(true);
    }
    setUserId(val);
  };

  // 2. 비밀번호 유효성 검사 ///////////
  const changePwd = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 빈값체크 :
    // 1-1 빈값아니면 에러아님(false)
    if (val !== "") {
      setPwdError(false);
    }
    // 1-2. 빈값이면 에러(true)
    else {
      // (1) 메시지 띄우기(필수입력메시지)
      setPwdMsg(msgPwd[0]);
      // (2) 에러상태값 변경하기
      setPwdError(true);
    } ///// else/////

    // 4. 기존입력값 반영하기
    setPwd(val);
  }; ///////// changePwd 함수 //////////

  const totalValid = () => {
    if(!userId) setUserIdError(true);
    if(!pwd) setPwdError(true);

    if(userId && pwd && !userIdError && !pwdError) return true;
    else return false;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // console.log("최종", totalValid());
    if (totalValid()) {
      initData();

      let memData = localStorage.getItem("mem-data");

      memData = JSON.parse(memData);

      let result = memData.find((v) => {
        if (v.uid == userId) return true;
      });
      console.log(result);
      if (!result) {
        // (1) 에러메시지 선택하기
        setIdMsg(msgId[1]);
        // (2) 에러메시지 띄우기
        setUserIdError(true);
      } ////if///
      else {
        setUserIdError(false);
        if (pwd == result.pwd) {
          sessionStorage.setItem("minfo", JSON.stringify(result));

          // 2. 컨텍스트 API의 로그인 상태 업데이트
          myCon.setLoginSts(sessionStorage.getItem("minfo"));
          // -> 업데이트 된 minfo 세션스 값을 넣음

          // 3. 로그인 환영메시지 셋팅함수 호출
          myCon.makeMsg(result.uname);
          console.log(result.uname);

          // 4. 로그인 성공 메시지 버튼에 출력
          document.querySelector(".signbtn p").innerText = "로그인 완";

          myCon.goPage("/");
        } else {
          // (1) 비밀번호 에러메시지 선택하기
          setPwdMsg(msgPwd[1]);
          setPwdError(true);
        } /// else ////
      }
    } else {
      alert("Change your input");
    } /// else ///
  }
  useEffect(() => {
    // 아이디 입력창 포커스
    document.querySelector("#user-id").focus();
  }, []);

  return (
    <div id="login-area">
      <section className="login-area">
        <div className="login-wrap">
          <h2>Login</h2>
          <div className="signtxt">
            <p>Don't have an account? &nbsp;</p>
          </div>
          <div className="signtxt">
            <p className="signup">
              <Link to="/member">Sign up here.</Link>
            </p>
          </div>
          <form action="" className="login-form">
            <ul>
              <li>
                <input
                  id="user-id"
                  type="text"
                  placeholder="Your ID"
                  value={userId}
                  onChange={changeUserId}
                />
                {
                  // 에러일 경우 메시지 출력
                  // 조건문 && 출력요소
                  userIdError && (
                    <div className="msg">
                      <small style={{ color: "red", fontSize: "10px" }}>
                        {idMsg}
                      </small>
                    </div>
                  )
                }
              </li>
              <li>
                <input
                  type="password"
                  placeholder="Password"
                  value={pwd}
                  onChange={changePwd}
                />
                {
                  // 에러일 경우 메시지 출력
                  // 조건문 && 출력요소
                  pwdError && (
                    <div className="msg">
                      <small style={{ color: "red", fontSize: "10px" }}>
                        {pwdMsg}
                      </small>
                    </div>
                  )
                }
              </li>
            </ul>
            <div className="signbtn">
              <button onClick={onSubmit}>
                <p>SIGN IN</p>
              </button>
            </div>
          </form>
          {/* <div className="forgot-box">
            <Link>
              <p className="forgot">Forgot your password?</p>
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Login;
