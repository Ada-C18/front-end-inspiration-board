import React, {useState} from "react";
import PropTypes from 'prop-types';

const NewCardForm = (props) => {
  const kDefaultFormState = {
    message: "",
    boardId: props.boardId,
    likesCount: 0
  }
  console.log("props for card form", props.boardId)
  console.log("default form ",kDefaultFormState)
  // uses the python variable style

  const [formData, setFormData] = useState(kDefaultFormState)
  console.log("before render form data", formData)


  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = {...formData, [fieldName]: fieldValue}
    console.log(fieldName, "field name")
    console.log(fieldValue, "field value")
    console.log("BEFORE form data state", formData)
    console.log("BEFORE form data setting", newFormData)

    setFormData(newFormData)
    console.log("form data state", formData)
    console.log("form data after setting", newFormData)
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