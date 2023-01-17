import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import BoardList from './components/BoardList';
import axios from 'axios';
import NewBoardForm from './components/NewBoardForm';
import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';
import card from './components/Card';

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [showCard, setShowCard] = useState(true);
  const [cards, setCards] = useState([]);

  const BOARD_URL = 'http://127.0.0.1:5000/boards';
  const CARD_URL = 'http://127.0.0.1:5000/cards';

  const getAllBoards = () => {
    axios
      .get(BOARD_URL)
      .then((response) => {
        setBoards(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllBoards();
  }, []);

  const selectBoard = (board_id, title, owner, cards) => {
    const board = { board_id, title, owner, cards };
    setSelectedBoard(board);
    axios
      .get(`${BOARD_URL}/${board_id}`)
      .then((result) => {
        console.log(result.data);
        setCards(result.data.cards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewBoard = (newBoard) => {
    axios
      .post(BOARD_URL, newBoard)
      .then((result) => {
        console.log(result.data);
        const newBoardData = {
          board_id: result.data.board.board_id,
          title: result.data.board.title,
          owner: result.data.board.owner
        };
        setBoards([...boards, newBoardData]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewCard = (newCard) => {
    console.log(newCard);
    axios
      .post(CARD_URL, newCard)
      .then((result) => {
        const newCardData = {
          board_id: selectedBoard.board_id,
          card_id: result.data.card.card_id,
          message: result.data.card.message
        };
        // new function
        connectCardToBoard(newCardData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const connectCardToBoard = (cardData) => {
    console.log(cardData);
    axios
      .patch(`${BOARD_URL}/${cardData.board_id}/card`, cardData)
      .then((result) => {
        console.log(result.data);
        setCards([...cards, result.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <h2>Boards</h2>
        <BoardList boards={boards} onSelectBoard={selectBoard} />
        <div>
          <h2>Selected Board</h2>
          <h4>
            {selectedBoard
              ? `${selectedBoard.title} - ${selectedBoard.owner}`
              : 'Select a board from the list'}
          </h4>
        </div>
        <h2>Create a new board</h2>
        {showForm ? <NewBoardForm addNewBoardCallback={addNewBoard} /> : ''}
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Hide new board form' : 'Show new board form'}
        </button>
        <div>
          <h2>Cards</h2>
          {selectedBoard ? (
            <div>
              <CardList cards={selectedBoard.cards} />
              {showCard ? <NewCardForm addNewCardCallback={addNewCard} /> : ''}
            </div>
          ) : (
            ''
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
