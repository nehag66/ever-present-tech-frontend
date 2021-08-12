import React, { Component } from "react";
import "./Login.css";
import Button from "../../components/Button/Button";

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="logo">Logo</div>
          <div className="form">
            <label className="login-head">Login form</label>
            <br />
            <label>Name</label>
            <input type="text" required />
            <br />
            <label>Username</label>
            <input type="text" required />
            <br />
            <label>Password</label>
            <input type="password" required />
            <br />
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginBox;
