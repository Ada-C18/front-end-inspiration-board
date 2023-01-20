import React, { useState, useEffect } from "react";

import "./CreateNewCard.css";

const kDefaultFormState = {
  message: "",
};

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState(kDefaultFormState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      props.createCardCallback({
        message: formFields.message,
      });
      setFormFields({
        message: "",
      });
    }
    setIsSubmit(false);
  }, [formErrors, isSubmit, formFields.message, props]);

  const onMessageChange = (event) => {
    setFormFields({
      ...formFields,
      message: event.target.value,
    });
  };
  const validate = (values) => {
    const errors = {};
    if (values.message.length > 40) {
      errors.message = "Message limited to 40 characters";
    } else if (values.message.length < 1) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formFields));
    setIsSubmit(true);
  };

  return (
    <section className="cardform-container">
      <h2>Create A New Card</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="message">Message </label>
          <input
            type="text"
            id="message"
            name="message"
            value={formFields.message}
            onChange={onMessageChange}
            className={formErrors.message ? "error" : ""}
          ></input>
          <p>{formErrors.message}</p>
        </div>
        <pre>{`Preview - ${formFields.message}`}</pre>
        <div>
          <button className="new-card-submit" type="submit" value="Submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewCardForm;
