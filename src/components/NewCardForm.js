import React, {useState} from "react";
import PropTypes from 'prop-types';

const kDefaultFormState = {
  message: "",
  boardId: null
}

const NewCardForm = (props) => {
  const [formData, setFormData] = useState(kDefaultFormState)

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = {...formData, [fieldName]: fieldValue}

    newFormData["boardId"] = props.boardId
    newFormData["likesCount"] = 0

    setFormData(newFormData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCardSubmit(formData);
    setFormData(kDefaultFormState);
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="message">Card Message: </label>
        <input type="text" id="message" name="message" value={formData.message} onChange={handleChange} />
      </div>
      <div><input type="submit" value="Submit a Card" /></div>
    </form>  
    )
}

NewCardForm.propTypes = {
  boardId: PropTypes.number.isRequired,
  handleCardSubmit: PropTypes.func.isRequired
}

export default NewCardForm