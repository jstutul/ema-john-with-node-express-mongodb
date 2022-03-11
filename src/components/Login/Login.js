import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const { loginWithEmail, password, signInUsingGoogle, setPassword, setEmail } =
    useAuth();
  const location = useLocation();
  const history = useNavigate();
  console.log("came from", location.state?.form);
  const redirect_uri = location.state?.form.pathname || "/shop";
  console.log(redirect_uri);
  const cleanfields = () => {
    const emailField = document.getElementById("emailfield");
    const passField = document.getElementById("passwordfield");
    emailField.value = "";
    passField.value = "";
  };
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      const user = result.user;
      // setUser(user);
      console.log(user);
      history(redirect_uri);
    });
  };
  const emailPasswordSignIn = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      return;
    } else {
      loginWithEmail();
      cleanfields();
    }
  };
  const handleNameChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="login">
      <div className="form">
        <h1>Login Page</h1>
        <form action="" onSubmit={emailPasswordSignIn}>
          <input
            onBlur={handleNameChange}
            type="email"
            id="emailfield"
            placeholder="your email address"
          />
          <br />
          <input
            onBlur={handlePasswordChange}
            type="password"
            id="passwordfield"
            placeholder="minimum 6 character"
          />
          <br />
          <input type="submit" value="Login" />
          <p>
            new in ema john? <Link to="/register">Create Account</Link>{" "}
          </p>
          <p>------------OR----------</p>
        </form>
        <button onClick={handleGoogleLogin}>Google Login</button>
      </div>
    </div>
  );
};

export default Login;
