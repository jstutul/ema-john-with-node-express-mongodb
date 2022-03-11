import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const {
    password,
    setPassword,
    setEmail,
    SignUpWithEmail,
    setName,
  } = useAuth();
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const matchPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleregistration = (e) => {
    console.log("old=", password, "new=", confirmPassword);
    e.preventDefault();
    if (password !== "" && confirmPassword !== "") {
      if (password === confirmPassword) {
        SignUpWithEmail();
      } else {
        alert("password not matching");
      }
    }
  };
  return (
    <div className="login">
      <div className="form">
        <h1>Signup Page</h1>
        <form onSubmit={handleregistration}>
          <input
            onBlur={handleNameChange}
            type="text"
            className="form-control"
            placeholder="enter your name"
            required
          />
          <br />
          <input
            onBlur={handleEmailChange}
            type="email"
            placeholder="your email address"
            required
          />
          <br />
          <input
            onBlur={handlePasswordChange}
            type="password"
            placeholder="minimum 6 character"
            required
          />
          <br />
          <input
            onBlur={matchPasswordChange}
            type="password"
            placeholder="re enter password"
            required
          />
          <br />
          <input type="submit" value="Signup" />
          <p>
            Already have an Accout <Link to="/login">Signin</Link>{" "}
          </p>
          <p>------------OR----------</p>
          <button className="">Google Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
