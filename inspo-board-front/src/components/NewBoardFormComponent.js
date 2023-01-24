import PropTypes from "prop-types";
import { useState } from "react";

const INITIAL_BOARD_DATA = {
  title: "",
  owner: "",
};

const NewBoardForm = ({ addBoard }) => {
  const [boardFormData, setBoardFormData] = useState(INITIAL_BOARD_DATA);
  const [hidden, setHidden] = useState(false);

  const handleFormChange = (e) => {
    const newBoardData = {
      ...boardFormData,
      [e.target.name]: e.target.value,
    };
    setBoardFormData(newBoardData);
  };

  const submitBoardForm = (e) => {
    e.preventDefault();
    addBoard(boardFormData);
    setBoardFormData(INITIAL_BOARD_DATA);
  };

  const SubmitButton = () => {
    if (boardFormData.title && boardFormData.owner) {
      return <button type="submit">Add Board</button>;
    } else {
      return (
        <div>
          <button type="submit" disabled>
            Add Board
          </button>
          <span> Please enter title and owner</span>
        </div>
      );
    }
  };

  const toggleBoardForm = () => {
    setHidden(!hidden);
  };

  const HideBoardForm = () => {
    if (hidden) {
      return <div></div>;
    } else {
      return (
        <form onSubmit={submitBoardForm}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={boardFormData.title}
            onChange={handleFormChange}
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="owner">Owner: </label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={boardFormData.owner}
            onChange={handleFormChange}
          ></input>
          <br></br>
          <p>
            Preview: {boardFormData.title} - {boardFormData.owner}
          </p>
          <br></br>
          <SubmitButton />
        </form>
      );
    }
  };

  return (
    <div>
      <h2>Create a New Board</h2>
      <HideBoardForm />
      <br></br>
      <button onClick={toggleBoardForm}>Toggle Board Form</button>
    </div>
  );
};

NewBoardForm.propTypes = {
  addBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;
