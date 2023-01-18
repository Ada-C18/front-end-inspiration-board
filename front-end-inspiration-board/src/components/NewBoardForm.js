import { useState } from "react";
import "./NewBoardForm.css";

const INITIAL_BOARDS_FORM_DATA = {
  owner: "",
  title: "",
};

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_BOARDS_FORM_DATA);
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const handleNewBoardSubmit = (e) => {
    e.preventDefault();
    props.addBoardCallBackFunc(formData);
    setFormData(INITIAL_BOARDS_FORM_DATA);
  };

  const updateShowForm = () => {
    console.log(!showForm);
    setShowForm(!showForm);
  };

  return (
    <div className="CreateNewBoard">
      {showForm && (
        <form onSubmit={handleNewBoardSubmit}>
          <label htmlFor="owner">Owner</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
          />

          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <input id="submitButton" type="submit" value="Add Board" />
        </form>
      )}
      <button id="showFormButton" onClick={updateShowForm}>
        {showForm ? "Hide New Board Form" : "Show New Board Form"}
      </button>
    </div>
  );
};

export default NewBoardForm;
