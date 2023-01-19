import { useState } from "react";
import "./CardForm.css";

const CardForm = ({ addCardData }) => {
  const [messageData, setMessageData] = useState({
    message: "",
  });

  const handleMessageChange = (event) => {
    setMessageData({ ...messageData, message: event.target.value });
  };

  const onSubmitCard = (event) => {
    event.preventDefault();
    addCardData({
      message: messageData.message,
    });

    setMessageData({
      message: "",
    });
  };

  return (
    <>
      <h3>Add New Card</h3>
      <form onSubmit={onSubmitCard}>
        <label>Message</label>
        <input
          type="text"
          required
          value={messageData.message}
          onChange={handleMessageChange}
          maxLength="40"
          minLength="1"
          className="card-field"
        ></input>
        <input type="submit" value="Submit" className="card-button" />
      </form>
    </>
  );
};

export default CardForm;
