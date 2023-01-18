import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Board from './components/Board';
import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';

const kBaseUrl = process.env.REACT_APP_BACKEND_URL

const convertBoardFromApi = (apiBoard) => {
  const {board_id, ...rest} = apiBoard;
  const newBoard = {boardId: board_id, ...rest}
  return newBoard
}

const convertCardFromApi = (apiCard) => {
  const {card_id, likes_count, board_id, ...rest} = apiCard;
  const newCard = {cardId: card_id, likesCount: likes_count, boardId: board_id, ...rest}
  return newCard
}

const getAllBoardsApi = async () => {
  const response = await axios.get(`${kBaseUrl}/boards`)
  return response.data.map(convertBoardFromApi)
}

const getOneBoardAPI = async (id) => {
  const response = await axios.get(`${kBaseUrl}/boards/${id}`)
  return convertBoardFromApi(response.data)
}

const postNewBoardApi = (boardData) => {
  return axios.post(`${kBaseUrl}/boards`, boardData)
  .then(response => {
    return convertBoardFromApi(response.data);
  })  
}

const getCardsForBoardApi = async (boardId) => {
  const response = await axios.get(`${kBaseUrl}/boards/${boardId}/cards`)
  return response.data.map(convertCardFromApi)
}

// uses the python variable style SORRRYY!!!
const postNewCardApi = (card) => {
  return axios.post(`${kBaseUrl}/boards/${card.board_id}/cards`, card)
  .then(response => {
    return convertCardFromApi(response.data);
  })  

}

const deleteCardApi = (card) => {
  axios.delete(`${kBaseUrl}/card/${card.cardId}`)
  .then(response => {
    return convertCardFromApi(response.data)
  })

}

const updateLikesCountApi = (card) => {
  axios.put(`${kBaseUrl}/card/${card.cardId}`)
  .then(response => {
    return convertCardFromApi(response.data)
  })
}

function App() {
  const [boardData, setBoardData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState({})
  const [cardData, setCardData] = useState([])

  const getAllBoards = async () => {
    const boards = await getAllBoardsApi();
    setBoardData(boards);
  };

  const getCardsForBoard = async (boardId) => {
    const cards = await getCardsForBoardApi(boardId);
    setCardData(cards);
    console.log("cards return", cards)
  }
  console.log("card data", cardData)

  // const getOneBoard = async (id) => {
  //   const board = await getOneBoardAPI(id);
  //   return board; 
  // }

  useEffect(() => {
    getAllBoards();
  }, []);
  // had a dependency of boardData but was doing constant requests

  // useEffect(() => {
  //   const boardId = selectedBoard.boardId
  //   getCardsForBoard(boardId)
  // }, [selectedBoard])

  // WHY ARE U YELLING AT ME? ask ta later
  // useEffect(() => {
  //   const boardId = selectedBoard.boardId
  //   getCardsForBoard(boardId)
  // }, [cardData])

  const selectBoard = async (id) => {
    const board = await getOneBoardAPI(id);
    setSelectedBoard(board);
    console.log("board id", id);
    getCardsForBoard(board.boardId);
  }
  
  const handleBoardSubmit = (data) => {
    postNewBoardApi(data)
    .then(newBoard => {
      setBoardData([...boardData, newBoard])
    })
  }

  const handleCardSubmit = (data) => {
    postNewCardApi(data)
    .then(newCard => {
      setCardData([...cardData, newCard])
    })

  }

  const handleLikeCard = (data) => {

  }

  const handleDeleteCard = (data) => {

  }

  return (
    <div className="App">
      <h1>Team Squirrel</h1>
      <h2>Boards</h2>
        <div id="boards">
        {boardData.map((board) => (
          <Board 
            boardId={board.boardId}
            title={board.title}
            owner={board.owner}
            onSelectBoard={selectBoard}
            key={board.boardId}
          />
        ))}
        </div>
      <h2>Selected Board</h2>
        <div>
          {selectedBoard ? `${selectedBoard.title} - ${selectedBoard.owner}` : ''}
        </div>
      <h2>Create a New Board</h2>
          <NewBoardForm handleBoardSubmit={handleBoardSubmit} />
      <h2>Cards {selectedBoard ? `for ${selectedBoard.title}` : ''}</h2>
          <div id="cards">
            <CardList 
              cardData={cardData}
            />
          </div>
      <h2>Create a New Card</h2>
          <NewCardForm 
            handleCardSubmit={handleCardSubmit}
            boardId={selectedBoard.boardId}
          />
    </div>
  );
}

export default App;
