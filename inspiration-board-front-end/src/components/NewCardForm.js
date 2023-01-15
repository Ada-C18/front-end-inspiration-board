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
        <h5>New Card</h5>
        <h5>Message</h5>
        <input
          type="text"
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
