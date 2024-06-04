import { Link } from "react-router-dom";
import { menu } from "../data/gnb";

export default function TopArea() {
  return (
    <>
      <div id="top-area">
        <header className="top-area">
          <div className="inbox">
            <div className="gnb-box">
              <div className="col-4 fx-box">
                <nav className="gnb-menu">
                  <ul className="gnb-smenu">
                    {menu.map((v, i) => (
                      <li key={i}>
                        {v.sub ? (
                          <a href="#">{v.txt}</a>
                        ) : (
                          <Link to={v.link}>{v.txt}</Link>
                        )}
                        {
                          // 서브 메뉴 데이터가 있으면 하위 그리고
                          v.sub && (
                            <div className="smenu">
                              <ol>
                                {v.sub.map((v, i) => (
                                  <li key={i}>
                                    <Link to={v.link} />
                                    {v.txt}
                                  </li>
                                ))}
                              </ol>
                            </div>
                          )
                        }
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="col-4">
                <div className="logo-box">
                  <img src="./images/Pttr_Logo_Brown.png" alt="main-logo" />
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
