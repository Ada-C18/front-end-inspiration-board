import React, { useState } from 'react';
import './CardForm.css';
import PropTypes from 'prop-types';

const cardObj = {
  message: '',
  likeCount: 0,
};
const CardForm = ({ onFormSubmit }) => {
  // default values for the shape of the form and it's fields. The object being passed
  const [formData, setFormData] = useState(cardObj);

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formData);
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
        <input type='submit' value='Submit Card' />
      </form>
    </section>
  );
};

CardForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default CardForm;
