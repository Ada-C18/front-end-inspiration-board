import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BoardForm.css';

const boardObj = {
  title: '',
  owner: '',
};

const BoardForm = (props) => {

  const [formData, setFormData] = useState(boardObj);
  
  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(newFormData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleBoardSubmit(formData);
    setFormData(boardObj);
  };
  return (
    <div className='board-card-container '>
        <h2 className='board-card-container '>Board Form</h2>
      <form className='board-card-container ' onSubmit={handleSubmit}>
      
        <div>
          <label className='board-card-container '  htmlFor='title'>Title: </label>
          <input
            type='text'
            id='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder='Write a board title'
          ></input>
        </div>
        <div>
          <label htmlFor='owner'>Owner: </label>
          <input 
            type='text'
            id='owner'
            name='owner'
            value={formData.owner}
            onChange={handleChange}
            placeholder='Write your handle'
          ></input>
        </div>
        <div>
          <input className='board-card-container ' type='submit' 
          disabled={((formData.title.length === 0) || (formData.owner.length === 0) || (formData.title.length > 40) || (formData.owner.length > 40))}
          value='Submit'></input>
        </div>
      </form>
    </div>
  );
};

BoardForm.propTypes = {
  handleBoardSubmit: PropTypes.func.isRequired,
};

export default BoardForm;
