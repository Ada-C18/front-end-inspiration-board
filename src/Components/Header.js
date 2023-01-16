import { useState } from "react";
import BoardForm from "./BoardForm";
import BoardSelector from "./BoardSelector";
import "./Header.css";

const Header = (props) => {
  const [boardSelectorVisible, setBoardSelectorVisible] = useState(false);
  const [newBoardFormVisible, setNewBoardFormVisible] = useState(false);

  const toggleBoardFormVisible = () => {
    setBoardSelectorVisible(!boardSelectorVisible);
  };

  const boardFormButtonText = boardSelectorVisible
    ? "Hide form"
    : "Add new board";
  const boardFormElement = boardSelectorVisible ? (
    <BoardForm newBoard={props.newBoard}></BoardForm>
  ) : (
    ""
  );

  return (
    <header className="header">
      <BoardSelector
        listOfBoards={props.listOfBoards}
        updateCurrentBoard={props.updateCurrentBoard}
      ></BoardSelector>
      <h1>Inspiration Board</h1>
      <button onClick={toggleBoardFormVisible}>{boardFormButtonText}</button>
      {boardFormElement}
    </header>
  );
};

export default Header;
