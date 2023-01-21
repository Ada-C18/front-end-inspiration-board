import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';


// import axios from 'axios';
import {
  URL,
  boardApiToJson,
  addBoardAPI,
  addCardAPI,
  getBoardsAPI,
  getCardsAPI,
  deleteBoardAPI,
  deleteCardAPI,
  likeCardAPI,
} from './api';
import BoardForm from './components/BoardForm';
import BoardList from './components/BoardList';
import CardForm from './components/CardForm';
import CardList from './components/CardList';

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
  // const defaultSelectedBoard = {
  //   title: '',
  //   owner: '',
  //   boardId: null,
  // } USE THIS IF I WANT AN ACTUAL OBJECT TO LOAD, NULL TO MAKE MY RENDER LOGIC WORK.

  //ON SELECT BOARD HERE!!!!!!!!
  const [selectedBoard, setSelectedBoard] = useState(null);
  const onSelectBoard = async (boardId) => {
    try {
      const response = await axios.get(
        `${URL}/boards/${boardId}`
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
      if (boardId === selectedBoard.boardId) {
        setSelectedBoard(null);
        //setSelectedBoard(defaultSelectedBoard); IF I WANT A TRUTHY OBJECT THAT IS EMPTY, NULL IF I WANT THE MESSAGE I WANT. SAME WITH USESTATE SETUP. NULL TO MAKE CONDITION WORK ON FIRST RENDER AND WHEN THE BOARD IS DELETED, OTHERWISE I'LL GET A '-' FOR AN EMPTY OBJECT.
      }
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
    return likeCardAPI(cardId).then((likedCard) => {
      setCards((cards) =>
        cards.map((card) => {
          if (card.cardId === likedCard.cardId) {
            return likedCard;
          } else {
            return card;
          }
        })
      );
    });
  };

  const [sortCards, setSortCards] = useState('likes');

  const handleSortedCards = (sortType) => {
    if (sortType === 'likes') {
      setCards((prevCards) =>
        prevCards.sort((a, b) => b.likesCount - a.likesCount)
      );
    } else if (sortType === 'cardId') {
      setCards((prevCards) => prevCards.sort((a, b) => a.cardId - b.cardId));
    } else if (sortType === 'alphabetically') {
      setCards((prevCards) =>
        prevCards.sort((a, b) => a.message.localeCompare(b.message))
      );
    }
    setSortCards(sortType);
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
    setShowForm(!showForm);
  };

  return (
    <div>
      <header className='board-card-container'>
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div>
          <button onClick={handleHideForm}>Hide Form</button>
          {showForm && <BoardForm className='new-board-form__container new-card-form__container' handleBoardSubmit={handleBoardSubmit} />}
        </div>
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
           {
              <CardForm
              className='board-card-container new-board-form__toggle-btn'
                boardId={selectedBoard.boardId}
                handleCardSubmit={handleCardSubmit}
              />
            }
            <CardList
            className='board-card-container'
              cards={cards}
              boardId={selectedBoard.boardId}
              onLikesCount={handleLikesCount}
              onDeleteCard={handleCardDelete}
              sortCards={sortCards}
              onSortedCards={handleSortedCards}
            />
           
          </>
        )}
      </main>
    </div>
  );
};

export default App;
