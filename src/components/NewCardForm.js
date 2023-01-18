import PropTypes from 'prop-types';
import { useState } from 'react';

const NewCardForm = ({boardId, createNewCardForm}) => {
  const [formData, setFormData] = useState({
    message: ''
  });

  const [preview, setPreview] = useState('');

  const handleChange = (event) => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(newFormData);
    setPreview(`${newFormData.message}`)
  };

  const handleNewCardSubmit = (e) => {
    e.preventDefault();
    createNewCardForm(formData, boardId);

    setFormData({
      message: ''
    }); 

    setPreview('');
  };

  return(
    <form onSubmit={handleNewCardSubmit}>
      <div>
        <h1>
          Create A New Card
        </h1>
        <label htmlFor='message'>Message: </label>
        <input
          type='text'
          id='message'
          name='message'
          value={formData.message}
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

NewCardForm.propTypes = {
  createNewCardForm: PropTypes.func.isRequired
};

export default NewCardForm;