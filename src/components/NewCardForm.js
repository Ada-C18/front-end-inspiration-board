import { useState } from "react";

const NewCardForm = ({ addCardCallback }) => {
  const [cardData, setCardData] = useState({ message: "" });

  const onMessageChange = (event) => {
    setCardData({
      // ...cardData,
      message: event.target.value,
    });
    if (event.target.value.length > 40) {
      window.alert("Message shouldn't exceed 40 characters");
    }
  };

  // Add Card
  const onCardFormSubmit = (event) => {
    event.preventDefault();

    addCardCallback({
      message: cardData.message,
    });

    setCardData({ message: "" });
  };

  const isSubmitDisabled =
    cardData.message === "" || cardData.message.length > 40;

  return (
    <div className="form">
      <h2>Create New Card</h2>
      <form onSubmit={onCardFormSubmit}>
        <label htmlFor="message">Message</label>
        <input
          type="string"
          name="message"
          id="message"
          value={cardData.message}
          onChange={onMessageChange}
        />
        <p>Preview: {cardData.message}</p>

        <button type="submit" disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewCardForm;
