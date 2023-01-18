import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";

const NewCardForm = (props) => {
  const [formData, setFormData] = useState({ message: "" });

  const handleChange = (e) => {
    // const NewFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData({ message: e.target.value });
  };

  const handleNewCardSubmit = (e) => {
    e.preventDefault();
    formData.board_id = props.boardId;
    props.addNewCardCallback(formData);
    setFormData({ message: "" });
  };

  return (
    <form onSubmit={handleNewCardSubmit}>
      <label htmlFor="message">Message</label>
      <input
        type="text"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <p>Preview: {formData.message}</p>
      <input type="submit" value="Add card" />
    </form>
  );
};

NewCardForm.propTypes = {
  addNewCardCallback: PropTypes.func.isRequired,
  boardId: PropTypes.number.isRequired,
};

export default NewCardForm;
