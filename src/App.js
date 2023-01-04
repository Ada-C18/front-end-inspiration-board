import './App.css';
import { useState } from 'react';
import axios from 'axios';
import BoardList from './Components/BoardList';
import NewBoardForm from './Components/NewBoardForm';

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

  
  // New Board Form
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const toggleNewBoardForm = () => {setIsBoardFormVisible(!isBoardFormVisible)}

  const addBoard = (boardData) => {
    axios
      .post(URL, boardData)
      .then((response) => {
        const newBoards = [...boardData];
        newBoards.push({ title: response.data.title, owner: response.data.owner });
        setBoardData(newBoards);
      })
      .catch((error) => console.log(error));
  };


  return (
    <div>
      <h1>Inspiration Board</h1>
      <h2>Boards</h2>
      <BoardList boardData={boardData} handleBoardClick={handleBoardClick} />
      <h2>Selected Board</h2>
      <span>
        {boardTitle} - {boardOwner}
      <h3>Create a New Board</h3>
      </span>
      {isBoardFormVisible ? <NewBoardForm addBoardCallback={addBoard} /> : ''}
      <button onClick={toggleNewBoardForm} >
        {isBoardFormVisible ? 'Hide New Board Form' : 'Show New Board Form'}
        </button>
    </div>
  );
}

export default App;
