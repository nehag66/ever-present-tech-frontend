import React, { useState, useEffect } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getClients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //setClients(data);
        setClients(data.clients.id);
        console.log(clients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [clients]);

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log("Username Entered:", username);
    console.log("Password Entered:", password);
    console.log(typeof clients);
    history.push("/home");
    // clients.map((client) => {
    //   console.log(client);
    //   if (
    //     client.user.user_name === username &&
    //     client.user.password === password
    //   ) {
    //     console.log("Matched!!");
    //   } else {
    //     console.log("Failed chala de");
    //   }
    //
    // });
  };

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
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
