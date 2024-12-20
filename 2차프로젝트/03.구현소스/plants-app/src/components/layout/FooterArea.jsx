import { Link } from "react-router-dom";
import "../../css/footer_area.scss";

export default function FooterArea({ logoutFn }) {
  return (
    <>
      <div id="footer-area">
        <footer className="footer-area">
          <div className="footer-box">
            <div className="footer-img-box">
              <h2>@plantstotherescue.co</h2>
              <div className="ft-img-wrap">
                <ul>
                  <li>
                    <a href="">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/Instagram_post1.png"
                        }
                        alt="Instagram_post"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/Instagram_post2.png"
                        }
                        alt="Instagram_post"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/Instagram_post3.png"
                        }
                        alt="Instagram_post"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/Instagram_post4.png"
                        }
                        alt="Instagram_post"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-info-box">
              <div className="col-4 info-box">
                <h4>Information</h4>
                <ul>
                  <li>
                    <Link to="/shop">
                      <span>Shop</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <span>Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop">
                      <span>Wholesale</span>
                    </Link>
                  </li>
                  <li>
                    <a href="#" onClick={(e)=>{
                      e.preventDefault();
                      logoutFn();
                    }}>
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-4 social-box">
                <h4>Social</h4>
                <ul>
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
                </ul>
              </div>
              <div className="col-4 info-detail-box">
                <h4>Details</h4>
                <img
                  src={process.env.PUBLIC_URL + "/images/Group.png"}
                  alt="Group"
                />
                <p>
                  *These statements have not been evaluated by the Food and Drug
                  Administration. This product is not intended to diagnose,
                  treat, cure or prevent any disease.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
