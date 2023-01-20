import React, { useState, useEffect } from "react";
import "./NewBoardForm.css";

const kDefaultFormState = {
  title: "",
  owner: "",
};

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState(kDefaultFormState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      props.createBoardCallback({
        title: formFields.title,
        owner: formFields.owner,
      });
      setFormFields({
        title: "",
        owner: "",
      });
    }
    setIsSubmit(false);
  }, [formErrors, formFields.title, formFields.owner, isSubmit, props]);

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title is required";
    }
    if (!values.owner) {
      errors.owner = "Owner is required";
    }
    return errors;
  };

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  //can condense onOwner and onForm into onHandleChange
  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formFields));
    setIsSubmit(true);
  };

  return (
    <section className="board-form-container">
      <h2>Create a New Board</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="title">Title </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formFields.title}
            onChange={onTitleChange}
            className={formErrors.title ? "error" : ""}
          ></input>
        </div>
        <p>{formErrors.title}</p>
        <div>
          <label htmlFor="owner">Owner's Name </label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formFields.owner}
            onChange={onOwnerChange}
            className={formErrors.owner ? "error" : ""}
          ></input>
        </div>
        <p>{formErrors.owner}</p>
        <pre>{`Preview - ${formFields.title} - ${formFields.owner}`}</pre>
        <div>
          <button type="submit" value="Submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewBoardForm;
