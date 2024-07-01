import React, { useLayoutEffect } from "react";

import "../../css/member.scss";
import { Link } from "react-router-dom";

function Member(props) {
  return (
    <div id="member-area">
      <section className="member-area">
        <div className="member-wrap">
          <h2>Create Account</h2>
          <div className="signtxt">
            <p>Already have an account? &nbsp;</p>
          </div>
          <div className="signtxt">
            <p className="signup">
              <Link to="/login">Sign in here.</Link>
            </p>
          </div>
          <form action="">
            <ul>
              <li>
                <input type="text" placeholder="Id" />
              </li>
              <li>
                <input type="password" placeholder="Password" />
              </li>
              <li>
                <input type="password" placeholder="Password Check" />
              </li>
              <li>
                <input type="text" placeholder="Name" />
              </li>
              <li>
                <input type="email" placeholder="Email" />
              </li>
            </ul>
          </form>
          <div className="signbtn">
            <button>
              <p>CREATE</p>
            </button>
          </div>
          <div className="forgot-box">
            <p className="forgot">Forgot your password?</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Member;
