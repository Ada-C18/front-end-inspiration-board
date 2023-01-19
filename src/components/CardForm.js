import React, { useState } from 'react';
import './CardForm.css';
import PropTypes from 'prop-types';

//Does this have to change based on the route /card. THEN to link that card to a specific board,
// we make a post request to boards/1 with the json {“card_id”: 1}
const cardObj = {
  message: '',
};
const CardForm = (props) => {

  const [formData, setFormData] = useState(cardObj);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCardSubmit(formData,props.boardId);
    setFormData(cardObj);
  };

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(newFormData);
  };

  return (
    <section>
      <h2>Card Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='message'></label>
        <input
          type='text'
          placeholder='Write here, write now'
          id='message'
          name='message'
          value={formData.name}
          onChange={handleChange}
        />
        <input type='submit' 
        disabled={formData.message.length === 0 || formData.message.length > 40} 
        value='Submit Card' />
      </form>
    </section>
  );
};

CardForm.propTypes = {
  handleCardSubmit: PropTypes.func.isRequired,
  boardId: PropTypes.number.isRequired
};

export default CardForm;
