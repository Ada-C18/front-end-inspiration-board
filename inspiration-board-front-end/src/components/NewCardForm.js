import React, { useState } from "react";
import PropTypes from "prop-types";

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//                 TODO: Modifiy so it is connected to boards
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    message: "",
  });

  const onMessageChange = (event) => {
    setFormFields({
      ...formFields,
      message: event.target.value,
    });
  };

  const onMessageFormSubmit = (event) => {
    event.preventDefault();

    props.addCardCallBack({
      message: formFields.message,
    });
    setFormFields({
      message: "",
    });
  };

  return (
    <form onSubmit={onMessageFormSubmit} className="form-style">
      <section>
        <h5>Create New Card</h5>
        <h5>Enter message:</h5>
        <input
          type="text"
          className={
            formFields.message.length === 0 || formFields.message.length > 35
              ? "invalid-form-input"
              : ""
          }
          value={formFields.message}
          onChange={onMessageChange}
        />
      </section>
      <input type="submit" value="Add Card" />
    </form>
  );
};

NewCardForm.propTypes = {
  addCardCallBack: PropTypes.func.isRequired,
};

export default NewCardForm;
