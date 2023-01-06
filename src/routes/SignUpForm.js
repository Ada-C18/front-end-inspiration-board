import { Link } from "react-router-dom";

import "./SignUpForm.css";

const SignUpForm = () => {
  return (
    <>
      <p>I am the sign up form</p>
      <p>
        Already have an account? <Link to={`/login`}>Log in</Link>
      </p>
    </>
  );
};

export default SignUpForm;
