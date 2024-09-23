import React, { useEffect } from "react";

// 나의 함수
import mFn from "../../js/my_function";

// 제이쿼리
import $ from "jquery";

// 데이터
import { cData } from "../../data/sub_ahsoka_data";

// CSS
import "../../css/as_character.scss";

console.log("캐릭터 데이터", cData);

function AsCharacter() {
  
  useEffect(()=>{
      const cPage = mFn.qs("#character-page");
      const cPageTitle = mFn.qs("#character-page .as-title");
      const cPageDesc = mFn.qs("#character-page .as-desc");
      const cPageImg = mFn.qs("#character-page .img-box");
    
      console.log("캐릭터 페이지:", cPage);
    
      const showBox = mFn.qsa(".cbox li");
    
      showBox.forEach((x) => {
        x.onclick = () => {
          let key = x.getAttribute("data-key");
          let selRec = cData.some((z) => {
            // console.log(z.idx);
            if (z.idx === key) {
              // 클릭된 idx와 일치하는 배열값을 찾음!
              cPageTitle.innerText = z.name;
              cPageDesc.innerText = z.desc;
              cPageImg.innerHTML = `<img src={process.env.PUBLIC_URL +"/images/sub_ahsoka_images/characters/${z.idx}.jpeg"} alt="images"/>`;
              return;
            }
          });
          console.log(key, ":", selRec);
    
          cPage.style.display = "block";
        }; /// onclick ///
      }); ////// forEach //////
    
      mFn.qs(".close-btn").onclick = () => {
        cPage.style.display = "none";
      };
  },[]);

  // 코드 리턴 /////////////////////
  return (
    <>
      <section className="page">
        <div id="charater-area" className="as-section-top">
          <div className="content-box">
            <div className="tit-box fx-box">
              <h3 className="title-sub">Charater</h3>
            </div>
            <span className="under-line"></span>
            <div className="cbox scAct">
              {/* 캐릭터 리스트 */}
              <ul>
                {cData.map((v, i) => (
                  <li key={i}
                  data-key={v.idx}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/images/sub_ahsoka_images/characters/${v.idx}.jpeg`
                      }
                      alt="character"
                    />
                    <h3>{v.name}</h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- 캐릭터 설명 박스 --> */}
      <aside id="character-page" className="show">
        <div className="content-box fx-box">
          <div className="img-box col-6"></div>
          <div className="desc-box col-6">
            <h2 className="as-title">Name</h2>
            <div className="as-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <span className="close-btn"></span>
        </div>
      </aside>
    </>
  );
}

export default AsCharacter;
