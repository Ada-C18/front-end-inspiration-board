import "./App.css";
import BoardList from "./components/BoardList";
import { useState } from "react";

const testBoards = [
  { title: "Test Board One ", id: 1, owner: "Pavi" },
  { title: "Test Board Two", id: 2, owner: "Soliel" },
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
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Boards</h1>
      </header>
      <main>
        <BoardList
          boards={testBoards}
          onClickBoard={clickToSelectBoard}
          selectedBoard={selectedBoard}
        />
      </main>
    </div>
  );
}

export default App;
