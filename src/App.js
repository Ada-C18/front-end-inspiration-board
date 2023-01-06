import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BoardList from './Components/BoardList';
import NewBoardForm from './Components/NewBoardForm';
import CardList from './Components/CardList';
import NewCardForm from './Components/NewCardForm';

// const boardDataList = [
//   {
//     board_id: 1,
//     title: 'board1',
//     owner: 'aria',
//   },
//   {
//     board_id: 2,
//     title: 'board2',
//     owner: 'geiselle',
//   },
//   {
//     board_id: 3,
//     title: 'board3',
//     owner: 'annie',
//   },
//   {
//     board_id: 4,
//     title: 'board4',
//     owner: 'cristal',
//   },
// ];

const getAllBoardsApi = () => {
  return axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/board`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

function App() {
  const [allBoardData, setAllBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState('');
  const [showCardForm, setShowCardForm] = useState(false);

  // Board click
  const handleBoardClick = (title, owner) => {
    setSelectedBoard({ title: title, owner: owner });
    setShowCardForm(true);
  };

  // Get all boards
  const getAllBoards = () => {
    return getAllBoardsApi()
      .then((boards) => {
        setAllBoardData(boards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllBoards();
  }, []);

  // New Board Form
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const toggleNewBoardForm = () => {
    setIsBoardFormVisible(!isBoardFormVisible);
  };

  const addBoard = (boardData) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/board`, boardData)
      .then((response) => {
        const newBoards = [...allBoardData];
        newBoards.push({ ...response.data.board });
        setAllBoardData(newBoards);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Inspiration Board</h1>
      <h2>Boards</h2>
      <BoardList boardData={allBoardData} handleBoardClick={handleBoardClick} />
      <h2>Selected Board</h2>
      {!selectedBoard ? (
        <span>Select a board!</span>
      ) : (
        <span>
          {selectedBoard.title} - {selectedBoard.owner}
        </span>
      )}
      <h3>Create a New Board</h3>
      {isBoardFormVisible ? <NewBoardForm addBoardCallback={addBoard} /> : ''}
      <button onClick={toggleNewBoardForm}>
        {isBoardFormVisible ? 'Hide New Board Form' : 'Show New Board Form'}
      </button>
      <section>
        {selectedBoard.board_id ? <CardList board={selectedBoard} /> : ''}
      </section>

      {/* Card Form */}
      {showCardForm ? (
        <section>
          <h3>Create a New Card</h3>
          <NewCardForm />
        </section>
      ) : (
        <section></section>
      )}
    </div>
  );
}

export default App;
