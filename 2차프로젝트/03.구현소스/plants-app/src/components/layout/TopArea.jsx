import { Link, useNavigate } from "react-router-dom";
import { menu } from "../data/gnb";

import $ from "jquery";

import "../../css/top_area.scss";
import { useEffect } from "react";

export default function TopArea({
  loginSts,
  goPage,
  loginMsg,
  logoutFn,
  openCart,
  closeCart,
}) {
  const searchBtn = (e) => {
    e.preventDefault();
    $(".search-area").addClass("on");
    $(".searchInput").val("").focus();
  };
  const searchRBtn = () => {
    $(".search-area").removeClass("on");
  };

  const goNav = useNavigate();

  const enterKey = (e) => {
    if (e.key == "Enter") {
      let txt = $(e.target).val().trim();
      if (txt != "") {
        goSearch(txt);
        $(".search-area").removeClass("on");
      }
    }
  };

  const goSearchBtn = () => {
    let txt = $("#topSearchingVal").val().trim();
    if (txt != "") {
      goSearch(txt);
      $(".search-area").removeClass("on");
    }
  };

  const goSearch = (txt) => {
    // console.log("검색", txt);
    goNav("search", { state: { keyword: txt } });
  };

  const goHamSub = () => {
    $(".ham-list:first").toggleClass("on");
  };

  const goHam = () => {
    $(".ham-area").css({ left: "0px", opacity: "1" });
    $(".cart-box").css({ right: "-350px", opacity: "0" });
  };

  const closeHam = () => {
    $(".ham-area").css({ left: "-350px", opacity: "0" });
  };

  

  const goTop = () => {
    if ($(window).scrollTop() > 200) {
      $(".gotopbtn").addClass("on");
    } else {
      $(".gotopbtn").removeClass("on");
    }
  };

  const gotopbtn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    $(".gotopbtn").removeClass("on");
  };

  useEffect(() => {
    window.addEventListener("wheel", goTop);
  });

  const banArr = [
    "◎ You are $64.62 away from free shipping.",
    "◎ You are $64.62 away from free shipping.",
    "◎ You are $64.62 away from free shipping.",
    "◎ You are $64.62 away from free shipping.",
    "◎ You are $64.62 away from free shipping.",
    "◎ You are $64.62 away from free shipping.",
    "◎ You are $64.62 away from free shipping.",
    "◎ You are $64.62 away from free shipping.",
    "◎ You are $64.62 away from free shipping.",
  ];

  useEffect(() => {
    let target = document.querySelector(".top-ban ul");
    let tagetEle = target.querySelectorAll("li");
    const updateCriteria = () => tagetEle[0].offsetWidth;
    let criteria = updateCriteria();
    window.addEventListener("resize", () => {
      criteria = updateCriteria();
    });

    let currVal = 0;
    function moveText() {
      target.style.translate = --currVal + "px";
      if (currVal <= Math.floor(-criteria)) {
        target.appendChild(tagetEle[0]);
        target.style.translate = "0px";
        currVal = 0;
      }
      setTimeout(moveText, 15);
    }

    setTimeout(moveText);
  }, []);

  return (
    <>
      
      <div className="top-ban">
        <ul>
          {banArr.map((v, i) => (
            <li key={i}>
              <p>{v}</p>
            </li>
          ))}
        </ul>
      </div>
      <div id="top-area">
        <header className="top-area">
          <div className="top-area-box">
            <div className="gnb-box">
              <div className="col-4">
                <nav className="gnb-menu">
                  <ul className="gnb-smenu fx-box">
                    <li className="ham-li">
                      <div className="ham-menu" onClick={goHam}>
                        <i className="fa-solid fa-bars"></i>
                      </div>
                    </li>
                    <li className="ham-sc">
                      <a href="#">
                        <i
                          className="fa-solid fa-magnifying-glass"
                          onClick={searchBtn}
                        ></i>
                      </a>
                    </li>
                    {menu.map((v, i) => (
                      <li key={i}>
                        <Link to={v.link}>
                          <span>{v.txt}</span>
                        </Link>
                        {v.single && (
                          <div className="smenu">
                            <ol className={v.bundle ? "col-3" : "col-6"}>
                              {v.single.map((v, i) => (
                                <li key={i}>
                                  <Link
                                    to={v.link}
                                    state={{
                                      category: "single",
                                      pname: v.pname,
                                    }}
                                  >
                                    {v.txt}
                                  </Link>
                                </li>
                              ))}
                            </ol>
                            {v.bundle && (
                              <ol className="col-3">
                                {v.bundle.map((v, i) => (
                                  <li key={i}>
                                    <Link
                                      to={v.link}
                                      state={{
                                        category: "bundle",
                                        pname: v.pname,
                                      }}
                                    >
                                      {v.txt}
                                    </Link>
                                  </li>
                                ))}
                              </ol>
                            )}
                            <div className="video-box col-6">
                              {v.video ? (
                                <video
                                  src={process.env.PUBLIC_URL + v.video}
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                ></video>
                              ) : (
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/images/Card_PDP.png"
                                  }
                                />
                              )}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="col-4">
                <div className="logo-box">
                  <Link to="/">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/Pttr_Logo_Brown.png"
                      }
                      alt="main-logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="sub-gnb-box col-4 fx-box">
                <nav className="sub-gnb">
                  <ul className="fx-box">
                    <li>
                      <Link to="/myPage" className="user-name">
                        {loginMsg}
                      </Link>
                    </li>
                    {loginSts == null && (
                      <li>
                        <Link to="/login">
                          <i className="fa-regular fa-circle-user"></i>
                        </Link>
                      </li>
                    )}
                    {loginSts !== null && (
                      <li>
                        <Link to="/myPage">
                          <i className="fa-regular fa-circle-user"></i>
                        </Link>
                      </li>
                    )}
                    <li>
                      <a href="#">
                        <i
                          className="fa-solid fa-magnifying-glass"
                          onClick={searchBtn}
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fa-solid fa-cart-shopping"
                          onClick={openCart}
                        ></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="search-area">
              <div className="search-box">
                <div className="search-wrap">
                  <i
                    className="fa-solid fa-magnifying-glass fa-3x"
                    onClick={goSearchBtn}
                  ></i>
                  <input
                    id="topSearchingVal"
                    type="text"
                    placeholder="Search"
                    className="searchInput"
                    onKeyUp={enterKey}
                  />
                  <i
                    className="fa-solid fa-xmark fa-3x xbtn"
                    onClick={searchRBtn}
                  ></i>
                </div>
              </div>
            </div>

            <div className="ham-area">
              <div className="ham-box">
                <div className="ham-wrap">
                  <i
                    className="fa-solid fa-xmark fa-3x ham-xbtn"
                    onClick={closeHam}
                  ></i>
                  <ul>
                    {menu.map((v, i) => (
                      <li key={i} className="ham-list">
                        {v.single ? (
                          <>
                            <span className="sub-txt" onClick={goHamSub}>
                              {v.txt}
                            </span>
                            <div onClick={goHamSub}>
                              <span className="ham-sub-m">
                                <i className="fa-solid fa-minus fa-lg"></i>
                              </span>
                              <span className="ham-sub-p">
                                <i className="fa-solid fa-plus fa-lg"></i>
                              </span>
                            </div>
                          </>
                        ) : (
                          <Link to={v.link}>
                            <span>{v.txt}</span>
                          </Link>
                        )}

                        {v.single && (
                          <div className="ham-menu">
                            <ol className={v.bundle ? "col-3" : "col-6"}>
                              {v.single.map((v, i) => (
                                <li key={i}>
                                  <Link
                                    to={v.link}
                                    state={{
                                      category: "single",
                                      pname: v.pname,
                                    }}
                                  >
                                    {v.txt}
                                  </Link>
                                </li>
                              ))}
                            </ol>
                            {v.bundle && (
                              <ol className="col-3">
                                {v.bundle.map((v, i) => (
                                  <li key={i}>
                                    <Link
                                      to={v.link}
                                      state={{
                                        category: "bundle",
                                        pname: v.pname,
                                      }}
                                    >
                                      {v.txt}
                                    </Link>
                                  </li>
                                ))}
                              </ol>
                            )}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="gotop" onClick={gotopbtn}>
              <div className="gotopbtn">
                <i className="fa-solid fa-arrow-up fa-2x"></i>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
} /// TopArea
