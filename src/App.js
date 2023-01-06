import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
// import axios from 'axios';
import BoardForm from './components/BoardForm';
import BoardList from './components/BoardList';

const REACT_APP_BACKEND_URL = 'http://localhost:5000';

// Destructure and convert python naming convention to JSON.
const boardApiToJson = (board) => {
  const { board_id: boardId, title, owner } = board;
  return { boardId, title, owner };
};

//POST,GET,DELETE Promises:

// Post Board Object {"title": "", "owner": ""} This is used in OnSubmitFormBoard, to submit the Board when clicking the button
const addBoardAPI = (board) => {
  return (
    axios
      .post(`${REACT_APP_BACKEND_URL}/boards`, board)
      .then((response) => response.data.board)
      //need show the user a greyed out submit button
      .catch((err) => console.log(err))
  );
};

// Get ALL Boards, the promise returned is the servers response of the data, [ Board1, Board2, Board3 ]
const getBoardsAPI = async () => {
  try {
    const response = await axios.get(`${REACT_APP_BACKEND_URL}/boards`);
    return response.data.map(boardApiToJson);
  } catch (err) {
    console.log(err);
    throw new Error('Can not get your boards!');
  }
};

// Get ONE board from the BoardList and this Board componenet contains and renders a CardList componenet. This goes into a button that will trigger this promise
const getBoardAPI = async (boardId) => {
  try {
    const response = await axios.get(
      `${REACT_APP_BACKEND_URL}/boards/${boardId}/cards`,
      boardId
    );
    return response.data.boardId(boardApiToJson);
  } catch (err) {
    console.log(err);
    throw new Error(`Could not get board ${boardId}`);
  }
};

// Delete a Board from the API, this goes into the onClick that deletes the board
const deleteBoardAPI = async (boardId) => {
  try {
    await axios.delete(`${REACT_APP_BACKEND_URL}/${boardId}`);
  } catch (error) {
    console.log(error);
    throw new Error(`Could not delete your ${boardId}.`);
  }
};


// Higher order functions inside FUNCTION APP() sent as props
//BOARD FUNCTIONS:
//1. onSubmit Board (takes in )
//2. onSelect Board in BoardList Componenet (shows cards of that boardID)
//3. onChange hide Board Form
//4. delete board if time permits

const App = () => {
  //React.useState Hook
  const [boards, setBoards] = useState([]);

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
      return await getBoardAPI(id);
    } catch (err) {
      console.log(err);
      throw new Error(`Could not get board ${board.boardId}`);
    }
  };
  const deleteBoard = async (board) => {
    try {
      await deleteBoardAPI(board);
      setBoards((prevBoards) => {
        return prevBoards.filter((boardId) => board.boardId !== boardId);
      });
    } catch (error) {
      console.log(error.message);
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
          deleteBoard={deleteBoard}
        />
      </main>
    </div>
  );
};

export default App;
