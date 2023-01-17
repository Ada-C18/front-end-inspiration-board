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
      <div>
        <label>Board Name: </label>
        <input
          type="text"
          defaultValue={name}
          onChange={handleTitleChange}
        ></input>
      </div>
      <div>
        <label>Owner: </label>
        <input
          type="text"
          defaultValue={owner}
          onChange={handleOwnerChange}
        ></input>
        <p>
          {name} - {owner}
        </p>
      </div>
      <input type="Submit" defaultValue="Add New Board"></input>
    </form>
  );
};

export default BoardForm;
