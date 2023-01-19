import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState({ title: "", owner: "" });

  const handleChange = (e) => {
    const NewFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(NewFormData);
  };

  const handleNewBoardSubmit = (e) => {
    e.preventDefault();
    props.addNewBoardCallback(formData);
  };

  return (
    <form onSubmit={handleNewBoardSubmit}>
      <label className="input-label" htmlFor="title">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label className="input-label" htmlFor="owner">
        Owner
      </label>
      <input
        type="text"
        id="owner"
        name="owner"
        value={formData.owner}
        onChange={handleChange}
      />
      <p>
        Preview: {formData.title} - {formData.owner}
      </p>
      <input id="button" type="submit" value="Add board" />
    </form>
  );
};

NewBoardForm.propTypes = {
  addNewBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;
