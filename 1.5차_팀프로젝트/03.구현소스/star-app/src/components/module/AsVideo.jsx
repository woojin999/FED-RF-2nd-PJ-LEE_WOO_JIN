import React from "react";

// 나의 함수
import mFn from "../../js/my_function";

// 비디오 영역 CSS
import "../../css/as_video.scss";

function AsVideo() {
  // 비디오 영역 아이프레임 src 변경 ///////////////////////////
  const slidePeek = mFn.qsa(".slide-peek-box li");
  const ifr = mFn.qs("#ifr");

  console.log("슬라이드 픽:", slidePeek, "\n 동영상:", ifr);

  const movieId = {
    Trailer: "J_1EXWNETiI",
    "Masters and Apprentices": "UTqPkjk0GLU",
    Phenomenon: "dp-9AoWxchE",
    cat: "uSqsyC780OY",
  };

  slidePeek.forEach((ele, idx) => {
    ele.onclick = () => {
      let txt = ele.querySelector("img").getAttribute("alt");

      ifr.setAttribute(
        "src",
        `https://www.youtube.com/embed/${movieId[txt]}?autoplay=1`
      );

      slidePeek.forEach((x, i) => {
        if (i === idx) {
          x.parentElement.classList.add("on");
        } /// if ///
        else {
          x.parentElement.classList.remove("on");
        } /// else ///
      }); /// forEach ///
    }; /// onclick ///
  }); ////// forEach //////

  return (
    <>
      <div className="page">
        <section id="video-area" className="as-section-top">
          <div className="tit-box fx-box">
            <h3 className="title-sub">Video</h3>
          </div>
          <span className="under-line"></span>
          <div className="scAct">
            <div className="video-box col-12">
              {/* <!-- 유튜브 아이프레임 --> */}
              <iframe src="https://www.youtube.com/embed/J7-zia4oHuk"></iframe>
            </div>
            {/* <!-- 슬라이드 픽 --> */}
            <div className="slide-peek-box">
              <div className="slider-wrap col-8">
                <ul>
                  <li>
                    <div className="img-box">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/images/sub_ahsoka_images/mv01.jpeg`
                        }
                        alt="Trailer"
                      />
                    </div>
                    <div className="title-box">
                      <h3>Ahsoka | Teaser Trailer | Disney+</h3>
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/images/sub_ahsoka_images/mv02.jpeg`
                        }
                        alt="Masters and Apprentices"
                      />
                    </div>
                    <div className="title-box">
                      <h3>Masters and Apprentices | Ahsoka | Disney+</h3>
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/images/sub_ahsoka_images/mv03.avif`
                        }
                        alt="Phenomenon"
                      />
                    </div>
                    <div className="title-box">
                      <h3>Phenomenon | Ahsoka | Disney+</h3>
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/images/sub_ahsoka_images/mv04.jpeg`
                        }
                        alt="Sabine’s Loth-Cat"
                      />
                    </div>
                    <div className="title-box">
                      <h3>Sabine’s Loth-Cat | Star Wars Lofi | #Ahsoka</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AsVideo;
