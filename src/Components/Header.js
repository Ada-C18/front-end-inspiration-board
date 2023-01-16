import { useState } from "react";
import BoardForm from "./BoardForm";
import BoardSelector from "./BoardSelector";
import "./Header.css";

const Header = (props) => {
  const [boardSelectorVisible, setBoardSelectorVisible] = useState(false);
  const [newBoardFormVisible, setNewBoardFormVisible] = useState(false);

  const boardFormElement = boardSelectorVisible ? (
    <BoardForm newBoard={props.newBoard}></BoardForm>
  ) : (
    <button onClick={""}>Add new board</button>
  );

  return (
    <header className="header">
      <BoardSelector
        listOfBoards={props.listOfBoards}
        updateCurrentBoard={props.updateCurrentBoard}
      ></BoardSelector>
      <h1>Inspiration Board</h1>
      {boardFormElement}
    </header>
  );
};

export default Header;
