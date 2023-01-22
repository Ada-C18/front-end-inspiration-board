import { useState } from "react";
import PropTypes from "prop-types";
import "./BoardForm.css";

/* 
title
owner's name 
preview: title - owner's name 
submit button 
hide new board form button 
*/

const INITIAL_FORM_DATA = {
  title: "",
  owner: "",
};

const NewBoardForm = ({ addBoardCallbackFunc }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formDisplay, setFormDisplay] = useState(true);

  const handleClick = (e) => setFormDisplay((current) => !current);

  const handleChange = (e) => {
    console.log("handle change called");

    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    console.log(newFormData);
    setFormData(newFormData);
  };

  const handleNewBoardSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    addBoardCallbackFunc(formData);
  };

  return (
    <div>
      <h2>Create A New Board</h2>
      {formDisplay && (
        <form>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          ></input>
          <label htmlFor="owner">Owner's Name</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
          ></input>
          <p>
            Preview: {formData.title} {formData.title && '-'} {formData.owner}
          </p>
          <input
            type="submit"
            value="Submit"
            onClick={handleNewBoardSubmit}
            disabled={!formData.title || !formData.owner}
          />
        </form>
      )}
      <button className="hideBoard" onClick={handleClick}>
        {formDisplay ? "Hide New Board Form" : "Show New Board Form"}
      </button>
    </div>
  );
};

NewBoardForm.propTypes = {
  addBoardCallbackFunc: PropTypes.func.isRequired,
};
export default NewBoardForm;
