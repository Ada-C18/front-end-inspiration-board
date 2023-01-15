import React, { useState } from "react";
import PropTypes from "prop-types";

const NewBoardForm = (props) => {
  const [isBoardFormVisible, setisBoardFormVisible] = useState(true);
  const [formFields, setformFields] = useState({ title: "", owner: "" });
  const onTitleChange = (event) => {
    setformFields({ ...formFields, title: event.target.value });
  };
  const onOwnerChange = (event) => {
    setformFields({ ...formFields, owner: event.target.value });
  };
  const onFormSubmit = (event) => {
    if (!formFields.title || !formFields.owner) {
      event.preventDefault();
      document.getElementById("submitButton").disabled = true;
    } else {
      event.preventDefault();
      props.onAddBoard({ title: formFields.title, owner: formFields.owner });
      setformFields({ title: "", owner: "" });
    }
  };
  return (
    <section>
      <h1>Create A New Board</h1>
      <button onClick={() => setisBoardFormVisible(!isBoardFormVisible)}>
        {" "}
        Hide New Board Form
      </button>
      {isBoardFormVisible && (
        <form onSubmit={onFormSubmit}>
          <h2>Title</h2>
          <input
            title="userTitle"
            type="text"
            value={formFields.title}
            placeholder="enter title..."
            onChange={onTitleChange}
          ></input>
          <h2>Owner's Name</h2>
          <input
            owner="userOwner"
            type="text"
            value={formFields.owner}
            placeholder="enter owner..."
            onChange={onOwnerChange}
          ></input>
          <p>
            Preview: {formFields.title} - {formFields.owner}
          </p>
          <input value="Submit Board" id="submitButton" type="submit"></input>
        </form>
      )}
    </section>
  );
};

NewBoardForm.propTypes = {
  onAddBoard: PropTypes.func.isRequired,
};
export default NewBoardForm;
