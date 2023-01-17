import React from 'react';
import { useState } from 'react';
import './NewCardForm.css';


const NewCardForm = ({ addCardCallback , afterSubmitMessage }) => {
  // hide form button - use ternary

  const [cardData, setCardData] = useState({
    message: '',
  });

  const submitCardData = (event) => {
    event.preventDefault();
    addCardCallback(cardData);
    setCardData({ message: '' });
  };

  const handleChange = (event) => {
    setCardData({ ...cardData, [event.target.name]: event.target.value });
  };
  
  return (
    <section className="new-card__section">
      <form onSubmit={submitCardData} className="new-card__form">
        
          <h2 id='add-card'>Add a Card to Current Board</h2>
          <div id="line" />
          <div className="new-card__fields">
            <label htmlFor="message">Message</label>
            <input
              name="message"
              id="message"
              value={cardData.message}
              onChange={handleChange}
            />
            <button className="new-card__button" type="submit">
              Add Card
            </button>
            <p>
              {/* {afterSubmitMessage} */}
            </p>
          </div>
      </form>
    </section>
  );
};

export default NewCardForm;