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
    <form onSubmit={submitBoardData} className='board-form'>
      <div className="title-input" id="half">
        <label htmlFor="title" className="item">Title: </label>
        <input 
          placeholder="Title"
          name="title"
          className="item"
          value={formFields.title}
          onChange={onTitleChange} />
      </div>
      <div className="owner-input" id="half">
        <label htmlFor="owner" className="item">Owner: </label>
        <input 
          placeholder="Owner"
          name="owner"
          className="item"
          value={formFields.owner}
          onChange={onOwnerChange} />
      </div>
      <input 
        className="submit-button"
        type="submit" 
        value="Add Board" />
    </form>
  );
};

NewBoardForm.propTypes = {
  onBoardSubmit: PropTypes.func.isRequired,
}

export default NewBoardForm;
