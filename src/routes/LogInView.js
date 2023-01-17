import { Outlet, Link, useLocation, useLoaderData } from "react-router-dom";

import "./LogInView.css";

import LogInForm from "./LogInForm.js";

const LogInView = () => {
  const location = useLocation();
  const loaderData = useLoaderData();
  const { loginState, onLogIn } = loaderData[0];

  return (
    <div className="LogInView">
      <h1> Welcome to Hackspiration Board! </h1>
      <h2>
        View, create, and collaborate on inspiration boards with your friends!
      </h2>
      <div id="form">
        {location.pathname === "/" ? (
          <LogInForm loginState={loginState} onLogIn={onLogIn} />
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
