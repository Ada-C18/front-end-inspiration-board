import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
// import axios from 'axios';
import BoardForm from './components/BoardForm';
import BoardList from './components/BoardList';
import CardForm from './components/CardForm';
import CardList from './components/CardList';

const REACT_APP_BACKEND_URL = 'http://localhost:5000';

// Destructure and convert python naming convention to JSON.
const boardApiToJson = (board) => {
  const { board_id: boardId, title, owner } = board;
  return { boardId, title, owner };
};

// Destructure and convert Card to Json
const cardApiToJson = (card) => {
  const {
    card_id: cardId,
    board_id: boardId,
    likes_count: likesCount,
    message,
    board,
  } = card;
  return { cardId, boardId, likesCount, message, board };
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

// Post Card Obj {"message":""}
const addCardAPI = (cardId, boardId) => {
  return axios
    .post(`${REACT_APP_BACKEND_URL}/boards/${boardId}/cards`, {
      card_id: cardId,
    })
    .then((response) => response.data.board.card)
    .catch((err) => console.log(err));
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


//Get Cards from API
const getCardsAPI = async (boardId) => {
  try {
    const response = await axios.get(
      `${REACT_APP_BACKEND_URL}/boards/${boardId}/cards`
    );
    return response.data.map(cardApiToJson);
  } catch (err) {
    console.log(err);
    throw new Error('Nope, get your cards');
  }
};

// Delete a Board from the API, this goes into the onClick that deletes the board
const deleteBoardAPI = async (boardId) => {
  try {
    await axios.delete(`${REACT_APP_BACKEND_URL}/boards/${boardId}`);
  } catch (error) {
    console.log(error);
    throw new Error(`Could not delete your ${boardId}.`);
  }
};

const deleteCardAPI = async (boardId, cardId) => {
  try {
    await axios.delete(`${REACT_APP_BACKEND_URL}/boards/${boardId}/cards/${cardId}`);
  } catch (error) {
    console.log(error);
    throw new Error(`Could not delete card ${cardId} from board ${boardId}.`);
  }
};

// Higher order functions inside FUNCTION APP() sent as props
//BOARD FUNCTIONS:
//1. onSubmit Board (takes in )
//2. onSelect Board in BoardList Componenet (shows cards of that boardID)
//3. onChange hide Board Form
//4. delete board if time permits

const App = () => {

  //STATE
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null)
  const [cards, setCards] = useState([]);

  //HANDLE

  //onSubmit Board Form, adds new board to list
  const handleBoardSubmit = (board) => {
    addBoardAPI(board)
      .then((newBoard) => {
        setBoards((prevBoards) => [...prevBoards, newBoard]);
      })
      .catch((err) => console.log(err));
  };

  // Get One Board Promise, get CardsList for that boardId.
  const handleBoardSelect = useCallback(async (boardId) => {
    const board = boards.find((boardID) => board.boardId === boardId);
    if (!boardId) {
      return;
    }
    try {
      //retrieves cardlist
      const cardlist=await getCardsAPI(boardId);
      //this uses state of selected board and marries is to cardlist
      setSelectedBoard(board)
      setCards(cardlist)
    } catch (err) {
      console.log(err);
      throw new Error(`Could not get board ${board.boardId}`);
    }
  },[boards]);

    // useCallback to optimize handleBoardSelect

    // const handleBoardSelect = useCallback(async (boardId) => {
    //   try {
    //     const selectedBoard = await getBoardAPI(boardId);
    //     const cards = await getCardsAPI(boardId);
    //     setSelectedBoard(selectedBoard);
    //     setCards(cards);
       
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }, []);

  const handleBoardDelete = async (board) => {
    try {
      await deleteBoardAPI(board);
      setBoards((prevBoards) => {
        return prevBoards.filter((boardId) => board.boardId !== boardId);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCardDelete = async (card) => {
    try {
      await deleteBoardAPI(card);
      setBoards((prevCards) => {
        return prevCards.filter((cardId) => card.cardId !== cardId);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLikesCount = useCallback((cardId) => {
    setCards((prevCards) =>
      prevCards.map((card) => {
        if (card.cardId === cardId) {
          return { ...card, likesCount: card.likesCount + 1 };
        }
        return card;
      })
    );
  }, []);

  const handleCardSubmit = useCallback((cardId) => {
    addCardAPI(cardId).then((newCard) => {
      setCards((prevCards) => [...prevCards, newCard]);
    });
  }, []);


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


 
  return (
    <div className='App'>
      <header>
        <h2>Inspiration Board</h2>
      </header>
      <main>
        <BoardForm handleBoardSubmit={handleBoardSubmit} />
        <BoardList
          className='board_list'
          boards={boards}
          handleBoardSelect={handleBoardSelect}
          handleBoardDelete={handleBoardDelete}
        />
        <CardList cards={cards} handleCardDelete={handleCardDelete} handleLikesCount={handleLikesCount}/>
        <CardForm handleCardSubmit={handleCardSubmit} />
      </main>
    </div>
  );
};

export default App;

//How to post new card associated with a boardID, nested promise
//How to read cardList assoicated with a boardID, nested promise
