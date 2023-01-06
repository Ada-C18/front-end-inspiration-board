import { Outlet, Link, useLocation } from "react-router-dom";

import "./LogInView.css";

import LogInForm from "./LogInForm.js";

const LogInView = () => {
  const location = useLocation();

  return (
    <div className="LogInView">
      <h1> Welcome to the Hackspiration Board! </h1>
      <h2>
        View, create, and collaborate on inspiration boards with your friends!
      </h2>
      <div id="form">
        {location.pathname === "/" ? <LogInForm /> : <Outlet />}
      </div>
      <Link to={`/boards`}>
        <button>I want to skip login and see the boards!</button>
      </Link>
    </div>
  );
};

export default LogInView;
