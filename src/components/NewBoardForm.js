import React, { useState } from "react";
import PropTypes from 'prop-types';
import './NewBoardForm.css';

const NewBoardForm = ( {onBoardSubmit}) => {

  const [formFields, setFormFields] = useState({
    title: '',
    owner: ''
  });

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value
    })
  };

  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value
    })
  };

  const submitBoardData = (e) => {
    e.preventDefault();
    onBoardSubmit(formFields);
    setFormFields({title: '', owner: ''});
  }

  return (
    <form onSubmit={submitBoardData}>
      <div>
        <label htmlFor="title">Title:</label>
        <input 
          name="title"
          value={formFields.title}
          onChange={onTitleChange} />
      </div>
      <div>
        <label htmlFor="owner">Owner:</label>
        <input 
          name="owner"
          value={formFields.owner}
          onChange={onOwnerChange} />
      </div>
        <input 
          type="submit" 
          value="Add Board" />
    </form>
  );
};

NewBoardForm.propTypes = {
  onBoardSubmit: PropTypes.func.isRequired,
}

export default NewBoardForm;
