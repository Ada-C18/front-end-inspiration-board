import { Outlet, Link, useLocation, useLoaderData } from "react-router-dom";

import "./LogInView.css";

import LogInForm from "./LogInForm.js";

const LogInView = () => {
  const location = useLocation();
  const { logState, onLogIn } = useLoaderData();

  return (
    <div className="LogInView">
      <h1> Welcome to Hackspiration Board! </h1>
      <h2>
        View, create, and collaborate on inspiration boards with your friends!
      </h2>
      <div id="form">
        {location.pathname === "/" ? (
          <LogInForm logState={logState} onLogIn={onLogIn} />
        ) : (
          <Outlet />
        )}
      </div>
      <Link to={`/boards`}>
        <button>I want to skip login and see the boards!</button>
      </Link>
    </div>
  );
};

export default LogInView;
