import "./BoardForm.css";
import { useState } from "react";

const BoardForm = (props) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const handleTitleChange = (event) => {
    setName(event.target.value);
  };
  const handleOwnerChange = (event) => {
    setOwner(event.target.value);
  };

  const onSubmitBoard = (event) => {
    console.log("event submitted");
    console.log(event);
    event.preventDefault();
    props.newBoard({
      name,
      owner,
    });
    setName("");
    setOwner("");
  };

  return (
    <form id="board-form" onSubmit={onSubmitBoard}>
      <h3>create new board</h3>
      <hr></hr>
      <div>
        <input
          type="text"
          placeholder="Board Name"
          className="form-field"
          defaultValue={name}
          onChange={handleTitleChange}
        ></input>
      </div>
      <div>
        <input
          type="text"
          placeholder="Owner"
          className="form-field"
          defaultValue={owner}
          onChange={handleOwnerChange}
        ></input>
        <p id="display-info">
          {name} - {owner}
        </p>
      </div>
      <input
        type="Submit"
        className="submit-btn"
        defaultValue="add board"
      ></input>
    </form>
  );
};

export default BoardForm;
