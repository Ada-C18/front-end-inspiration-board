import React, {useState} from "react";
import PropTypes from 'prop-types';

const kDefaultFormState = {
  title: "",
  owner: ""
}

const NewBoardForm = ({handleBoardSubmit}) => {

  const [formData, setFormData] = useState(kDefaultFormState)

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    const newFormData = {...formData, [fieldName]: fieldValue}

    setFormData(newFormData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleBoardSubmit(formData);
    setFormData(kDefaultFormState);
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Board Title: </label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="owner">Board Owner: </label>
        <input type="text" id="owner" name="owner" value={formData.owner} onChange={handleChange}/>
      </div>
      <div><input type="submit" value="Create a Board" /></div>
    </form>  
    )
}

NewBoardForm.propTypes = {
  handleBoardSubmit: PropTypes.func.isRequired
}

export default NewBoardForm