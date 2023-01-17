import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addBoardCallBack({
      title: formFields.title,
      owner: formFields.owner,
    });
    setFormFields({
      title: "",
      owner: "",
    });
  };

  let addBoardButton = (
    <input type="submit" value="Add Board" className="button" />
  );
  if (
    formFields.title.length === 0 ||
    formFields.title.length > 12 ||
    formFields.owner.length === 0 ||
    formFields.owner.length > 12
  ) {
    addBoardButton = (
      <input type="submit" value="Add Board" className="button" disabled />
    );
  }

  return (
    <form onSubmit={onFormSubmit} className="form-style">
      <section className="board-form">
        <h4> Create New Board </h4>
        <section>
          <h5>Board Title: </h5>
          <input
            type="text"
            value={formFields.title}
            onChange={onTitleChange}
          />
        </section>
        <section>
          <h5>Owner:</h5>
          <input
            type="text"
            value={formFields.owner}
            onChange={onOwnerChange}
          />
        </section>
        {addBoardButton}
      </section>
    </form>
  );
};

NewBoardForm.propTypes = {
  addBoardCallBack: PropTypes.func.isRequired,
};

export default NewBoardForm;
