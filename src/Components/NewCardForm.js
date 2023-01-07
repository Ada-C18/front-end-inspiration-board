import React, { useState } from 'react';
import './NewCardForm.css';

const NewCardForm = () => {
  const [cardForm, setCardForm] = useState({ message: '' });

  const onMessageChange = (e) => {
    setCardForm({
      ...cardForm,
      message: e.target.value,
    });
  };

  return (

    <form className="card__form">
      <h1 className="form__header">⚡️ Create a Message ⚡️</h1>
      <div className="new-card__field">
        <label htmlFor="message">Message</label>
        <input
          className={!cardForm.message ? 'invalid-form-input' : ''}
          type="text"
          id="message"
          name="message"
          value={cardForm.message}
          onChange={onMessageChange}
        />
        <p>Preview: {cardForm.message}</p>
        <button
          className="submit__button"
          type="submit"
          // value="Submit"
          disabled={!cardForm.message}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewCardForm;
