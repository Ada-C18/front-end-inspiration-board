import { useState } from "react";
import BoardForm from "./BoardForm";
import BoardSelector from "./BoardSelector";
import "./Header.css";

const Header = (props) => {
  const [boardFormVisible, setBoardFormVisible] = useState(false);

  const toggleBoardFormVisible = () => {
    setBoardFormVisible(!boardFormVisible);
  };

  const boardFormButtonText = boardFormVisible ? "x" : "+";
  const boardFormElement = boardFormVisible ? (
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
      <h1>inspiration board</h1>
      <button onClick={toggleBoardFormVisible}>{boardFormButtonText}</button>
      {boardFormElement}
    </header>
  );
};

export default Header;
