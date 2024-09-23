// 스타워즈PJ 공통요소 데이터 객체 - id_com_data.js

import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

// ***************  1 . 공통영역 데이타 구성 코드 ***************

/********************************
 *   [ 1. 상단영역 데이터 ]
 ********************************/
// 1-1. 소셜박스 데이터
const socialLinks = [
  {
    icon: faInstagram,
    text: "인스타그램",
    href: "https://www.instagram.com/starwarskorea/",
  },
  {
    icon: faFacebook,
    text: "페이스북",
    href: "https://www.facebook.com/StarWars/?locale=ko_KR",
  },
  { icon: faTwitter, text: "트위터", href: "https://twitter.com/starwars" },
  {
    icon: faYoutube,
    text: "유튜브",
    href: "https://www.youtube.com/@starwars",
  },
  {
    icon: faPlay,
    text: "네이버 TV",
    href: "https://tv.naver.com/search?query=%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88",
  },
];
// 1-2. 사이드메뉴박스
const sideMenuBox = [
  // { menu: "Search", link: "/Search" },
  { menu: "JoinUs", link: "/Member" },
  { menu: "Login", link: "/Login" },
  { menu: "Logout", link: "/" },
];

const navMenu = [
  { menu: "bad batch", link: "/Badbatch" },
  { menu: "the-mandalorian", link: "/Themandalorian" },
  { menu: "Ahsoka", link: "/Ahsoka" },
];

/********************************
 *   [ 2. 하단영역 데이터 ]
 ********************************/
// 2-1. 하단메뉴 데이터
const footerMenu = [
  "Terms of Use",
  "Additional Content Information",
  "Privacy Policy",
  "Children's Online Privacy Policy",
  "Your US State Privacy Rights",
  "Star Wars at shopDisney",
  "Star Wars Helpdesk",
  "Interest-Based Ads",
];
// 2-2. 하단메뉴 정보
const footerinfo = [
  " Notice of Right to Opt Out of Sale/Sharing",
  "Do Not Sell or Share My Personal Information",
  "Copyrightⓒ STAR WARS <br />TM &amp; © LucasFilm Ltd. All Rights Reserved",
];

// **************** 2 . 공통영역 html 구성 코드 ****************

const htmlData = {
  // (공통 ) 상단영역 html 코드
  topArea: `
         <div class="cursor"></div>
         <div class="wrapbox inbox fx-box">
            <!-- 1-1. 소셜아이콘 박스 -->
            <div class="social-box col-4">
               <ul class="fx-box">
                ${socialLinks
                  .map(
                    (v) => `
                <li><a href="${v.href}" target="_blank" class="fa ${v.class}"><span class="ir">${v.text}</span></a></li></li>
                `
                  )
                  .join("")}
               </ul>
            </div>
            <!-- 1-2.로고 -->
            <h2 class="col-4">
               <a href="index.html"
                  ><img src="./images/main_images/logo_w.png" alt="스타워즈로고"
               /></a>
            </h2>
            <!-- 1-3. 로그인&검색박스 -->
            <div class="search-box col-4">
               <ul class="fx-box">
               ${sideMenuBox.map((v) => `<li><a href="#">${v}</a></li>`).join("")}
               </ul>
            </div>
         </div>
         <!-- 1-4. 네비 -->
         <nav class="gnb-box inbox">
            <ul class="fx-box">
               ${navMenu
                 .map((v) => `<li><a href="${v.link}">${v.menu}</a></li>`)
                 .join("")}
            </ul>
         </nav>

  `,
  // (공통 ) 하단영역 html 코드
  footerArea: `
  <div class="footer-area">
  <section class="footer_inner2 inbox">
    <div class="footer_cont fx-box">
      <h2>
        <a href="#top">
          <img src=${
            process.env.PUBLIC_URL + "/images/main_images/logo_w.png"
          } alt="스타워즈로고" />
        </a>
      </h2>

      <div class="footer_address">
        <ul class="footer_info fx-box">
         ${footerMenu
           .map(
             (v) => `
         <li>
            <a href="###" class="footer-menu">${v}</a>
         </li>`
           )
           .join("")}
        </ul>
        <ul class="footer_info footer_info2">
          <li>
            <p class="footer-menu">
            ${footerinfo[0]}
            </p>
            <span>${footerinfo[1]}</span>
          </li>
        </ul>

        <p class="copyright">
         ${footerinfo[2]}
        </p>
      </div>
    </div>
  </section>
</div>
`,
}; /////////////// htmlData 객체 ///////////////

// 데이터 공개하기 ///
export { htmlData, socialLinks, sideMenuBox, footerMenu, navMenu };
