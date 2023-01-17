import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import "./SignUpForm.css";

const kDefaultFormState = {
  name: "",
  password: "",
};

const isError = () => {
  return (
    <p className="error">⛔️ Username already taken. Please try another.</p>
  );
};

const SignUpForm = () => {
  const loaderData = useLoaderData();
  const [formData, setFormData] = useState(kDefaultFormState);

  const { loginState, handleSignUp = loaderData[0].onSignUp } = loaderData[0];

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = { ...formData, [fieldName]: fieldValue };

    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignUp(formData);
    setFormData(kDefaultFormState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">username (not case-sensitive)</label>
          <input
            className="entry"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {loginState.tryAgain && isError()}
        {/* <div>
          <label htmlFor="password">Password</label>
          <input
            className="entry"
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div> */}

        <button id="submit">Sign Up!</button>
      </form>
      <p>
        Already have an account?{" "}
        <Link id="loginLink" to={`/login`}>
          Log in
        </Link>
      </p>
    </>
  );
};

export default SignUpForm;
