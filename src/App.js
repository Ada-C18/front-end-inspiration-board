import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
// import axios from 'axios';
import BoardForm from './components/BoardForm';
import BoardList from './components/BoardList';
import CardForm from './components/CardForm';
import CardList from './components/BoardList';

//POST,GET,DELETE TO API:

const REACT_APP_BACKEND_URL = 'http://localhost:5000';

// Destructure and convert python naming convention to JSON.
const boardApiToJson = (board) => {
  const { board_id: boardId, title, owner } = board;
  return { boardId, title, owner };
};

// Post Board Object {"title": "", "owner": ""}
const addBoardAPI = (board) => {
  return (
    axios
      .post(`${REACT_APP_BACKEND_URL}/boards`, board)
      .then((response) => response.data.board)
      //need show the user a greyed out submit button
      .catch((err) => console.log(err))
  );
};

// Get ALL Boards, async and map is needed
const getBoardsAPI = async () => {
  try {
    const response = await axios.get(`${REACT_APP_BACKEND_URL}/boards`);
    return response.data.map(boardApiToJson);
  } catch (err) {
    console.log(err);
    throw new Error('Can not get your boards!');
  }
};

//Update One board to add or delete from it's CardList componenet? Or do we just add CardList to the boards useEffect dependancy array???
const getBoardAPI = async (boardId) => {
  try {
    const response = await axios.get(
      `${REACT_APP_BACKEND_URL}/boards/${boardId}/cards`,boardId
    );
    return boardApiToJson(response.data.board);
  } catch (err) {
    console.log(err);
    throw new Error(`Could not get board ${boardId}`);
  }
};

// Delete All Boards, async is needed

// Destructure Card and parse to JSON:
// const cardApiToJson= {card_id: cardId, board_id: boardId, likes_count: likesCount, message, board}

//Post Card, Card Obj body {"message": "", "likesCount": 0, "deleteButton":{function}}
// const addCardAPI = (card) => {
//   return axios
//     .post(`${REACT_APP_BACKEND_URL}/boards/${boardId}/cards`, card)
//     .then((response) => response.data.board.card)
//     .catch((err) => console.log(err));
// };
// ERR if left blank
// ERR if over >40 characters

//Get ALL Cards, async needed
// const getCardAPI = (cards) => {
//   return axios 
//   .get(`${REACT_APP_BACKEND_URL}/boards/${boardId}/cards`, cards)
// }
//Update One Card
//Delete ONE Card, async needed

// Higher order functions inside FUNCTION APP() sent at props
//BOARD FUNCTIONS:
//1. onSubmit board
//2. Select Board (shows cards of that boardID)
//3. onChange hide Board Form
//4. delete board if time permits

//CARD FUNCTIONS:
//1. onSubmit card
//2. onChange add like
//3. onChange delete card

function App() {
  //React.useState Hook
  const [boards, setBoards] = useState([]);
  // const [cards, setCards] = useState([]);

  //onSubmit Board Form
  const onSubmitBoardForm = (board) => {
    addBoardAPI(board)
      .then((newBoard) => {
        setBoards((prevBoards) => [...prevBoards, newBoard]);
      })
      .catch((err) => console.log(err));
  };

  // Get One Board, async is needed
  const selectBoard = async (id) => {
    const board = boards.find((board) => board.boardId === id);
    if (!board) {
      return;
    }
    try {
      const response = await getBoardAPI(id);

    } catch (err) {
      console.log(err);
      throw new Error(`Could not get board ${board.boardId}`);
    }
  };

  //Refresh Boards helper func for useEffect, needs ASYNC
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

  //onSubmit Card Form
  // const onSubmitCardForm = (card) => {
  //   addcard(card)
  //     .then((newcard) => {
  //       setCards((prevCards) => [...prevCards, newCard]);
  //     })
  //     .catch((err) => console.log(err));
  // };

  //Update Card's Heart Count by one. Do I need Async to wait, DO I NEED find() task by id, it returns undefined if not found, but don't we want an error message instead?
  //Filter Card to Delete
  //Refresh Cards helper func for useEffect

  // React.useEffect for Cards. Can I use useEffect more than once per componenet? Do I need this to get the Cards???
  // useEffect(() => {
  //[we do want to add boards as dependancy array, I think]
  // });

  return (
    <div className='App'>
      <header>
        <h2>Inspiration Board</h2>
      </header>
      <main>
        <BoardForm onSubmitBoardForm={onSubmitBoardForm} />
        <BoardList
          className='board_list'
          boards={boards}
          selectBoard={selectBoard}
        />
        <CardForm />
        <CardList/>
      </main>
    </div>
  );
}

export default App;
