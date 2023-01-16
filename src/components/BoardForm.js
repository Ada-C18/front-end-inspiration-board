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
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Board Form</h2>
        <div>
          <label htmlFor='title'>Title: </label>
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
          <input type='submit' value='Submit'></input>
        </div>
      </form>
    </div>
  );
};

BoardForm.propTypes = {
  handleBoardSubmit: PropTypes.func.isRequired,
};

export default BoardForm;
