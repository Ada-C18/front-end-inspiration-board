import { useState } from "react";
import "./Forms.css";

const NewBoardForm = ({ handleBoardSubmit }) => {
  const [newBoard, setnewBoard] = useState("");

  const handleNewBoard = (event) => {
    setnewBoard(event.target.value);
  };

  const handleSubmitBoard = (event) => {
    event.preventDefault();
    handleBoardSubmit(newBoard);
    setnewBoard("");
  };

  return (
    <form onSubmit={handleSubmitBoard}>
      <div>
        <input
          type="text"
          id="title"
          name="title"
          value={newBoard}
          onChange={handleNewBoard}
          placeholder="Add New Board"
        />
        <div>
          <input type="submit" value="Submit New Board" />
        </div>
      </div>
    </form>
  );
};

export default NewBoardForm;
