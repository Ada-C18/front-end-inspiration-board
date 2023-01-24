import PropTypes from "prop-types";
import { useState } from "react";

const INITIAL_CARD_DATA = {
  message: "",
};

const NewCardForm = ({ addCard }) => {
  const [cardFormData, setCardFormData] = useState(INITIAL_CARD_DATA);

  const handleFormChange = (e) => {
    const newCardData = {
      ...cardFormData,
      [e.target.name]: e.target.value,
    };
    setCardFormData(newCardData);
  };

  const submitCardForm = (e) => {
    e.preventDefault();
    addCard(cardFormData);
    setCardFormData(INITIAL_CARD_DATA);
  };

  const SubmitButton = () => {
    if (cardFormData.message && cardFormData.message.length < 41) {
      return <button type="submit">Add Card</button>;
    } else {
      return (
        <div>
          <button type="submit" disabled>
            Add Card
          </button>
          <span> Characters limit 40 </span>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Create a New Card</h2>
      <form onSubmit={submitCardForm}>
        <label htmlFor="message">Message: </label>
        <input
          type="text"
          id="message"
          name="message"
          value={cardFormData.message}
          onChange={handleFormChange}
        ></input>
        <br></br>
        <p>Preview: {cardFormData.message}</p>
        <br></br>
        <SubmitButton />
      </form>
    </div>
  );
};

NewCardForm.propTypes = {
  addCard: PropTypes.func.isRequired,
};

export default NewCardForm;
