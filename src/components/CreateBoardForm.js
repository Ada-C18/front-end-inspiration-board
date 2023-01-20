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

  const onBoardOwnerChange = (event) => {
    event.target.size = event.target.value.length;
    setNewBoard({ ...newBoard, owner: event.target.value });
  };

  const submitCreateBoardForm = (event) => {
    event.preventDefault();
    createBoard(newBoard);
    setNewBoard({
      title: "",
      owner: "",
    });
  };

  return (
    <form className="board" onSubmit={submitCreateBoardForm}>
      <div className="placeholder">+</div>
      <div>
        <input
          className="boardTitle"
          type="text"
          name="newBoardTitle"
          value={newBoard.title}
          placeholder="New Board"
          onChange={onBoardTitleChange}
        />
      </div>
      <div>
        <label htmlFor="newBoardOwner">for</label>
        <input
          className="boardOwner"
          size="4"
          type="text"
          name="newBoardOwner"
          value={newBoard.owner}
          placeholder="what"
          onChange={onBoardOwnerChange}
        />
      </div>
      <input type="submit" value="🔨" />
    </form>
  );
};

export default CreateBoardForm;
