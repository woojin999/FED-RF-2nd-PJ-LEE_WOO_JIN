import { Link } from "react-router-dom";
import { menu } from "../data/gnb";

import "../../css/top_area.scss";

export default function TopArea() {
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
                        {v.single ? (
                          <a href="#">{v.txt}</a>
                        ) : (
                          <Link to={v.link}>{v.txt}</Link>
                        )}
                        {v.single && (
                          <div className="smenu">
                            <ol className={v.bundle ? "col-3" : "col-6"}>
                              {v.single.map((v, i) => (
                                <li key={i}>
                                  <Link to={v.link} state={{category:"single",pname:v.pname}}>{v.txt}</Link>
                                </li>
                              ))}
                            </ol>
                            {v.bundle && (
                              <ol className="col-3">
                                {v.bundle.map((v, i) => (
                                  <li key={i}>
                                    <Link to={v.link} state={{category:"bundle",pname:v.pname}}>{v.txt}</Link>
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
                                <img src="./images/Card_PDP.png" />
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
                    <img src="./images/Pttr_Logo_Brown.png" alt="main-logo" />
                  </Link>
                </div>
              </div>
              <div className="sub-gnb-box col-4 fx-box">
                <nav className="sub-gnb">
                  <ul className="fx-box">
                    <li>
                      <a href="">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa-brands fa-tiktok"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa-brands fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa-regular fa-circle-user"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
} /// TopArea
