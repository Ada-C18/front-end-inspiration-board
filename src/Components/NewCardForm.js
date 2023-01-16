import React, { useState } from 'react';
import './NewCardForm.css';

const NewCardForm = ({ addCardData, selectedBoard }) => {
  const [cardForm, setCardForm] = useState({ message: '' });

  const onMessageChange = (e) => {
    setCardForm({
      ...cardForm,
      message: e.target.value,
    });
  };

  const submitCardData = (e) => {
    e.preventDefault();

    addCardData({ ...cardForm, likes_count: 0, board_id: selectedBoard.id });
    setCardForm({ message: '' });
  };

  return (
    <form className="card__form" onSubmit={submitCardData}>
      <h1 className="form__header">✨ Create a Message ✨</h1>
      <div className="new-card__field">
        <label htmlFor="message">Message</label>
        <input
          className={!cardForm.message | cardForm.message.length > 40 ? 'invalid-form-input' : ''}
          type="text"
          id="message"
          name="message"
          value={cardForm.message}
          onChange={onMessageChange}
        />
        <p className="required">* must be 1 to 40 characters</p>
        <p>Preview: {cardForm.message}</p>
        <button
          className="card__submit__button"
          type="submit"
          // value="Submit"
          disabled={!cardForm.message | cardForm.message.length > 40}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewCardForm;
