import { useState } from "react";
import BoardForm from "./BoardForm";
import BoardSelector from "./BoardSelector";

const Header = (props) => {
  const [boardSelectorVisible, setBoardSelectorVisible] = useState(false);
  const [newBoardFormVisible, setNewBoardFormVisible] = useState(false);

  return (
    <header>
      <BoardSelector
        listOfBoards={props.listOfBoards}
        updateCurrentBoard={props.updateCurrentBoard}
      ></BoardSelector>
      <h1>Inspiration Board</h1>
      <BoardForm newBoard={props.newBoard}></BoardForm>
    </header>
  );
};

export default Header;
