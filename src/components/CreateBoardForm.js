import { useState } from "react";
//import PropTypes from "prop-types";

const CreateBoardForm = ({ createBoard }) => {
  const [newBoard, setNewBoard] = useState({
    title: "",
    owner: "",
  });

  const onBoardTitleChange = (event) =>
    setNewBoard({ ...newBoard, title: event.target.value });

  const onBoardOwnerChange = (event) =>
    setNewBoard({ ...newBoard, owner: event.target.value });

  const submitCreateBoardForm = (event) => {
    event.preventDefault();
    createBoard(newBoard);
    setNewBoard({
      title: "",
      owner: "",
    });
  };

  return (
    <form onSubmit={submitCreateBoardForm}>
      <h3>New Board</h3>
      <label htmlFor="newBoardTitle">New Board Title:</label>
      <input
        name="newBoardTitle"
        value={newBoard.title}
        type="text"
        onChange={onBoardTitleChange}
      />
      <label htmlFor="newBoardOwner">New Board Owner:</label>
      <input
        name="newBoardOwner"
        value={newBoard.owner}
        type="text"
        onChange={onBoardOwnerChange}
      />
      <input type="submit" value="Create Board" />
    </form>
  );
};

export default CreateBoardForm;
