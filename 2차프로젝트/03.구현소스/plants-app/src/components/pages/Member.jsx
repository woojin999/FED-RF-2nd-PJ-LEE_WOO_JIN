import React, { useLayoutEffect, useState } from "react";

import "../../css/member.scss";
import { Link } from "react-router-dom";

import { initData } from "../func/mem_fn";

function Member(props) {
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
    // 1. 최소 5글자 이상 입력할것
    "User ID must contain a minimum of 5 characters",
    // 2. 이미 사용중인 아이디임
    "This ID is already in use!",
    // 3. 훌륭한 아이디
    "That's a great ID!",
  ];

  // [ 기타 메시지 프리셋 ]
  const msgEtc = {
    // 비밀번호
    pwd: "5 to 15 digits in the form of special characters, characters, and numbers",
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
      console.log("통과");

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

      console.log("중복id", isTrue);
      memData.forEach((v) => console.log(v));
    } else {
      console.log("에");
      // 에러 메시지 업데이트
      setIdMsg(msgId[0]);
      setUserIdError(true);
    }
  };
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
                {
                  userIdError && (
                    <div className="msg">
                      <small>
                        {idMsg}
                      </small>
                    </div>
                  )
                }
              </li>
              <li>
                <input type="password" placeholder="Password" />
              </li>
              <li>
                <input type="password" placeholder="Password Check" />
              </li>
              <li>
                <input type="text" placeholder="Name" />
              </li>
              <li>
                <input type="email" placeholder="Email" />
              </li>
            </ul>
          </form>
          <div className="signbtn">
            <button>
              <p>CREATE</p>
            </button>
          </div>
          <div className="forgot-box">
            <p className="forgot">Forgot your password?</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Member;
