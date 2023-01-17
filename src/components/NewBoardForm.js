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

  const submitButtonStatus =
    !formFields.title || !formFields.owner ? true : false;
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onAddBoard({ title: formFields.title, owner: formFields.owner });
    setformFields({ title: "", owner: "" });
  };

  return (
    <section>
      <h1>CREATE A NEW BOARD</h1>
      <button onClick={() => setisBoardFormVisible(!isBoardFormVisible)}>
        {" "}
        Hide New Board Form
      </button>
      {isBoardFormVisible && (
        <form onSubmit={onFormSubmit}>
          <div>Title</div>
          <input
            title="userTitle"
            type="text"
            value={formFields.title}
            placeholder="enter title..."
            onChange={onTitleChange}
          ></input>
          <div>Owner's Name</div>
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
          <input
            value="Submit Board"
            id="submitButton"
            type="submit"
            disabled={submitButtonStatus}
          ></input>
        </form>
      )}
    </section>
  );
};

NewBoardForm.propTypes = {
  onAddBoard: PropTypes.func.isRequired,
};
export default NewBoardForm;
