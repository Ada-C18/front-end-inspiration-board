import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
// import axios from 'axios';
import { REACT_APP_BACKEND_URL, boardApiToJson, cardApiToJson, addBoardAPI, addCardAPI, getBoardsAPI, getCardsAPI, deleteBoardAPI, deleteCardAPI, likeCardAPI} from './api';
import BoardForm from './components/BoardForm';
import BoardList from './components/BoardList';
import CardForm from './components/CardForm';
import CardList from './components/CardList';

// Higher order functions inside FUNCTION APP() sent as props
//BOARD FUNCTIONS:
//1. onSubmit Board (takes in )
//2. onSelect Board in BoardList Componenet (shows cards of that boardID)
//3. onChange hide Board Form
//4. delete board if time permits

const App = () => {

  const [boards, setBoards] = useState([]);
  
  const handleBoardSubmit = (board) => {
    addBoardAPI(board)
      .then((newBoard) => {
        setBoards((prevBoards) => [...prevBoards, newBoard]);
      })
      .catch((err) => console.log(err));
  };


  const [cards, setCards] = useState([]);

  const handleCardSubmit = (card, boardId) => {
    addCardAPI(card, boardId).then((newCards) => {
      setCards(newCards);
      console.log(newCards);
    });
  };

  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    boardId: null,
  });
  const onSelectBoard = async (boardId) => {
    try {
      const response = await axios.get(
        `${REACT_APP_BACKEND_URL}/boards/${boardId}`
      );
      setSelectedBoard(boardApiToJson(response.data));
      const cards = await getCardsAPI(boardId);
      setCards(cards);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBoardDelete = async (boardId) => {
    try {
      await deleteBoardAPI(boardId);
      setBoards((prevBoards) => {
        return prevBoards.filter((board) => board.boardId !== boardId);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCardDelete = async (cardId) => {
    try {
      await deleteCardAPI(cardId);
      setCards((prevCards) => {
        return prevCards.filter((card) => {
          return card.cardId !== cardId;
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLikesCount = (cardId) => {
    return likeCardAPI(cardId)
    .then(likedCard => {
      setCards(cards => cards.map(card => {
        if(card.cardId === likedCard.cardId) {
          return likedCard;
        } else {
          return card;
        }
      }));
    })
  };

  //Refresh Boards helper func for useEffect, NEEDS PROMISE
  const refreshBoards = async () => {
    try {
      //getBoards() returns a response json body of the list of boards
      const boards = await getBoardsAPI();
      setBoards(boards);
    } catch (err) {
      console.log(err.message);
      throw new Error('Can not refresh boards!');
    }
  };

  //React.useEffect hook for Boards
  useEffect(() => {
    refreshBoards();
  }, []);

  const refreshCards = async () => {
    try {
      //getBoards() returns a response json body of the list of boards
      const boards = await getCardsAPI();
      setCards(boards);
    } catch (err) {
      console.log(err.message);
      throw new Error('Can not refresh boards!');
    }
  };

  //React.useEffect hook for Boards
  useEffect(() => {
    refreshCards();
  }, []);


  const [showForm, setShowForm] = useState(true);

  const handleHideForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className='App'>
      <header>
        <h2>Inspiration Board</h2>
      </header>
      <main>
        <div>
          <button onClick={handleHideForm}>Hide Form</button>
       {showForm && <BoardForm handleBoardSubmit={handleBoardSubmit} />}</div>
        <BoardList
          className='board_list'
          boards={boards}
          onSelectBoard={onSelectBoard}
          onDeleteBoard={handleBoardDelete}
        />
        <h2>Selected Board</h2>
        <p>
          {selectedBoard
            ? `${selectedBoard.title} - ${selectedBoard.owner}`
            : 'Select a Board from the Board List!'}
        </p>
        {selectedBoard && (
          <>
            <CardList
              cards={cards}
              boardId={selectedBoard.boardId}
              onLikesCount={handleLikesCount}
              onDeleteCard={handleCardDelete}
            />
            {
              <CardForm
                boardId={selectedBoard.boardId}
                handleCardSubmit={handleCardSubmit}
              />
            }
          </>
        )}
      </main>
    </div>
  );
};

export default App;
