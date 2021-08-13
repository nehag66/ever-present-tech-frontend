import React from "react";

const Client1 = () => {
  return (
    <div>
      <div className="logo">{clients[1].logo}</div>
      <div className="form">
        <label className="login-head">{clients[1].login_label}</label>
        <br />
        <label>{clients[1].userName_label}</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label>{clients[1].password_label}</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button className="btn" type="submit" onClick={onClickHandler}>
          {clients[1].signin_button}
        </button>
      </div>
    </div>
  );
};

export default Client1;
