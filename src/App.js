import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import { useState } from "react";

// const BOARDDATA = [
//   {
//     id: 1,
//     title: "hello world",
//     owner: "123",
//   },
//   {
//     id: 2,
//     title: "hello east coast",
//     owner: "456",
//   },
// ];

function App() {
  const [boardData, setBoardData] = useState([]);

  const updateBoardData = (updatedBoard) => {
    const boards = boardData.map((board) => {
      if (board.id === updatedBoard.id) {
        return updatedBoard;
      } else {
        return board;
      }
    });
    setBoardData(boards);
  };

  return (
    <div>
      <header>INSPIRATION BOARD</header>
      <section>
        <h1 className="board"> Boards </h1>
        {/* display a list of boards */} {boardData}
        <h1 className="board"> Selected Board </h1>
        <h1 className="board"> Create A New Board </h1>
        <NewBoardForm onUpdateBoardData={updateBoardData} />
      </section>
      <section>
        <h1 className="card"> Cards for Reminders </h1>
        <h1 className="card"> Create a New Card</h1>
      </section>
      <footer>
        <p> Click here to delete all boards and cards</p>
      </footer>
    </div>
  );
}

export default App;
