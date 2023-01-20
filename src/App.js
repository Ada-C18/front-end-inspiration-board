import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import Board from "./components/Board";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

const convertBoardFromApi = (apiBoard) => {
  const { board_id, ...rest } = apiBoard;
  const newBoard = { boardId: board_id, ...rest };
  return newBoard;
};

const convertCardFromApi = (apiCard) => {
  const { card_id, likes_count, board_id, ...rest } = apiCard;
  const newCard = {
    cardId: card_id,
    likesCount: likes_count,
    boardId: board_id,
    ...rest,
  };
  return newCard;
};

const getAllBoardsApi = async () => {
  const response = await axios.get(`${kBaseUrl}/boards`);
  return response.data.map(convertBoardFromApi);
};

const getOneBoardAPI = async (id) => {
  const response = await axios.get(`${kBaseUrl}/boards/${id}`);
  return convertBoardFromApi(response.data);
};

const postNewBoardApi = (boardData) => {
  return axios.post(`${kBaseUrl}/boards`, boardData).then((response) => {
    return convertBoardFromApi(response.data);
  });
};

const getCardsForBoardApi = async (boardId) => {
  const response = await axios.get(`${kBaseUrl}/boards/${boardId}/cards`);
  return response.data.map(convertCardFromApi);
};

const postNewCardApi = (card) => {
  const snakeCard = {
    ...card,
    board_id: card.boardId,
    likes_count: card.likesCount,
  };
  return axios
    .post(`${kBaseUrl}/boards/${card.boardId}/cards`, snakeCard)
    .then((response) => {
      return convertCardFromApi(response.data);
    });
};

const deleteCardApi = (cardId) => {
  console.log(cardId);
  return axios.delete(`${kBaseUrl}/cards/${cardId}`).then((response) => {
    console.log(convertCardFromApi(response.data));
    return convertCardFromApi(response.data);
  });
};

const updateLikesCountApi = (card) => {
  const snakeCard = {
    ...card,
    board_id: card.boardId,
    likes_count: card.likesCount,
  };
  return axios
    .put(`${kBaseUrl}/cards/${card.cardId}/like`, snakeCard)
    .then((response) => {
      return convertCardFromApi(response.data);
    });
};

const getOneCardApi = (cardId) => {
  return axios.get(`${kBaseUrl}/cards/${cardId}`).then((response) => {
    return convertCardFromApi(response.data);
  });
};

function App() {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(false);
  const [cardData, setCardData] = useState([]);

  const getAllBoards = async () => {
    const boards = await getAllBoardsApi();
    setBoardData(boards);
  };

  const getCardsForBoard = async (boardId) => {
    const cards = await getCardsForBoardApi(boardId);
    setCardData(cards);
  };

  useEffect(() => {
    getAllBoards();
  }, []);

  const selectBoard = async (id) => {
    const board = await getOneBoardAPI(id);
    setSelectedBoard(board);
    getCardsForBoard(board.boardId);
  };

  const handleBoardSubmit = (data) => {
    postNewBoardApi(data).then((newBoard) => {
      setBoardData([...boardData, newBoard]);
    });
  };

  const handleCardSubmit = (data) => {
    postNewCardApi(data).then((newCard) => {
      setCardData([...cardData, newCard]);
    });
  };

  const handleLikeCard = (cardId) => {
    getOneCardApi(cardId).then((card) => {
      updateLikesCountApi(card).then((newCard) => {
        setCardData((cardData) =>
          cardData.map((card) => {
            if (card.cardId === newCard.cardId) {
              return newCard;
            } else {
              return card;
            }
          })
        );
      });
    });
  };

  const handleDeleteCard = (cardId) => {
    deleteCardApi(cardId).then((deletedCard) => {
      setCardData((cardData) =>
        cardData.filter((card) => {
          return card.cardId !== deletedCard.cardId;
        })
      );
    });
  };

  let newCardForm = "";
  if (selectedBoard) {
    newCardForm = (
      <div>
        <h2>Create a New Card</h2>
        <NewCardForm
          handleCardSubmit={handleCardSubmit}
          boardId={selectedBoard.boardId}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Team Squirrel Inspiration Board 🐿 </h1>
      <div className="boards-container">
      <section>
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
      </section>
      <section>
      <h2>Selected Board</h2>
      <div>
        {selectedBoard ? `${selectedBoard.title} - ${selectedBoard.owner}` : ""}
      </div>
      </section>
      <section>
      <h2>Create a New Board</h2>
      <NewBoardForm handleBoardSubmit={handleBoardSubmit} />
      </section>
      </div>
      <div className="cards-container">
      <section>
      <h2>Cards {selectedBoard ? `for ${selectedBoard.title}` : ""}</h2>
      <div id="cards">
        <CardList
          cardData={cardData}
          handleLikeCard={handleLikeCard}
          handleDeleteCard={handleDeleteCard}
        />
      </div>
      </section>
      <section>
      {newCardForm}
      </section>
      </div>
    </div>
  );
}

export default App;
