import { Link, useNavigate } from "react-router-dom";
import { menu } from "../data/gnb";

import $ from "jquery";

import "../../css/top_area.scss";

export default function TopArea() {
  const searchBtn = (e) => {
    e.preventDefault();
    $(".search-area").addClass("on");
    $(".searchInput").val("").focus();
  };
  const searchRBtn = () => {
    $(".search-area").removeClass("on");
  };

  const goNav = useNavigate();

  const enterKey = (e) =>{
    if (e.key == "Enter") {
      let txt = $(e.target).val().trim();
      if (txt != ''){
        goSearch(txt);
        $(".search-area").removeClass("on");
      }
    }
  }

  const goSearchBtn = () => {
      let txt = $("#topSearchingVal").val().trim();
      if (txt != "") {
        goSearch(txt);
        $(".search-area").removeClass("on");
      }
    
  };

  const goSearch = (txt) => {
    console.log("검색",txt);
    goNav("search",{state:{keyword:txt}})
  }


  return (
    <>
      <div id="top-area">
        <header className="top-area">
          <div className="">
            <div className="gnb-box">
              <div className="col-4">
                <nav className="gnb-menu">
                  <ul className="gnb-smenu fx-box">
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
                                  src={v.video}
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                ></video>
                              ) : (
                                <img src="/images/Card_PDP.png" />
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
                    <img src="/images/Pttr_Logo_Brown.png" alt="main-logo" />
                  </Link>
                </div>
              </div>
              <div className="sub-gnb-box col-4 fx-box">
                <nav className="sub-gnb">
                  <ul className="fx-box">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-tiktok"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <Link to="/login">
                        <i className="fa-regular fa-circle-user"></i>
                      </Link>
                    </li>
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
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="search-area">
              <div className="search-box">
                <div className="search-wrap">
                  <i className="fa-solid fa-magnifying-glass fa-3x"
                  onClick={goSearchBtn}></i>
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
          </div>
        </header>
      </div>
    </>
  );
} /// TopArea
