import React, { Component } from "react";
import "./Login.css";

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {
    console.log("button clicked");
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
            <input type="text" />
            <br />
            <label>Username</label>
            <input type="text" />
            <br />
            <label>Password</label>
            <input type="password" />
            <br />
            <button className="btn">Login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginBox;

{
  /* //   <div className="full-container">
//         <div className="left-container"> HELOO</div>
//         <div className="right-container">
//           <div className="header">Login</div>
//           <div className="box">
//             <div className="input-group">
//               <label htmlFor="username">Username</label>
//               <input */
}
{
  /* //                 type="text"
//                 name="username"
//                 className="login-input"
//                 placeholder="Username"
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="password">Password</label>
//               <input */
}
{
  /* //                 type="password"
//                 name="password"
//                 className="login-input"
//                 placeholder="Password"
//               />
//             </div>

//             <button */
}
{
  /* //               type="button"
//               className="login-btn"
//               onClick={this.submitLogin.bind(this)}
//             >
//               Login
//             </button>
//           </div> */
}
{
  /* //         </div>
//       </div> */
}
