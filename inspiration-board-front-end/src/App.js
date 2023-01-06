import "./App.css";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import { useState } from "react";

const testBoards = [
  { title: "Test Board One ", id: 1, owner: "Pavi" },
  { title: "Test Board Two", id: 2, owner: "Soleil" },
  { title: "Test Board Three", id: 3, owner: "Misha" },
];
const emptyBoard = { id: 0, title: " ", owner: " " };

function App() {
  const [boardData, setBoardData] = useState(testBoards);
  const [selectedBoard, setSelectedBoard] = useState(emptyBoard);
  const clickToSelectBoard = (id) => {
    console.log("this function is running!");
    for (const board of boardData) {
      console.log(board, id);
      if (board.id === id) {
        setSelectedBoard(board);
      }
    }
  };
  const addBoard = (newBoard) => {
    console.log(newBoard);
    const newBoardList = [...boardData];
    const newBoardId = Math.max(...newBoardList.map((board) => board.id)) + 1;
    newBoardList.push({
      id: newBoardId,
      title: newBoard.title,
      owner: newBoard.owner,
    });
    setBoardData(newBoardList);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Boards</h1>
      </header>
      <main>
        <BoardList boards={boardData} onClickBoard={clickToSelectBoard} />
        <p className="BoardHeading">
          Selected Board: {selectedBoard.title} -- {selectedBoard.owner}'s Board
        </p>
        <NewBoardForm addBoardCallBack={addBoard} />
        <div>
          <CardList board={selectedBoard} />
        </div>
      </main>
    </div>
  );
}

export default App;
