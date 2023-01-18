import Board from "./components/Board";
import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import CardList from "./components/CardList";
import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    board_id: null
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
    }).then((response) => {
      console.log('Response', response)
      setBoardData(response.data);
    })
  }, []);

  const selectBoard = (board) => {
    setSelectedBoard(board)
  };

  const boardElements = boardData.map((board) => {
    return (
      <li>
        {/* {board} */}
        <Board
          board={board}
          onBoardSelect={selectBoard}
        ></Board>
      </li>
    )
  });

  const createNewBoard = (newBoard) => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
    .then((response) => {
      console.log("Response:", response.data.board);
      const boards = [...boardData];
      boards.push(response.data.board);
      setBoardData(boards);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t create a new board.');
    });
  }

  const [boardFormVisibility, setBoardFormVisibility] = useState(true);
  const toggleNewBoardForm = () => {
    setBoardFormVisibility(!boardFormVisibility)
  };

  const deleteAllData = () => {
    if (window.confirm('Are you really sure you want to delete everything?')) {
      axios.delete(`${process.env.REACT_APP_BACKEND_URL}/destroy_all`)
      .then((response) => {
        console.log('response', response.data);
        setBoardData([response.data.default_board]);
        setSelectedBoard({
          title: '',
          owner: '',
          board_id: null
        });
      }).catch((error) => {
        console.log('Error:', error);
        alert('Something went wrong! :(');
      });
    }
  };

  return (
    <div className="page__container">
      <div className="content__container">
        <h1>Inspiration Board</h1>
        <section className="boards__container">
          <section>
            <h2>Boards</h2>
            <ol className="boards__list">
              {boardElements}
            </ol>
          </section>
          <section>
            <h2>Selected Boards</h2>
            <p>{selectedBoard.board_id ? `${selectedBoard.title} - ${selectedBoard.owner}` : 'Select a Board from the Board List:'}</p>
          </section>
          <section className='new-board-form__container'>
            <h2>Create a New Board</h2>
            {boardFormVisibility ? <NewBoardForm createNewBoard={createNewBoard}></NewBoardForm> : ''}
            <span onClick={toggleNewBoardForm} className='new-board-form__toggle-btn'>{boardFormVisibility ? 'Hide New Board Form' : 'Show New Board Form'}</span>
          </section>
        </section>
        {selectedBoard.board_id ? <CardList board={selectedBoard}></CardList> : ''}
      </div>
      <footer>Click <span onClick={deleteAllData} className='footer__delete-btn'>here</span> to delete all boards and cards!</footer>
    </div>
  );
};


export default App;
