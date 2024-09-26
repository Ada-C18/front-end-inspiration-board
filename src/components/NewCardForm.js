import { useState } from "react";

const OriginalCardFormState = {
  message: "",
};

const NewCardForm = ({ createNewCard }) => {
  const [cardFormData, setCardFormData] = useState(OriginalCardFormState);

  const handleCardChange = (event) => {
    const inputCardValue = event.target.value;
    const inputCardName = event.target.name;
    const newCardFormData = {
      ...cardFormData,
      [inputCardName]: inputCardValue,
    };

    setCardFormData(newCardFormData);
  };

  const handleCSubmit = (event) => {
    event.preventDefault();
    createNewCard(cardFormData);
    setCardFormData(OriginalCardFormState);
  };

  return (
    <form onSubmit={handleCSubmit} className="create_newcardform">
      <div>
        <label> Card message: </label>
        <input
          type="text"
          id="cardFormMessage"
          name="message"
          value={cardFormData.message}
          onChange={handleCardChange}
          className={
            cardFormData.message.length === 0 ||
            cardFormData.message.length > 40
              ? "invalid-form-input"
              : ""
          }
        ></input>
        <p className="preview_message">Preview: {cardFormData.message}</p>
        <input
          type="Submit"
          disabled={
            cardFormData.message.length === 0 ||
            cardFormData.message.length > 40
          }
          className="new-card-form__form-submit-btn"
        ></input>
      </div>
    </form>
  );
};

export default NewCardForm;
