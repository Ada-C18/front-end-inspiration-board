import React, { useState } from "react";
import PropTypes from "prop-types";

const NewCardForm = (props) => {
  const [messageField, setMessageField] = useState({ message: "" });

  const onMessageChange = (event) => {
    setMessageField({ message: event.target.value });
  };

  const onFormSubmit = (event) => {
    if (!messageField.message || messageField.message.length > 40) {
      event.preventDefault();
      document.getElementById("submitButton").disabled = true;
    } else {
      event.preventDefault();
      props.onAddCard({ message: messageField.message });
      setMessageField({ message: "" });
    }
  };

  return (
    <section>
      {props.selectedBoard && (
        <div>
          <h1>CREATE A NEW CARD</h1>
          <form onSubmit={onFormSubmit}>
            <div>Message</div>
            <input
              type="text"
              value={messageField.message}
              paceholder="enter a message..."
              onChange={onMessageChange}
            ></input>
            <p>Preview: {messageField.message}</p>
            <input value="Submit Card" id="submitCard" type="submit"></input>
          </form>
        </div>
      )}
    </section>
  );
};

NewCardForm.propTypes = {
  selectedBoard: PropTypes.number,
  onAddCard: PropTypes.func.isRequired,
};
export default NewCardForm;
