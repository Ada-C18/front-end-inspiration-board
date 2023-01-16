import { useState } from "react";
import BoardForm from "./BoardForm";
import BoardSelector from "./BoardSelector";

const Header = (props) => {
  const [boardSelectorVisible, setBoardSelectorVisible] = useState(false);
  const [newBoardFormVisible, setNewBoardFormVisible] = useState(false);

  const viewForm = () => {
    setNewBoardFormVisible(!newBoardFormVisible);
  };

  return (
    <header>
      <BoardSelector
        listOfBoards={props.listOfBoards}
        updateCurrentBoard={props.updateCurrentBoard}
        isVisibleSelector={boardSelectorVisible}
      ></BoardSelector>
      <h1>Inspiration Board</h1>
      {/* <button onClick={viewForm}>+</button> */}
      <BoardForm
        newBoard={props.newBoard}
        isVisibleForm={newBoardFormVisible}
      ></BoardForm>
    </header>
  );
};

export default Header;
