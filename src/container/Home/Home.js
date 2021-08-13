import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("http://localhost:8080/getClients")
      .then((response) => response.json())
      .then((data) => console.log(data.clients));
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="logo">Logo</div>
          <div className="form">
            <label className="login-head">Welcome</label>
            <br />
            <p>As per our records, your details are as under:</p>
            <label>Name</label>
            <input type="text" required />
            <br />
            <label>Username</label>
            <input type="text" required />
            <br />
            <label>Password</label>
            <input type="password" required />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
