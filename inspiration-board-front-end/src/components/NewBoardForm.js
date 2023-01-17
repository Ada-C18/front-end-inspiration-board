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

  return (
    <form onSubmit={onFormSubmit} className="form-style">
      <section>
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
        <input type="submit" value="Add Board" className="button" />
      </section>
    </form>
  );
};

NewBoardForm.propTypes = {
  addBoardCallBack: PropTypes.func.isRequired,
};

export default NewBoardForm;
