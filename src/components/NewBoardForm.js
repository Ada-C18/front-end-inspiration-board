import React, { useState } from "react";
import "./NewBoardForm.css";
import PropTypes from "prop-types";

const INITIAL_FORM_DATA = {
  title: "Type Title here",
  owner: "Type Owner name here",
};

const NewBoardForm = ({ addBoardFunc }) => {
  const [boardFormData, setBoardFormData] = useState(INITIAL_FORM_DATA);

  const [titlePlaceholder, setTitlePlaceholder] = useState(
    INITIAL_FORM_DATA.title
  );
  const [ownerPlaceholder, setOwnerPlaceholder] = useState(
    INITIAL_FORM_DATA.owner
  );

  const handleChange = (e) => {
    console.log(`handle change called`);
    console.log(
      `Target name: ${e.target.name} Target value: ${e.target.value}`
    );

    const newBoardData = {
      ...boardFormData,
      [e.target.name]: e.target.value,
    };
    setBoardFormData(newBoardData);
  };

  const handleNewBoardSubmit = (e) => {
    e.preventDefault(); //prevents re-render
    addBoardFunc(boardFormData);
    setTitlePlaceholder(INITIAL_FORM_DATA.title);
    setOwnerPlaceholder(INITIAL_FORM_DATA.owner);
  };

  const [isHidden, setIsHidden] = useState(false);

  const formClass = isHidden === true ? "hidden" : "show";

  const buttonContent =
    isHidden === true ? "Expand Board Form" : "Collapse Board Form";

  return (
    <div className="boardFormContainer">
      <h2>Create A New Board</h2>
      <form
        className={`${formClass} boardForm`}
        onSubmit={handleNewBoardSubmit}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={boardFormData.title}
          placeholder="test"
          onChange={handleChange}
        />
        <label htmlFor="owner">Owner's Name</label>
        <input
          type="text"
          name="owner"
          id="owner"
          value={boardFormData.owner}
          placeholder="test"
          onChange={handleChange}
        />
        <input type="submit" value="Add Board" />
      </form>
      <button onClick={() => setIsHidden(!isHidden)}>{buttonContent}</button>
    </div>
  );
};

export default NewBoardForm;
