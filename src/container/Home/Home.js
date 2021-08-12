import React from "react";

const Home = (props) => {
  return (
    <div>
      <div className="container">
        <div className="logo">Logo</div>
        <div className="form">
          <label className="login-head">Welcome</label>
          <br />
          <pr>As per our records, your details are as under:</pr>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
