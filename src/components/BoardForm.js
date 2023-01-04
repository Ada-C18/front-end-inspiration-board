import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
    props.onSubmitBoardForm(formData);
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
  onSubmitBoardForm: PropTypes.func.isRequired,
};

export default BoardForm;
