import { useState } from 'react';

function NewBoardForm(props) {
  // create piece of state
  const [formFields, setFormFields] = useState({
    title: '',
    owner: ''
  });

  // Create an event handlers to update state to the value inside the input field
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

  // Create a new event handler to lift state up for form submission
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.createNewBoard({
      title: formFields.title,
      owner: formFields.owner,
    });
    // resets the form by updating input fields to empty string
    setFormFields({
      title: "",
      owner: "",
    });
  };

  // Each input requirement has its own element and set of attributes
  // make all input values read from this state: set value attribute to piece of state
  // Add an onChange attribute to render the event handlers
  return (
    <form onSubmit={onFormSubmit}>
      <div>NewBoardForm</div>
        <div>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                name="title"
                value={formFields.title} 
                onChange={onTitleChange} 
                className={((formFields.title.length === 0) || (formFields.title.length > 40)) ? 'invalid-form-input' : ''}/>
        </div>
        <div>
            <label htmlFor="owner">Owner's Name:</label>
            <input
                type="text"
                name="owner"
                value={formFields.owner}
                onChange={onOwnerChange} 
                className={((formFields.owner.length === 0) || (formFields.owner.length > 40)) ? 'invalid-form-input' : ''}/>
        </div>
        <input
            type="submit"
            value="Add New Board" 
            disabled={((formFields.title.length === 0) || (formFields.owner.length === 0) || (formFields.title.length > 40) || (formFields.owner.length > 40))}/>
    </form>
    );
}

export default NewBoardForm
