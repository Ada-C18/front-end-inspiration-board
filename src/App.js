import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
// import axios from 'axios';
import BoardForm from './components/BoardForm';
import BoardList from './components/BoardList';
import CardForm from './components/CardForm';
import CardList from './components/CardList';

//POST,GET,DELETE TO API:

const REACT_APP_BACKEND_URL = 'http://localhost:5000';

// Destructure and convert python naming convention to JSON.
const boardApiToJson = (board) => {
  const { board_id: boardId, title, owner } = board;
  return { boardId, title, owner };
};

// Post Board, where shape of the Board Object {"title": "", "owner": ""}
const addBoard = (board) => {
  return (
    axios
      .post(`${REACT_APP_BACKEND_URL}/boards`, board)
      .then((response) => response.data.board)
      //need show the user a greyed out submit button
      .catch((err) => console.log(err))
  );
};

// Get ALL Boards, async is needed
const getBoards = async () => {
  try {
    const response = await axios.get(`${REACT_APP_BACKEND_URL}/boards`);
    return response.data.map(boardApiToJson);
  } catch (err) {
    console.log(err);
    throw new Error('Can not get your boards!');
  }
};
// Get One Board, async is needed
// const getOneBoard= async () => {
//   try{
//     const response= await axios.get(`${REACT_APP_BACKEND_URL}/boards/${boardId}`);
//     return response
//   }.catch (err){
//     console.log(err);
//     throw new Error('Can not get your board')
//   }
// }

// Delete All Boards, async is needed

//Post Card, Card Obj body {"message": "", "likesCount": 0, "deleteButton":{function}}
const addCard = (card) => {
  return axios
    .post(`${REACT_APP_BACKEND_URL}/boards/${boardId}/cards`, card)
    .then((response) => response.data.board.card)
    .catch((err) => console.log(err));
};

// ERR if left blank
// ERR if over >40 characters

// Delete One Card, aync is needed

//Get ALL Cards, async needed
//Delete ONE Card, async needed

// functions
//onSubmit board
//onShow Board (shows cards)
//onHide Board Form
//onSubmit card
//add heart
//delete card
//delete board if time permits

function App() {
  //React.useState Hook
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);

  //onSubmit Board Form
  const onSubmitBoardForm = (board) => {
    addBoard(board)
      .then((newBoard) => {
        setBoards((prevBoards) => [...prevBoards, newBoard]);
      })
      .catch((err) => console.log(err));
  };
  //onSubmit Card Form
  const onSubmitCardForm = (card) => {
    addcard(card)
      .then((newcard) => {
        setCards((prevCards) => [...prevCards, newCard]);
      })
      .catch((err) => console.log(err));
  };

  //Refresh Boards helper func for useEffect, needs ASYNC
  const refreshBoards = async () => {
    try {
      //getBoards() returns a response json body of the list of boards
      const boards = await getBoards();
      setBoards(boards);
    } catch (err) {
      console.log(err.message);
      throw new Error('Can not refresh tasks!');
    }
  };
  //React.useEffect hook for Boards
  useEffect(() => {
    refreshBoards();
  }, []);

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
        <BoardForm />
        <BoardList />
        <CardForm />
        <CardList />
      </main>
    </div>
  );
}

export default App;
