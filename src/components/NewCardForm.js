import React, { useState } from "react";
import PropTypes from "prop-types";

const NewCardForm = (props) => {
  const [messageField, setMessageField] = useState({ message: "" });

  const messageStatus =
    messageField.message && messageField.message.length <= 40
      ? "OK"
      : "highlightRed";

  const onMessageChange = (event) => {
    setMessageField({ message: event.target.value });
  };
  const submitButtonStatus =
    !messageField.message || messageField.message.length > 40 ? true : false;
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onAddCard({ message: messageField.message });
    setMessageField({ message: "" });
  };

  return (
    <section className="column">
      {props.selectedBoard && (
        <div>
          <h1>CREATE A NEW CARD</h1>
          <form onSubmit={onFormSubmit}>
            <div>Message</div>
            <input
              type="text"
              value={messageField.message}
              placeholder="enter a message..."
              onChange={onMessageChange}
              className={messageStatus}
            ></input>
            <p>Preview: {messageField.message}</p>
            <input
              value="Submit Card"
              id="submitCard"
              type="submit"
              disabled={submitButtonStatus}
            ></input>
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
