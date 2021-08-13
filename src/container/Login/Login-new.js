import React, { Component } from "react";
import "./Login.css";

class LoginNew extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      authenticated: false,
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/getClients")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.clients);
        this.setState({ client: data.clients });
        console.log("IsSet?:");
        console.log(this.state.clients);
      });
  }

  // onClickHandler(e) {
  // e.preventDefault();
  // console.log("Username Entered:", username);
  // console.log("Password Entered:", password);
  // }
  onClickHandler = (e) => {
    e.preventDefault();
    console.log("Username Entered:", this.state.username);
    console.log("Password Entered:", this.state.password);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="logo">Logo</div>
          <div className="form">
            <label className="login-head">Login form</label>
            <br />
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => this.setState({ username: e.target.value })}
              required
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => this.setState({ password: e.target.value })}
              required
            />

            <br />
            <button className="btn" type="button" onClick={this.onClickHandler}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginNew;
