import React, { useLayoutEffect, useState } from "react";

import "../../css/member.scss";
import { Link, useNavigate } from "react-router-dom";

import { initData } from "../func/mem_fn";

function Member(props) {
  const goNav = useNavigate();
  // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // 2. 비밀번호변수
  const [pwd, setPwd] = useState("");
  // 3. 비밀번호확인변수
  const [chkPwd, setChkPwd] = useState("");
  // 4. 사용자이름변수
  const [userName, setUserName] = useState("");
  // 5. 이메일변수
  const [email, setEmail] = useState("");

  // 에러 상태관리변수
  const [userIdError, setUserIdError] = useState(false);
  // 2. 비밀번호변수
  const [pwdError, setPwdError] = useState(false);
  // 3. 비밀번호확인변수
  const [chkPwdError, setChkPwdError] = useState(false);
  // 4. 사용자이름변수
  const [userNameError, setUserNameError] = useState(false);
  // 5. 이메일변수
  const [emailError, setEmailError] = useState(false);

  // [ 아이디관련 메시지 프리셋 ] ////
  const msgId = [
    // 1. 최소 6글자 이상 입력할것
    "User ID must contain a minimum of 6 characters",
    // 2. 이미 사용중인 아이디임
    "This ID is already in use!",
    // 3. 훌륭한 아이디
    "That's a great ID!",
  ];

  // [ 기타 메시지 프리셋 ]
  const msgEtc = {
    // 비밀번호
    pwd: "6 to 15 digits in the form of special characters, characters, and numbers",
    // 비밀번호확인
    confPwd: "Password verification does not match",
    // 필수입력
    req: "This is a required entry",
    // 이메일
    email: "Please enter a valid email format",
  }; ///// msgEtc ///////

  // [3] 에러메시지 상태변수 : 초기값 msgId[0]
  // -> 기본 메시지가 출력됨
  const [idMsg, setIdMsg] = useState(msgId[0]);

  const changeUserId = (e) => {
    let val = e.target.value;

    setUserId(val);

    const valid = /^[A-Za-z0-9+]{6,15}$/;

    if (valid.test(val)) {
      // console.log("통과");

      initData();

      let memData = localStorage.getItem("mem-data");
      memData = JSON.parse(memData);

      let isTrue = memData.some((v) => v.uid == val);

      if (isTrue) {
        // 에러 메시지
        setIdMsg(msgId[1]);
        // 에러상태값
        setUserIdError(true);
      } else {
        // 에러 상태값
        setUserIdError(false);
      }

      // console.log("중복id", isTrue);
      memData.forEach((v) => console.log(v));
    } else {
      // console.log("에");
      // 에러 메시지 업데이트
      setIdMsg(msgId[0]);
      setUserIdError(true);
    }
  }; // changeUserId
  // 비밀번호 유효성 검사

  const changePwd = (e) => {
    let val = e.target.value;

    const valpwd = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    if (valpwd.test(val)) setPwdError(false);
    else setPwdError(true);

    setPwd(val);
  }; // changePwd

  // 3. 비밀번호확인 유효성 검사 ///////////
  const changeChkPwd = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 비밀번호 입력내용과 일치여부 확인
    if (pwd === val) setChkPwdError(false);
    else setChkPwdError(true);

    // 2. 기존입력값 반영하기
    setChkPwd(val);
  }; ///////// changeChkPwd 함수 //////////

  // 4. 사용자이름 유효성 검사 ///////////
  const changeUserName = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 빈값체크
    if (val !== "") setUserNameError(false);
    else setUserNameError(true);

    // 2. 기존입력값 반영하기
    setUserName(val);
  }; ///////// changeUserName 함수 //////////

  // 5. 이메일 유효성 검사 ///////////
  const changeEmail = (e) => {
    // 입력된 값읽기
    let val = e.target.value;

    // 1. 이메일 유효성 검사식(따옴표로 싸지 말것!)
    const valid =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    // 2. 입력값 확인 : e.target -> 이벤트가 발생한 요소
    // console.log(val);

    // 3. 에러에 따른 상태값 변경
    if (valid.test(val)) setEmailError(false);
    else setEmailError(true);

    // 4. 기존입력값 반영하기
    setEmail(val);
  }; ///////// changeEmail 함수 //////////

  // [ 전체 유효성검사 체크함수 ] ///////////
  const totalValid = () => {
    // 1. 모든 상태변수에 빈값일때 에러상태값 업데이트!
    if (!userId) setUserIdError(true);
    if (!pwd) setPwdError(true);
    if (!chkPwd) setChkPwdError(true);
    if (!userName) setUserNameError(true);
    if (!email) setEmailError(true);

    // 2. 통과시 true, 불통과시 false 리턴처리
    // 통과조건 : 빈값아님 + 에러후크변수가 모두 false
    if (
      userId &&
      pwd &&
      chkPwd &&
      userName &&
      email &&
      !userIdError &&
      !pwdError &&
      !chkPwdError &&
      !userNameError &&
      !emailError
    )
      return true;
    // 하나라도 false이면 false를 리턴함!
    else return false;
  }; /////////// totalValid 함수 ///////////

  // 서브밋 ///

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("최종 검사", totalValid());

    if (totalValid()) {
      console.log("모두 통과");

      initData();

      let memData = localStorage.getItem("mem-data");

      memData = JSON.parse(memData);

      let temp = memData.map((v) => v.idx);

      let newData = {
        idx: Math.max(...temp) + 1,
        uid: userId,
        pwd: pwd,
        uname: userName,
        email: email,
      };

      memData.push(newData);

      localStorage.setItem("mem-data", JSON.stringify(memData));

      goNav("/login");
    } else {
      alert("Change your input");
    }
  }; // on Submit

  return (
    <div id="member-area">
      <section className="member-area">
        <div className="member-wrap">
          <h2>Create Account</h2>
          <div className="signtxt">
            <p>Already have an account? &nbsp;</p>
          </div>
          <div className="signtxt">
            <p className="signup">
              <Link to="/login">Sign in here.</Link>
            </p>
          </div>
          <form action="">
            <ul>
              <li>
                <input
                  type="text"
                  placeholder="Id"
                  value={userId}
                  onChange={changeUserId}
                />
                {userIdError && (
                  <div className="msg">
                    <small style={{ color: "red", fontSize: "10px" }}>
                      {idMsg}
                    </small>
                  </div>
                )}
              </li>
              <li>
                <input
                  type="password"
                  placeholder="Password"
                  value={pwd}
                  onChange={changePwd}
                />
                {pwdError && (
                  <div className="msg">
                    <small style={{ color: "red", fontSize: "10px" }}>
                      {msgEtc.pwd}
                    </small>
                  </div>
                )}
              </li>
              <li>
                <input
                  type="password"
                  placeholder="Password Check"
                  value={chkPwd}
                  onChange={changeChkPwd}
                />
                {chkPwdError && (
                  <div className="msg">
                    <small style={{ color: "red", fontSize: "10px" }}>
                      {msgEtc.confPwd}
                    </small>
                  </div>
                )}
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Name"
                  value={userName}
                  onChange={changeUserName}
                />
                {
                  // 에러일 경우 메시지 출력
                  // 조건문 && 출력요소
                  userNameError && (
                    <div className="msg">
                      <small style={{ color: "red", fontSize: "10px" }}>
                        {msgEtc.req}
                      </small>
                    </div>
                  )
                }
              </li>
              <li>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={changeEmail}
                />
                {
                  // 에러일 경우 메시지 출력
                  // 조건문 && 출력요소
                  emailError && (
                    <div className="msg">
                      <small style={{ color: "red", fontSize: "10px" }}>
                        {msgEtc.email}
                      </small>
                    </div>
                  )
                }
              </li>
            </ul>
            <div className="signbtn">
              <button onClick={onSubmit}>
                <p>CREATE</p>
              </button>
            </div>
          </form>
          <div className="forgot-box">
            <p className="forgot">Forgot your password?</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Member;
