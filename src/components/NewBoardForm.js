import { useState } from "react";
import "./NewBoardForm.css"


const INITIAL_FORM_DATA = {
  title: "Inspo Board Title",
  owner: "Inspo Board Owner",
};

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    console.log("Handling the change");
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const handleNewBoardSubmit = (e) => {
    e.preventDefault();
    props.addBoardCallBackFunc(formData);
  };

  return (
    <div className="board-form-box">
      <form onSubmit={handleNewBoardSubmit}>
      <label htmlFor="title" className="text-form">
        Board Title
      </label>
      <br />
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="owner" className="text-form">
        Board Owner
      </label>
      <br />
      <input
        type="text"
        id="owner"
        name="owner"
        value={formData.owner}
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="Add Board" className="button"/>
    </form>
    </div>

  );
};

export default NewBoardForm;
