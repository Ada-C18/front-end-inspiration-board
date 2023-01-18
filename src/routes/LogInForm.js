import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import "./LogInForm.css";

const kDefaultFormState = {
  name: "",
  password: "",
};

const isError = () => {
  return (
    <p className="error">
      ⛔️ The username you entered does not belong to any account.
    </p>
  );
};

const LogInForm = (props = null) => {
  const loaderData = useLoaderData();
  const [formData, setFormData] = useState(kDefaultFormState);

  const loginState = loaderData ? loaderData[0].loginState : props.loginState;
  const handleLogIn = loaderData ? loaderData[0].onLogIn : props.onLogIn;

  // console.log(loaderData);
  // console.log(loginState);
  // console.log(typeof handleLogIn);

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
          <label htmlFor="name">username</label>
          <input
            className="entry"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {loginState.repeatLogin && isError()}
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

        <button id="submit">Log In</button>
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
