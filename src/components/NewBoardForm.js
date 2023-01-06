import PropTypes from 'prop-types';
import { useState } from 'react';

const NewBoardForm = ({createNewBoardForm}) => {
  const [formData, setFormData] = useState({
    title: '',
    owner: ''
  });

  const [preview, setPreview] = useState(' - ');

  const handleChange = (event) => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(newFormData);
    setPreview(`${newFormData.title} - ${newFormData.owner}`)
  };

  return(
    <form>
      <div>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='owner'>Owner's Name</label>
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