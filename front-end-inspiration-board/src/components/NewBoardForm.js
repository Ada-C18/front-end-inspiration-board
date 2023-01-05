import { useState } from "react";

const INITIAL_BOARDS_FORM_DATA = {
  owner: "",
  title: "",
};

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_BOARDS_FORM_DATA);

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

  return (
    <form onSubmit={handleNewBoardSubmit} className="CreateNewBoard">
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
      <input type="submit" value="Add Board" />
    </form>
  );
};

export default NewBoardForm;
