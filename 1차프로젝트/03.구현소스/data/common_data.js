const comData = {
  topArea: `
      <header class="top-area">
        <div class="inbox">
          <div class="cont-box">
            <!-- 1-1-1.로고 -->
            <div class="col-2">
              <h1 class="mlogo">
                <a href="./index.html">
                  <img src="./images/main_logo.png" alt="메인홍루이젠로고" />
                </a>
                
              </h1>
            </div>
            <!-- 1-1-2.GNB -->
            <div class="col-7">
              <!-- GNB메뉴 -->
              <nav class="gnb-menu">
                <ul>
                  <li>
                    <a href="./brandstory.html">브랜드소개</a>
                    <!-- 서브메뉴 -->

                    <div class="smenu">
                      <div class="left-swrap">
                        <div class="swrap">
                          <h2>브랜드소개</h2>
                          <div class="dash"></div>
                          <ol>
                            <li>
                              <a href="./brandstory.html">홍루이젠 소개</a>
                            </li>
                            <li>
                              <a href="">브랜드철학</a>
                            </li>
                            <li>
                              <a href="">히스토리</a>
                            </li>
                          </ol>
                        </div>
                      </div>

                      <div class="swrap-img img01"></div>
                    </div>
                  </li>
                  <li>
                    <a href="">브랜드관</a>
                  </li>
                  <li>
                    <a href="">메뉴</a>
                    <div class="smenu">
                      <div class="left-swrap">
                        <div class="swrap">
                          <h2>메뉴</h2>
                          <div class="dash"></div>
                          <ol>
                            <li>
                              <a href="">전체</a>
                            </li>
                            <li>
                              <a href="">신제품</a>
                            </li>
                            <li>
                              <a href="">소프트 샌드위치</a>
                            </li>
                            <li>
                              <a href="">갓군샌</a>
                            </li>
                            <li>
                              <a href="">프레시 샌드위치</a>
                            </li>
                            <li>
                              <a href="">디저트</a>
                            </li>
                            <li>
                              <a href="">음료</a>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div class="swrap-img img02"></div>
                    </div>
                  </li>
                  <li>
                    <a href="">매장안내</a>
                    <div class="smenu">
                      <div class="left-swrap">
                        <div class="swrap">
                          <h2>매장안내</h2>
                          <div class="dash"></div>
                          <ol>
                            <li>
                              <a href="">매장 찾기</a>
                            </li>
                            <li>
                              <a href="">단체주문</a>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div class="swrap-img img03"></div>
                    </div>
                  </li>
                  <li>
                    <a href="">커뮤니티</a>
                    <div class="smenu">
                      <div class="left-swrap">
                        <div class="swrap">
                          <h2>커뮤니티</h2>
                          <div class="dash"></div>
                          <ol>
                            <li>
                              <a href="">홍루이젠 소식</a>
                            </li>
                            <li>
                              <a href="">프레스센터</a>
                            </li>
                            <li>
                              <a href="">이벤트</a>
                            </li>
                            <li>
                              <a href="">고객의 소리</a>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div class="swrap-img img04"></div>
                    </div>
                  </li>
                  <li>
                    <a href="">쇼핑하기</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-3">
              <nav class="right-menu">
                <ul>
                  <li>
                    <a href="">LOGIN</a>
                  </li>
                  <li>
                    <a href="">JOIN</a>
                  </li>
                  <li>
                    <a href="">프랜차이즈</a>
                  </li>
                  <li>
                    <a>
                      <img
                        src="./images/icon_ham.png"
                        alt="메뉴버튼"
                        class="open-ham"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    `,
  // 햄메뉴
  hamArea: `
      <div class="ham-menu">
        <img
          src="./images/ham_close.png"
          alt="햄버거버튼 메뉴"
          class="close-ham"
        />
        <a href="./index.html">
          <img src="./images/main_logo.png" alt="메인로고" />
        </a>

        <div class="menu-list">
          <div class="mwrap">
            <ul>
              <li>
                <h2>브랜드소개</h2>
                <ul>
                  <li>
                    <a href="#">홍루이젠 소개</a>
                  </li>
                  <li>
                    <a href="#">브랜드 철학</a>
                  </li>
                  <li>
                    <a href="#">히스토리</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="mwrap">
            <ul>
              <li>
                <h2>브랜드관</h2>
                <ul>
                  <li>
                    <a href="#">브랜드관</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="mwrap">
            <ul>
              <li>
                <h2>메뉴</h2>
                <ul>
                  <li>
                    <a href="#">전체</a>
                  </li>
                  <li>
                    <a href="#">신제품</a>
                  </li>
                  <li>
                    <a href="#">소프트 샌드위치</a>
                  </li>
                  <li>
                    <a href="#">프레시 샌드위치</a>
                  </li>
                  <li>
                    <a href="#">갓군샌</a>
                  </li>
                  <li>
                    <a href="#">디저트</a>
                  </li>
                  <li>
                    <a href="#">음료</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="mwrap">
            <ul>
              <li>
                <h2>매장안내</h2>
                <ul>
                  <li>
                    <a href="#">매장찾기</a>
                  </li>
                  <li>
                    <a href="#">단체주문</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="mwrap">
            <ul>
              <li>
                <h2>커뮤니티</h2>
                <ul>
                  <li>
                    <a href="#">홍루이젠소식</a>
                  </li>
                  <li>
                    <a href="#">프레스센터</a>
                  </li>
                  <li>
                    <a href="#">이벤트</a>
                  </li>
                  <li>
                    <a href="#">고객의 소리</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="mwrap">
            <ul>
              <li>
                <h2>쇼핑하기</h2>
                <ul>
                  <li>
                    <a href="">쇼핑하기</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,
  // 배너
  footerBanArea: `
      <footer class="footer-ban-area">
        <div class="cont-box">
          <div class="col-12">
            <div class="ban-txt">
              <p>
                <img src="./images/sand_l.png" alt="홍루이젠 텍스트" />
                SIMPLE·SWEET·SOFT SANDWICH HUNG RUI CHEN
              </p>
              <p>
                <img src="./images/sand_l.png" alt="홍루이젠 텍스트" />
                SIMPLE·SWEET·SOFT SANDWICH HUNG RUI CHEN
              </p>
            </div>
          </div>
        </div>
      </footer>
    `,
  footerArea: `
      <footer class="footer-area inbox">
        <!-- <h2 class="temp-tit">8. 하단영역</h2> -->
        <div class="footer-box">
          <div class="col-12 cont-box foot-wrap">
            <div class="foot-box">
              <ul>
                <li><a href="#">브랜드 소개</a></li>
                <li><a href="#">브랜드관</a></li>
                <li><a href="#">매장안내</a></li>
              </ul>
              <address>
                (주)타이웨이 대표이사 : 송원섭<br />
                주소 : 경기도 고양시 덕양구 삼송로 12 반도유스퀘어 701,702호
                <br />사업자등록번호 : 730-86-00779 가맹문의 대표번호 :
                1566-8025
              </address>
            </div>
            <div class="foot-box foot-logo">
              <img src="./images/foot_logo.png" alt="" />
            </div>
            <div class="foot-box right-ftbox">
              <ul>
                <li><a href="#">메뉴</a></li>
                <li><a href="#">커뮤니티</a></li>
                <li><a href="#">쇼핑하기</a></li>
              </ul>
              <ul>
                <li>
                  <a href="#"><img src="./images/insta.png" alt="" /></a>
                </li>
                <li>
                  <a href="#"><img src="./images/facebook.png" alt="" /></a>
                </li>
                <li>
                  <a href="#"><img src="./images/youtube.png" alt="" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    `,
};

export default comData;