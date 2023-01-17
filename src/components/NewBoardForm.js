import { useState } from "react";
import PropTypes from "prop-types";

// NewBoardForm
// will take in text input for “title” and “owner”

// Submit button
// On submit (this is going to be an event handler), the submit button will make an API call to create a new board.

// ? how to display error message -> when we make the API call, how to display error message to the user (explicit error or implicit [submit button doesn’t work] )
// ?Attribute to limit character or some sort of hover warning (possibly add placeholder)
// Hide New Board Form
// On click or toggle button -> Hide or show NewBoardForm

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });

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

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addNewBoardCallback({
      titleData: formFields.title,
      ownerData: formFields.owner,
    });

    setFormFields({
      title: "",
      owner: "",
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        Title:
        <input type="text" name="name" />
      </label>
      <label>
        Owner:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

//prop from App.js
NewBoardForm.propTypes = {
  addNewBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;