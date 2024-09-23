// 상단영역 컴포넌트 ///
import { Link } from "react-router-dom";
// FontAwesome 아이콘 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 상단메뉴 데이터 불러오기
import { sideMenuBox, socialLinks, navMenu } from "../../data/id_com_data";
// 살단영역 CSS 불러오기
import "../../css/common/top_area.scss";
import { useContext, useEffect } from "react";

// TopArea 기능함수 불러오기
import { topFn } from "../../js/id_com_fn";
import { sCon } from "../page/sCon.jsx";

export const TopArea = ({ loginSts, logoutFn }) => {
   //1. loginSts : 로그인 상태변수
   //2. logoutFn : 로그아웃 함수

   //
   const myCon = useContext(sCon);

   useEffect(() => {
      topFn();
   }, []);

   return (
      // 코드 리턴구역
      <header id="top-area">
         <div className="cursor"></div>
         <div className="wrapbox inbox fx-box">
            {/* 소셜 아이콘 박스 */}
            <div className="social-box col-4">
               <ul className="fx-box">
                  {socialLinks.map((v, i) => (
                     <li key={i}>
                        <a
                           href={v.href}
                           target="_blank"
                           className={`fa ${v.icon}`}
                           title={v.text}
                           rel="noreferrer"
                        >
                           <FontAwesomeIcon icon={v.icon} />
                           <span className="ir">{v.text}</span>
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
            {/* 로고 */}
            <h2 className="col-4">
               <Link to="/">
                  <img
                     src={
                        process.env.PUBLIC_URL +
                        "/images/main_images/logo_w.png"
                     }
                     alt="스타워즈로고"
                  />
               </Link>
            </h2>
            {/* 사이드메뉴박스*/}
            <div className="search-box col-4">
               <ul className="fx-box">
                  {
                     /* 로그인 상태에 따른 메뉴 분기*/

                     //로그인 상태일 때
                     loginSts ? (
                        <li className="logout">
                           <a
                              href=""
                              onClick={(e) => {
                                 e.preventDefault();
                                 logoutFn();
                              }}
                           >
                              LOGOUT
                           </a>
                        </li>
                     ) : (
                        //로그인 상태가 아닐 때
                        <>
                        <li className="joinus">
                           <Link to="/Member">JoinUs</Link>
                        </li>
                        <li className="login">
                           <Link to="/Login">Login</Link>
                        </li>
                        </>
                     )
                  }
               </ul>
            </div>
         </div>
         {/* 네비 */}
         <nav className="gnb-box inbox">
            <ul className="fx-box">
               {navMenu.map((v) => (
                  <li key={v.link}>
                     <Link to={v.link}>{v.menu}</Link>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
}; /////////// TopArea /////////////////////
