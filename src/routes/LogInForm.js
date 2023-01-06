import { Link } from "react-router-dom";

import "./LogInForm.css";

const LogInForm = () => {
  return (
    <>
      <p>I am the login form</p>
      <p>
        Don't have an account? <Link to={`/signup`}>Sign up now!</Link>
      </p>
    </>
  );
};

export default LogInForm;
