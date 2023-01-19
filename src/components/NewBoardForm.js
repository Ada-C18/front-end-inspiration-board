//import "./App.js";
import { useState } from "react";
import PropTypes from 'prop-types';

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });
  const [titleError, setTitleError]= useState(false)
  const [ownerError, setOwnerError]= useState(false)

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value,
    });
  };

  const FormSubmit = (event) => {
    event.preventDefault();

    props.onUpdateBoardData({
      title: formFields.title,
      owner: formFields.owner,
    });

    setFormFields({
      title: "",
      owner: "",
    });
  };
  const validateTitleInput = () =>{
    setTitleError(formFields.title.length > 40)
}
  const validateOwnerInput = () =>{
    setOwnerError(formFields.owner.length > 20)
}
  return (
    <form onSubmit={FormSubmit}>
      <div>
        <label htmlFor="Title">Title:</label>
        {titleError ? <label className="error_text">"The maximum length should not be exceed 40 characters"</label> :' '}
        <input 
        name="Title" value={formFields.title} 
        onChange={onTitleChange}
        onInput={validateTitleInput}          
        className={
            formFields.title.length === 0 || formFields.title.length > 40
              ? "max_length_input"
              : ""
          }/>
      </div>
      <div>
        <label htmlFor="owner">Owner:</label>
        {ownerError ? <label className="error_text">"The maximum length should not be exceed 20 characters"</label> :' '}
        <input
          owner="owner"
          value={formFields.owner}
          onChange={onOwnerChange} 
          onInput={validateOwnerInput } 
          className={
            formFields.owner.length === 0 || formFields.owner.length > 40
              ? "max_length_input"
              : ""
          }
        />
      </div>
      <p> Preview - </p>
      <p>
        {formFields.title} {formFields.owner}{" "}
      </p>
      <input type="submit" value="Submit" disabled={formFields.title.length === 0 ||formFields.title.length > 40} />
    </form>
  );
};
NewBoardForm.propTypes ={
  title: PropTypes.string,
  owner: PropTypes.string
}
export default NewBoardForm;
