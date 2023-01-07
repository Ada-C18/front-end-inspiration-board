import { useState } from "react";

const OriginalCardFormState = {
  message: "",
};

const NewCardForm = ({ handleCardSubmit }) => {
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
    handleCardSubmit(cardFormData);
    setCardFormData(OriginalCardFormState);
  };

  return (
    <form onSubmit={handleCSubmit}>
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
      </div>
    </form>
  );
};

export default NewCardForm;
