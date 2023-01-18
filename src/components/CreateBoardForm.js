import { useState } from "react";
import "./CreateBoardForm.css";
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
      <div className="stylingboard">
        <h2>New Board</h2>
      </div>
      <label htmlFor="newBoardTitle">New Board Title:</label>
      <input
        className="jump"
        name="newBoardTitle"
        value={newBoard.title}
        type="text"
        onChange={onBoardTitleChange}
      />
      <label htmlFor="newBoardOwner"> New Board Owner:</label>
      <input
        className="jump"
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
