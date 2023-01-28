import React, { useState } from "react";
import PropTypes from "prop-types";

const NewCardForm = (props) => {
  const [formFields, setFormFields] = useState({
    message: "",
  });

  const handleMessageChange = (event) => {
    setFormFields({ ...formFields, message: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    props.addCard(formFields.message);

    setFormFields({
      message: "",
    });
  };

  return (
    <section className="new-card-form__container">
      <h2>Create a New Card</h2>
      <form className="new-card-form__form" onSubmit={handleFormSubmit}>
        <label htmlFor="message">Message:</label>
        <input
          name="message"
          type="text"
          value={formFields.message}
          onChange={handleMessageChange}
          required
        />
        <button className="new-card-form__submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

// NewCardForm.propTypes = {
//   addCard: PropTypes.func.isRequired,
// };

export default NewCardForm;
