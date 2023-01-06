import { Outlet, Link } from "react-router-dom";

import "./LogInView.css";

// import LogInForm from "./LogInForm.js";

const LogInView = () => {
  return (
    <div className="LogInView">
      <h1> Welcome to the Hackspiration Board! </h1>
      <div id="form">
        <Outlet />
      </div>
      <Link to={`/boards`}>
        <button>I want to skip login and see the boards!</button>
      </Link>
    </div>
  );
};

export default LogInView;
