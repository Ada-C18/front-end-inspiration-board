import { useState } from "react";

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
    addBoardCallbackFunc(formData);
  };
  return (
    <div>
      <h2>Create A New Board</h2>
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
          Preview: {formData.title} - {formData.owner}
        </p>
        <input type="submit" value="Submit" onClick={handleNewBoardSubmit} />
        <button>Hide New Board Form</button>
      </form>
    </div>
  );
};

export default NewBoardForm;
