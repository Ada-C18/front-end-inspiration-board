import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import "./SignUpForm.css";

const kDefaultFormState = {
  name: "",
  password: "",
};

const SignUpForm = () => {
  const handleLogIn = useLoaderData();
  const [formData, setFormData] = useState(kDefaultFormState);

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
          <input id="submit" type="submit" value="Sign Up!" />
        </div>
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
