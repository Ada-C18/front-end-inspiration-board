import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const boardsList = [
  {
    board_id: 1,
    title: 'Live your best life',
    owner: 'kkg',
  },
  {
    board_id: 2,
    title: 'Do not disturb',
    owner: 'reyna',
  },
];

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  // function getBoardTitles(boardsList) {
  //   let boardTitles = [];
  //   for (let board in boardsList) {
  //     boardTitles.push(board.title);
  //   }
  //   return boardTitles;
  // }
  const boardTitles = boardsList.map((board) => {
    return <li key={board.board_id}>{board.title}</li>;
  });
  return (
    <div>
      <h1>Inspiration Board</h1>
      <sec>{boardTitles}</sec>
    </div>
  );
}

export default App;
