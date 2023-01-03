//import "./App.js";
import { useState } from "react";

const NewBoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      name: event.target.value,
    });
  };

  const onOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      email: event.target.value,
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

  return (
    <form onFormSubmit={FormSubmit}>
      <div>
        <label htmlFor="Title">Title:</label>
        <input name="Title" value={formFields.title} onChange={onTitleChange} />
      </div>
      <div>
        <label htmlFor="owner">Owner:</label>
        <input
          owner="owner"
          value={formFields.owner}
          onChange={onOwnerChange} //or should it be onFormSubmit?
        />
      </div>
      <p> Preview - </p>
      <p>
        {formFields.title} {formFields.owner}{" "}
      </p>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NewBoardForm;
