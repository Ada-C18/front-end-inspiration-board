import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import "./App.css";
import strawberry from "./assets/strawberry.png";
import pie from "./assets/pie.png"

const kBaseUrl = "https://inspiration-board-back-end.herokuapp.com";

const convertFromApi = (apiBoard) => {
  const { board_id, ...rest } = apiBoard;
  // eslint-disable-next-line no-undef
  const newBoard = { boardId: board_id, ...rest };
  return newBoard;
};

const convertFromCardApi = (apiCard) => {
  const { likes_count, card_id, message} = apiCard;
  // eslint-disable-next-line no-undef
  const newCard = { likesCount: likes_count, cardId: card_id, message: message.toLowerCase() };
  return newCard;
};

const getAllBoardsApi = () => {
  return axios
    .get(`${kBaseUrl}/boards`)
    .then((response) => {
      return response.data.map(convertFromApi);
    })
    .catch((error) => {
      console.log(`error from get board api ${error}`);
    });
};

const getAllCardsApi = (boardId) => {
  return axios
    .get(`${kBaseUrl}/boards/${boardId}/cards`)
    .then((response) => {
      return response.data.cards.map(convertFromCardApi);
    })
    .catch((error) => {
      console.log(`from card api call ${error}`);
    });
};

const createBoardsApi = (newBoardData) => {
  return axios
    .post(`${kBaseUrl}/boards`, newBoardData)
    .then((response) => {
      return convertFromApi(response.data.board);
    })
    .catch((error) => {
      console.log(error);
    });
};

const createCardApi = (boardId, newCardData) => {
  return axios
    .post(`${kBaseUrl}/boards/${boardId}/cards`, newCardData)
    .then((response) => {
      return convertFromCardApi(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const likeCardApi = (cardId) => {
  return axios
    .patch(`${kBaseUrl}/cards/${cardId}`)
    .then((response) => {
      console.log(response.data.card);
      return convertFromCardApi(response.data.card);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteCardApi = (cardId) => {
  return axios.delete(`${kBaseUrl}/cards/${cardId}`)
  .catch((error) => {
    console.log(error);
  });
};

function App() {
  const [cardData, setCardData] = useState([]);
  const [boardData, setBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    boardName: "",
    boardId: null,
  });

  const getAllCards = (boardId) => {
    return getAllCardsApi(boardId).then((cards) => {
      setCardData(cards);
    });
  };

  const getAllBoards = () => {
    return getAllBoardsApi().then((boards) => {
      setBoardData(boards);
    });
  };

  useEffect(() => {
    getAllBoards();
  }, []);

  const likeCard = (cardId) => {
    return likeCardApi(cardId).then((cardResult) => {
      setCardData((cardData) =>
        cardData.map((card) => {
          if (card.cardId === cardResult.cardId) {
            return cardResult;
          } else {
            return card;
          }
        })
      );
    });
  };

  const deleteCard = (cardId) => {
    return deleteCardApi(cardId).then((cardResult) => {
      return getAllCards(selectedBoard.boardId);
    });
  };

  const handleCardSubmit = (boardId, newCardData) => {
    createCardApi(boardId, newCardData)
      .then((newCard) => {
        setCardData([...cardData, newCard]);
      })
      .catch((error) => console.log(error));
  };

  const selectBoard = (title, owner, boardId) => {
    setSelectedBoard({ boardName: `${title} - ${owner}`, boardId: boardId });
    getAllCards(boardId);
  };

  const currentBoard = selectedBoard.boardName
    ? selectedBoard.boardName
    : "*Select a Board from the Board List!*";

  const handleBoardSubmit = (data) => {
    createBoardsApi(data)
      .then((newBoard) => {
        setBoardData([...boardData, newBoard]);
      })
      .catch((err) => console.log(err));
  };

  const sortCardData = option => {
    const options = {
      cardId: 'cardId',
      message: "message",
      likes: "likesCount"
    };
    const sortProperty = options[option];
    if (option === 'cardId' || option === 'likes') {
      const sorted = [...cardData].sort((a,b) => a[sortProperty] - b[sortProperty]);
      setCardData(sorted);
    } else {
      const sortedMessage = [...cardData].sort((a, b) => (a[sortProperty] < b[sortProperty] ? -1 : 1));
      setCardData(sortedMessage);
    }
  };


  return (
    <div className="page_container">
      <div className="App">
        <img className="pie" src={pie} alt="pie" />
        <h1 className="title">P.I.E.E Inspiration Board</h1>
        <div className="selected-board_container">
          <h2>Selected Board</h2>
          <p className="selected-board">{currentBoard}</p>
        </div>
        <div className="board-container">
          <BoardList boards={boardData} onSelectBoard={selectBoard}></BoardList>
          <NewBoardForm handleBoardSubmit={handleBoardSubmit} />
        </div>
        <div className="strawberry-container">
          <img className="strawberry" src={strawberry} alt="strawberry" />
          <img className="strawberry" src={strawberry} alt="strawberry" />
          <img className="strawberry" src={strawberry} alt="strawberry" />
          <img className="strawberry" src={strawberry} alt="strawberry" />
          <img className="strawberry" src={strawberry} alt="strawberry" />
        </div>
        <section className="cards-container">
          <div className="card-items_container">
          <h2>Cards For {currentBoard}</h2>
          
          <select onChange={(e) => sortCardData(e.target.value)}>
            <option value="" disabled selected hidden>Sort By</option>
            <option value="cardId">Card Id</option>
            <option value="message">Message</option>
            <option value="likes">Likes</option>
          </select>
          <CardList
            cardData={cardData}
            onLikeCard={likeCard}
            onDeleteCard={deleteCard}
          />
          </div>
          <div className="new-card-form-container">
            <NewCardForm
              handleCardSubmit={handleCardSubmit}
              currentBoard={selectedBoard}
            />
          </div>
        </section>
        <footer>
          
        </footer>
      </div>
    </div>
  );
}

export default App;
