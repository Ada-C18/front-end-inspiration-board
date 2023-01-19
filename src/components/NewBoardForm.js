import { React, useState } from "react";
import "./NewBoardForm.css";
import PropTypes from "prop-types";

const INITIAL_FORM_DATA = {
  title: "",
  owner: "",
};

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const dataChangeHandler = (e) => {
    console.log("dataChangeHandler called");

    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
    //setFormData(e.target.value);
  };

  const handleNewBoardSubmit = (e) => {
    e.preventDefault();
    props.addBoardCallbackFunc(formData);
  };
  return (
    <div>
      <form onSubmit={handleNewBoardSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={dataChangeHandler}
        ></input>

        <label htmlFor="owner">Owner's Name</label>
        <input
          type="text"
          id="owner"
          name="owner"
          value={formData.owner}
          onChange={dataChangeHandler}
        ></input>

        <label htmlFor="preview"></label>
        <p>
          Preview: {formData.title} - {formData.owner}
        </p>

        <button className="button-add-board" type="submit">
          Submit New Board
        </button>
      </form>
    </div>
  );
};

NewBoardForm.propTypes = {
  addBoardCallbackFunc: PropTypes.func.isRequired,
};
export default NewBoardForm;
