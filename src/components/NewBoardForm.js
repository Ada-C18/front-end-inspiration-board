import { useState } from "react";
import "../App.css";

function NewBoardForm(props) {
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
    props.createNewBoard({
      title: formFields.title,
      owner: formFields.owner,
    });

    setFormFields({
      title: "",
      owner: "",
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="titleContainer">
        <label className="titleField" htmlFor="title">
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={formFields.title}
          onChange={onTitleChange}
          className={
            formFields.title.length === 0 || formFields.title.length > 40
              ? "invalid-form-input"
              : ""
          }
        />
      </div>
      <div>
        <label className="ownerField" htmlFor="owner">
          Owner:
        </label>
        <input
          type="text"
          name="owner"
          value={formFields.owner}
          onChange={onOwnerChange}
          className={
            formFields.owner.length === 0 || formFields.owner.length > 40
              ? "invalid-form-input"
              : ""
          }
        />
      </div>

      <input
        className="submitButton"
        type="submit"
        value="Add New Board"
        disabled={
          formFields.title.length === 0 ||
          formFields.owner.length === 0 ||
          formFields.title.length > 40 ||
          formFields.owner.length > 40
        }
      />
    </form>
  );
}

export default NewBoardForm;
