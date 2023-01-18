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

  let addCardButton = <input type="submit" value="Add Card" />;
  if (formFields.message.length === 0 || formFields.message.length > 41) {
    addCardButton = <input type="submit" value="Add Card" disabled />;
  }

  let charactersLeft = 42 - formFields.message.length;
  if (charactersLeft < 0) {
    charactersLeft = 0;
  }
  return (
    <form onSubmit={onMessageFormSubmit} className="form-style">
      <section>
        <h4>Create New Card</h4>
        <h5>Enter message:</h5>
        <input
          type="text"
          className={
            formFields.message.length === 0 || formFields.message.length > 42
              ? "invalid-form-input"
              : ""
          }
          value={formFields.message}
          onChange={onMessageChange}
        />
        <h6> Characters left: {charactersLeft}</h6>
        <h6> Preview: {formFields.message}</h6>
        {addCardButton}
      </section>
    </form>
  );
};

NewCardForm.propTypes = {
  addCardCallBack: PropTypes.func.isRequired,
};

export default NewCardForm;
