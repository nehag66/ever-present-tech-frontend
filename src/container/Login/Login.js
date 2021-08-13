import React, { Component } from "react";
import "./Login.css";
import Button from "../../components/Button/Button";
// import { connect } from "react-redux";
// // import { addName } from "../../action";
// // import { actionCreators } from "../../action";

// import React from "react";

// const Login = (props) => {
//   fetch("http://localhost:8080/getClients")
//     .then((response) => response.json())
//     .then((data) => console.log(data));

//   //     componentDidMount() {
//   //     document.title = `You clicked ${data} times`;
//   //   }
//   return (
//     <div>
//       {/* <button onClick={() => props.addName("Chris")}>button</button>
//       {props.names.map((name) => {
//         return <div>{name}</div>;
//       })} */}
//       <div className="container">
//         <div className="logo">Logo</div>
//         <div className="form">
//           <label className="login-head">Login form</label>
//           <br />
//           <label>Username</label>
//           <input
//             type="text"
//             name="username"
//             id="username"
//             // value=""
//             // onChange={(e) => actionCreators.updateUserName(e.target.value)}
//             required
//           />
//           <br />
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             // value=""
//             // onChange={(e) => actionCreators.updatePassword(e.target.value)}
//             required
//           />
//           <br />
//           <Button />
//         </div>
//       </div>
//     </div>
//   );
// };

// // const mapStateToProps = (state) => {
// //   return {
// //     names: state.names,
// //   };
// // };
// // export default connect(mapStateToProps, { updateUserName, updatePassword })(
// //   Login
// // );
// export default Login;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fetchData;

  componentDidMount() {
    fetch("http://localhost:8080/getClients")
      .then((response) => response.json())
      .then((data) => console.log(data));
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
            <Button />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
