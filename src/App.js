import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Board from './components/Board'
import NewBoardForm from './components/NewBoardForm';

const kBaseUrl = process.env.REACT_APP_BACKEND_URL

const convertBoardFromApi = (apiBoard) => {
  const {board_id, ...rest} = apiBoard;
  const newBoard = {boardId: board_id, ...rest}
  return newBoard
}

const convertCardFromApi = (apiCard) => {
  const {card_id, likes_count, ...rest} = apiCard;
  const newCard = {cardId: card_id, likesCount: likes_count, ...rest}
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

const postNewCardApi = (card) => {
  return axios.post(`${kBaseUrl}/${card.cardId}/cards`, card)
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
  // url requires the card id

}

function App() {
  const [boardData, setBoardData] = useState([])
  const [selectedBoard, setSelectedBoard] = useState({})
  const [cardData, setCardData] = useState([])

  const getAllBoards = async () => {
    const boards = await getAllBoardsApi();
    setBoardData(boards);
  };

  useEffect(() => {
    getAllBoards();
  }, [boardData]);

  // const [cardData, setCardData] = useState([])
  // useEffect(() => {
  //   if (selectedBoard) {
  //     const boardId = selectedBoard.boardId
  //     getCardsForBoardApi(boardId)
  //     .then(cards => {
  //       return setCardData(cards.data);
  //     })  
  //   }
  // }, [selectedBoard])

  const selectBoard = async (id) => {

    const board = await getOneBoardAPI(id);
    setSelectedBoard(board)

    // console.log("u made it!")
    // for (const board in boardData) {
    //   if (board.id === id) {
    //     setSelectedBoard(board)
    //   }
    // }
  }
  
  const handleBoardSubmit = (data) => {
    postNewBoardApi(data)
    .then(newBoard => {
      setBoardData([...boardData, newBoard])
    })
  }

  const handleCardSubmit = (data) => {
    postNewCardApi(data)


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
          {selectedBoard ? '' : `${selectBoard.title} - ${selectBoard.owner}`}
        </div>
      <h2>Create a New Board</h2>
          <NewBoardForm handleBoardSubmit={handleBoardSubmit} />
      <h2>Cards {selectedBoard ? '' : `for ${selectedBoard.title}`}</h2>
    </div>
  );
}

export default App;
