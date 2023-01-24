import React, { useState } from "react";
import PropTypes from 'prop-types';
import "../styles/NewForms.css";

const NewCardForm = (props) => {

  const [message, setMessage] = useState("");
  
  const createNewMessage = (event) => {
    setMessage(event.target.value);
  };

  const onFormSubmit = (event) => {
      event.preventDefault();
      props.createNewCard(message);
      setMessage("");
  };

  const resetForm = (event) => {
    setMessage("");
  };

  return (
    <section className="newCard">
      <h2>Create a New Card</h2>
      <p>Enter details below and click Create</p>
      <form onSubmit={onFormSubmit} className="newCardForm">
        <label htmlFor="message">Message</label>
        <br />
        <input
          type="text"
          minLength={1}
          maxLength={40}
          className={!message ? "error" : ""}
          value={message}
          onChange={createNewMessage}
        ></input>
        <p>Preview: {message}</p>
        <section className="buttonGrid">  
        <input
          type="submit"
          value="Create"
          className="button"
          disabled={!message}
          ></input>
        <input
          type="reset"
          value="Reset"
          className="button"
          onClick={resetForm}
        ></input>
        </section>
      </form>
    </section>
  );
};

NewCardForm.propTypes = {
  createNewCard: PropTypes.func
};

export default NewCardForm;