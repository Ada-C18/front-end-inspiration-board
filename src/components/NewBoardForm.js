import PropTypes from 'prop-types';
import { useState } from 'react';

const NewBoardForm = ({createNewBoardForm}) => {
  const [formData, setFormData] = useState({
    title: '',
    owner: ''
  });

  const [preview, setPreview] = useState('_____ by _____');

  const handleChange = (event) => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(newFormData);
    setPreview(`${newFormData.title} by ${newFormData.owner}`)
  };

  const handleNewBoardSubmit = (e) => {
    e.preventDefault();
    createNewBoardForm(formData);
  };

  return(
    <form onSubmit={handleNewBoardSubmit}>
      <div>
        <label htmlFor='title'>Title: </label><br></br>
        <input
          type='text'
          id='title'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor='owner'>Owner's Name: </label><br></br>
        <input
          type='text'
          id='owner'
          name='owner'
          value={formData.owner}
          onChange={handleChange}
        />
      </div>
      <div>
        <p>Preview: {preview}</p>

      </div>
      <input type="submit" value="Submit"></input>

    </form>
  );

};

NewBoardForm.propTypes = {
  createNewBoardForm: PropTypes.func.isRequired
};

export default NewBoardForm;