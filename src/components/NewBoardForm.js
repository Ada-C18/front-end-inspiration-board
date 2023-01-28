import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewBoardForm = ({ onAddBoardCallback }) => {
  const [formFields, setFormFields] = useState({
    title: '',
    owner: '',
  });

  const handleTitleChange = (event) => {
    setFormFields({ ...formFields, title: event.target.value });
  };

  const handleOwnerChange = (event) => {
    setFormFields({ ...formFields, owner: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onAddBoardCallback(formFields.title, formFields.owner);

    setFormFields({
      title: '',
      owner: '',
    });
  };

  return (
    <form className='new-board-form__form' onSubmit={handleFormSubmit}>
      <label htmlFor='boardTitle'>Title:</label>
      <input
        name='boardTitle'
        value={formFields.title}
        onChange={handleTitleChange}
        required
      />
      <label htmlFor='boardOwner'>Owner:</label>
      <input
        name='boardOwner'
        value={formFields.owner}
        onChange={handleOwnerChange}
        required
      />
      <button className='new-board-form__submit' type='submit'>Submit</button>
    </form>
  );
};

NewBoardForm.propTypes = {
  onAddBoardCallback: PropTypes.func.isRequired,
};
export default NewBoardForm;
