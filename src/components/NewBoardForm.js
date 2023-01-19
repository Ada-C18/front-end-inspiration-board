import { useState } from "react";

const OriginalFormState = {
  title: "",
  owner: "",
};

const NewBoardForm = ({ createNewBoard }) => {
  const [boardFormData, setBoardFormData] = useState(OriginalFormState);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    const newBoardFormData = { ...boardFormData, [inputName]: inputValue };

    setBoardFormData(newBoardFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewBoard(boardFormData);
    setBoardFormData(OriginalFormState);
  };

  return (
    <form onSubmit={handleSubmit} className="create_newboard">
      <div>
        <label> Board Title: </label>
        <input
          type="text"
          id="boardFormTitle"
          name="title"
          value={boardFormData.title}
          onChange={handleChange}
          className={
            boardFormData.title.length === 0 || boardFormData.title.length > 40
              ? "invalid-form-input"
              : ""
          }
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
          className={
            boardFormData.owner.length === 0 || boardFormData.owner.length > 40
              ? "invalid-form-input"
              : ""
          }
        ></input>
        <p>
          Preview: {boardFormData.title} - {boardFormData.owner}
        </p>
        <input
          type="Submit"
          disabled={
            boardFormData.owner.length === 0 ||
            (boardFormData.owner.length > 40) |
              (boardFormData.title.length === 0) ||
            boardFormData.title.length > 40
          }
          className="new-board-form__form-submit-btn"
        ></input>
      </div>
    </form>
  );
};

export default NewBoardForm;
