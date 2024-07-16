import React, { useContext, useState } from "react";
import MyInfo from "../modules/MyInfo";
import MyPost from "../modules/MyPost";
import MyCart from "../modules/MyCart";

import { dCon } from "../modules/dCon";

import "../../css/my_page.scss";

function MyPage(props) {
  const myCon = useContext(dCon);
  const [myMenu, setmyMenu] = useState("myinfo");
  return (
    <div id="mypage-area">
      <section className="mypage-area">
        <div className="mypage-wrap">
          <h2>MY PAGE</h2>
          <div className="my-page-cont">
            <div className="mp-list col-3">
              <ul>
                <li>
                  <span onClick={() => setmyMenu("myinfo")}>
                    My Information
                  </span>
                </li>
                <li>
                  <span onClick={() => setmyMenu("mypost")}>My Post</span>
                </li>
                <li>
                  <span onClick={() => setmyMenu("mycart")}>My Cart</span>
                </li>
                <li>
                  <span onClick={() => myCon.logoutFn()}>Logout</span>
                </li>
              </ul>
            </div>
            <div className="mp-detail col-9">
              {myMenu == "myinfo" ? (
                <MyInfo />
              ) : myMenu == "mypost" ? (
                <MyPost />
              ) : myMenu == "mycart" ? (
                <MyCart />
              ) : (
                <MyInfo />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyPage;
