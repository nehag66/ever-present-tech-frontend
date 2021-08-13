import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = (props) => {
  const location = useLocation();
  const [client, setClient] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setClient(location.state.props);
    setLoaded(true);
  }, []);
  //console.log(client);
  return (
    <h1>
      {loaded ? (
        <div>
          <div className="container">
            <div className="logo">Logo</div>
            <div className="form">
              <label className="login-head">Welcome {client.user.name}</label>
              <br />
              <p>As per our records, your details are as under:</p>
              <label>Name: </label>
              {client.user.name}
              <br />
              <label>Username: </label>
              {client.user.user_name}
              <br />
              <label>Email: </label>
              {client.user.email}
              <br />
            </div>
          </div>
        </div>
      ) : (
        "User didn't load yet"
      )}
    </h1>
  );
};

export default Home;
