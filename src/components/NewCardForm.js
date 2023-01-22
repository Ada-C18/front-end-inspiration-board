import { useState } from "react";
import PropTypes from "prop-types";

const NewCardForm = (props) => {
  const [formField, setFormField] = useState(" ");

  const onFormChange = (event) => {
    setFormField({
      ...formField,
      message: event.target.value,
    });
  };

  const onCardSubmit = (event) => {
    event.preventDefault();
    props.postNewCard(formField.message);
    setFormField({
      message: "",
    });
  };

  return (
    <form onSubmit={onCardSubmit}>
      <div>
        <label htmlFor="message">Message:</label>
        <input
          name="Message"
          value={formField.message}
          onChange={onFormChange}
        />
      </div>
      <input type="submit" value="Add Card" />
    </form>
  );
};

export default NewCardForm;
