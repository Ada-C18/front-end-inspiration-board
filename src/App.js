import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BoardList from "./components/BoardList";
import Board from "./components/Board";
import NewBoardForm from "./components/NewBoardForm";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";

const kBaseUrl = "https://goddess-inspiration-board.herokuapp.com";
// get boards
const getAllBoardsApi = () => {
  return axios
    .get(`${kBaseUrl}/boards`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.data);
    });
};

// post board
const postNewBoardApi = (newBoard) => {
  const requestBody = { title: newBoard.title, owner: newBoard.owner };
  return axios
    .post(`${kBaseUrl}/boards`, requestBody)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);

  const getAllBoards = () => {
    return getAllBoardsApi()
      .then((boards) => {
        setBoardsData(boards);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getAllBoards();
    if (selectedBoard) {
      getCardsApi(selectedBoard);
    }
  }, [selectedBoard]);

  // Create cards
  const postNewCardApi = (newCard) => {
    const requestBody = { message: newCard.message };
    return axios
      .post(`${kBaseUrl}/boards/${selectedBoard}/cards`, requestBody)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const updateCardLikesApi = (card_id) => {
    return axios
      .put(`${kBaseUrl}/cards/${card_id}/like`)
      .then((response) => {
        getCardsApi(selectedBoard);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // delete card
  const deleteCardApi = (card_id) => {
    return axios
      .delete(`${kBaseUrl}/cards/${card_id}`)
      .then(() => {
        const newCardData = cardsData.filter(
          (card) => card.card_id !== card_id
        );
        setCardsData(newCardData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCardData = (newCard) => {
    const newCardData = [...cardsData];
    postNewCardApi(newCard).then((response) => {
      newCardData.push({
        card_id: response.card_id,
        message: response.message,
        likes_count: response.likes_count,
        board_id: response.board_id,
      });
      setCardsData(newCardData);
    });
  };

  // get all cards
  const getCardsApi = (selectedBoard) => {
    return axios
      .get(`${kBaseUrl}/boards/${selectedBoard}/cards`)
      .then((response) => {
        setCardsData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const updateSelectedBoard = (board_id) => {
    setSelectedBoard(board_id);
  };

  const addBoardData = (newBoard) => {
    const newBoardData = [...boardsData];
    postNewBoardApi(newBoard).then((boardResponse) => {
      newBoardData.push({
        board_id: boardResponse.board.board_id,
        title: newBoard.title,
        owner: newBoard.owner,
      });
      setBoardsData(newBoardData);
    });
  };

  const getSelectedTitle = (boardsData) => {
    for (let board of boardsData) {
      if (board.board_id === selectedBoard) {
        return board.title;
      }
    }
  };

  const getSelectedOwner = (boardsData) => {
    for (let board of boardsData) {
      if (board.board_id === selectedBoard) {
        return board.owner;
      }
    }
  };

  return (
    <div>
      <h1>Inspiration Board</h1>
      <BoardList boardsData={boardsData} updateSelceted={updateSelectedBoard} />
      <Board
        title={getSelectedTitle(boardsData)}
        owner={getSelectedOwner(boardsData)}
      ></Board>
      <NewBoardForm onAddBoard={addBoardData}></NewBoardForm>
      <CardList
        selectedBoard={selectedBoard}
        boardName={getSelectedTitle(boardsData)}
        cards={cardsData}
        updateCards={updateCardLikesApi}
        deleteCard={deleteCardApi}
      ></CardList>
      <NewCardForm
        selectedBoard={selectedBoard}
        onAddCard={addCardData}
      ></NewCardForm>
    </div>
  );
}

export default App;
