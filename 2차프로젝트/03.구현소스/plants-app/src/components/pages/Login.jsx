import React from "react";

import "../../css/login.scss";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div id="login-area">
      <section className="login-area">
        <div className="login-wrap">
          <h2>Login</h2>
          <p>
            Don't have an account? <a href="">Sign up here.</a>
          </p>
          <form action="">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </form>
          <div className="signbtn">
            <button>
              <p>SIGN IN</p>
            </button>
          </div>
          <div className="forgot-box">

            <Link><p className="forgot">Forgot your password?</p></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
