import './App.css';
import { useState } from 'react';
import axios from 'axios';
import BoardList from './Components/BoardList';

const boardDataList = [
  {
    board_id: 1,
    title: 'board1',
    owner: 'aria',
  },
  {
    board_id: 2,
    title: 'board2',
    owner: 'geiselle',
  },
  {
    board_id: 3,
    title: 'board3',
    owner: 'annie',
  },
  {
    board_id: 4,
    title: 'board4',
    owner: 'cristal',
  },
];
// call to read all boards, needs endpoint
// const getAllBoardsApi = () => {
//   return axios.get()
//   .then(response => {})
// };

function App() {
  const [boardData, setBoardData] = useState(boardDataList);
  const [boardTitle, setBoardTitle] = useState('');
  const [boardOwner, setBoardOwner] = useState('');
  // board click
  const handleBoardClick = (title, owner) => {
    setBoardTitle(title);
    setBoardOwner(owner);
  };

  return (
    <div>
      <h1>Inspiration Board</h1>
      <h2>Boards</h2>
      <BoardList boardData={boardData} handleBoardClick={handleBoardClick} />
      <h2>Selected Board</h2>
      <span>
        {boardTitle} - {boardOwner}
      </span>
    </div>
  );
}

export default App;
