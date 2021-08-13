import React, { Component } from "react";
import "./Login.css";
import { Route } from "react-router-dom";

import { connect } from "react-redux";
// // import { addName } from "../../action";
// // import { actionCreators } from "../../action";

// // const mapStateToProps = (state) => {
// //   return {
// //     names: state.names,
// //   };
// // };
// // export default connect(mapStateToProps, { updateUserName, updatePassword })(
// //   Login
// // );

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8080/getClients")
      .then((response) => response.json())
      .then((data) => console.log(data.clients));
  }
  handleStateChange(state) {
    console.log("clicked");
    this.setState({
      username: "neha",
      password: "neha",
    });
    console.log(this.username, this.password);
  }

  //   componentDidUpdate() {
  //     fetch("http://localhost:8080/getClients")
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   }

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
              // value=""
              // onChange={(e) => actionCreators.updateUserName(e.target.value)}
              required
            />
            <br />
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              // value=""
              // onChange={(e) => actionCreators.updatePassword(e.target.value)}
              required
            />
            <br />
            <Route
              render={({ history }) => (
                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    this.handleStateChange();
                    history.push("/home");
                  }}
                >
                  Login
                </button>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
