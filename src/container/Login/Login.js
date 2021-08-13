import React, { useState, useEffect } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [clients, setClients] = useState([]);
  const [authentication, setAuthentication] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/getClients")
      .then((response) => response.json())
      .then((data) => {
        setClients(data.clients);
      });
  }, []);

  const onClickHandler = (e) => {
    e.preventDefault();
    //console.log("Username Entered:", username);
    //console.log("Password Entered:", password);
    for (let i = 0; i < clients.length; i++) {
      if (
        clients[i].user.user_name === username &&
        clients[i].user.password === password
      ) {
        //console.log("Matched!!");
        setAuthentication(true);
        history.push({
          pathname: "/home",
          state: { props: clients[i] },
        });
        break;
      } else {
        console.log("Authentication Failed");
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="logo">Logo</div>
        <div className="form">
          <label className="login-head">Login</label>
          <br />
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button className="btn" type="submit" onClick={onClickHandler}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
