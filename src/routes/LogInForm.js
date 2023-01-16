import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import "./LogInForm.css";

const kDefaultFormState = {
  name: "",
  password: "",
};

const isError = () => {
  return (
    <p class="error">
      ⛔️ The username you entered does not belong to any account.
    </p>
  );
};

const LogInForm = (props = null) => {
  const loaderData = useLoaderData();
  const [formData, setFormData] = useState(kDefaultFormState);

  const logState = loaderData ? loaderData.logState : props.logState;
  const handleLogIn = loaderData ? loaderData.onLogIn : props.onLogIn;

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = { ...formData, [fieldName]: fieldValue };

    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogIn(formData);
    setFormData(kDefaultFormState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Username</label>
          <input
            className="entry"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {logState.tryAgain && isError}
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
        <div>
          <input id="submit" type="submit" value="Log In" />
        </div>
      </form>
      <p>
        Don't have an account?{" "}
        <Link id="slink" to={`/signup`}>
          Sign up now!
        </Link>
      </p>
    </>
  );
};

export default LogInForm;
