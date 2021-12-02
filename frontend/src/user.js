import React from "react";
import "./user.css"
import { Link } from "react-router-dom";

const Page = () => {

    return<>
    <div class="container">
      <form class="form-1">
        <h2>Signup/Login</h2>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required />
        <span class="fgtpswd">Forgot Password</span>
        <button onClick={()=>alert("Thankyou For Login")}>Login </button>


        <p>Or SignUp Using</p>
        <div class="icons">
          <a href="https://www.facebook.com/" target="blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/" target="blank"><i class="fab fa-twitter"></i></a>
          <a href="https://mail.google.com/" target="blank"><i class="fab fa-google"></i></a>
        </div>
      
        <div class="Register">
          <span>
            <Link to="/user1" class="r1">New to Store? Create an account</Link>
          </span>
        </div>
      </form>
    </div>

    </>
    }
    export default Page