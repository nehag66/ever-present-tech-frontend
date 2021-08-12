import "./App.css";
import Login from "./container/Login/Login";
import Home from "./container/Home/Home";
import { Route, Switch } from "react-router-dom";

function App() {
  let routes = (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
  return <div className="App">{routes}</div>;
}

export default App;
