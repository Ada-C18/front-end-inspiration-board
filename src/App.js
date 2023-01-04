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

// Post Board, no async needed

// ERR if no input
// Get ALL Boards
// Get One Board
// Delete All Boards

//Post Card, no async needed
// ERR if left blank
// ERR if over >40 characters
// Delete One Card

//Get ALL Boards, async needed
//Delete ONE Board, async needed
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

  //onSubmit Board Form
  //onSubmit Card Form

  //Update Card's Heart Count by one. Do I need Async to wait, DO I NEED find() task by id, it returns undefined if not found, but don't we want an error message instead?
  //Filter Card to Delete

  //Refresh Boards helper func for useEffect
  //Refresh Cards helper func for useEffect

  //React.useEffect hook for Boards
  useEffect(() => {
    refreshBoards();
  }, []);
  // React.useEffect for Cards. Can I use useEffect more than once per componenet? Do I need this to get the Cards???
  useEffect(() => {
    //[we do want to add boards as dependancy array, I think]
  });

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
