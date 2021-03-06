import React, { Fragment, useRef, useState, useEffect } from "react";
import "./user.css";
// import Loader from "../layout/Loader/Loader";
import { Link ,useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "./redux/User/userAction";
// import { useAlert } from "react-alert";

const LoginSignUp = () => {

  const history=useHistory();
  const dispatch = useDispatch();
  // const alert = useAlert();

  const { message,error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    dispatch(register({name,email,password}));
  };

  const registerDataChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
  };

//   const redirect = location.search ? location.search.split("=")[1] : "/account";

  useEffect(() => {
    if (error) {
      // alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      // alert.success(message)
      // alert.success("Welcome To Tasty Bites")
      console.log("authenticated")
      history.push('/');
    }
  }, [dispatch, error, isAuthenticated]);

  const switchTabs = (e, tab) => {
    if (tab === "login") {
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");

      registerTab.current.classList.remove("shiftToNeutralForm");
      loginTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register") {
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");

      registerTab.current.classList.add("shiftToNeutralForm");
      loginTab.current.classList.add("shiftToLeft");
    }
  };

  return (
    <Fragment>
      {loading ? (
        <h2>loading..</h2>
      ) : (
        <Fragment>
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  {/* <MailOutlineIcon /> */}
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  {/* <LockOpenIcon /> */}
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                {/* <Link to="/password/forgot">Forget Password ?</Link> */}
                <input type="submit" value="Login" className="loginBtn" />
              </form>
              <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="signUpName">
                  {/* <FaceIcon /> */}
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  {/* <MailOutlineIcon /> */}
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  {/* cd */}
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>

                {/* <div id="registerImage">
                  <img src={avatarPreview} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={registerDataChange}
                  />
                </div> */}
                <input type="submit" value="Register" className="signUpBtn" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginSignUp;









































// import React from "react";
// import "./user.css"


// const Page = () => {

//     return<>
//     <div class="container">
//       <form class="form-1">
//         <h2>Sign-in</h2>
//         <label for="name">Name</label>
//         <input type="name" name="name" id="name" required />
//         <label for="email">Email</label>
//         <input type="email" name="email" id="email" required />
//         <label for="password">Password</label>
//         <input type="password" name="password" id="password" required />
//         <button >Sign-in</button>


//         <p>Or SignUp Using</p>
//         <div class="icons">
//           <a href="https://www.facebook.com/" target="blank"><i class="fab fa-facebook-f"></i></a>
//           <a href="https://twitter.com/" target="blank"><i class="fab fa-twitter"></i></a>
//           <a href="https://mail.google.com/" target="blank"><i class="fab fa-google"></i></a>
//         </div>
//       </form>
//     </div>

//     </>
//     }
//     export default Page