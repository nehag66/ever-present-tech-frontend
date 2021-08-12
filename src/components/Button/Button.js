import { Route } from "react-router-dom";
import "./Button.css";

const Button = () => (
  <Route
    render={({ history }) => (
      <button
        className="btn"
        type="button"
        onClick={() => {
          history.push("/home");
        }}
      >
        Login
      </button>
    )}
  />
);

export default Button;
