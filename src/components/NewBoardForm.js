import { useState } from "react";

const OriginalFormState = {
  title: "",
  owner: "",
};

const NewBoardForm = ({ handleBoardSubmit }) => {
  const [boardFormData, setBoardFormData] = useState(OriginalFormState);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    const newBoardFormData = { ...boardFormData, [inputName]: inputValue };

    setBoardFormData(newBoardFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleBoardSubmit(boardFormData);
    setBoardFormData(OriginalFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> Board Title: </label>
        <input
          type="text"
          id="boardFormTitle"
          name="title"
          value={boardFormData.title}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label> Board Owner: </label>
        <input
          type="text"
          id="boardFormOwner"
          name="owner"
          value={boardFormData.owner}
          onChange={handleChange}
        ></input>
      </div>
    </form>
  );
};

export default NewBoardForm;
