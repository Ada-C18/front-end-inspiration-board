import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import BoardList from "./components/BoardList";
import Board from "./components/Board";
import NewBoardForm from "./components/NewBoardForm";

// const boardsData = [
//   {
//     board_id: 1,
//     title: "Live your best life",
//     owner: "kkg",
//   },
//   {
//     board_id: 2,
//     title: "Do not disturb",
//     owner: "reyna",
//   },
// ];

function App() {
  const [boardsData, setBoardsData] = useState([
    {
      board_id: 1,
      title: "Live your best life",
      owner: "kkg",
    },
    {
      board_id: 2,
      title: "Do not disturb",
      owner: "reyna",
    },
  ]);

  const [selectedBoard, setSelectedBoard] = useState(null);
  const updateSelectedBoard = (board_id) => {
    setSelectedBoard(board_id);
  };
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);

  const addBoardData = (newBoard) => {
    const newBoardData = [...boardsData];
    // update when we access the data base later
    const nextId = Math.max(...newBoardData.map((board) => board.board_id)) + 1;
    newBoardData.push({
      board_id: nextId,
      title: newBoard.title,
      owner: newBoard.owner,
    });
    setBoardsData(newBoardData);
  };

  const getSelectedTitle = (boardsData) => {
    for (let board of boardsData) {
      if (board.board_id === selectedBoard) {
        return board.title;
        // const boardOwner = board.owner
      }
    }
  };

  const getSelectedOwner = (boardsData) => {
    for (let board of boardsData) {
      if (board.board_id === selectedBoard) {
        console.log(board.owner);
        return board.owner;
      }
    }
  };

  return (
    <div>
      <h1>Inspiration Board</h1>
      <BoardList boardsData={boardsData} updateSelceted={updateSelectedBoard} />
      <Board
        title={getSelectedTitle(boardsData)}
        owner={getSelectedOwner(boardsData)}
      ></Board>
      <NewBoardForm onAddBoard={addBoardData}></NewBoardForm>
    </div>
  );
}

export default App;
