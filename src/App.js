import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BoardList from "./components/BoardList";
import Board from "./components/Board";
import NewBoardForm from "./components/NewBoardForm";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";

const kBaseUrl = "https://goddess-inspiration-board.herokuapp.com";

// const convertFromApi = (apiBoard) => {
//   const { title, owner, board_id: boardId } = apiBoard;
//   const newBoardApi = { boardId, title, owner };
//   return newBoardApi;
// };

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
      // return convertFromApi(response.board);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

function App() {
  const [boardsData, setBoardsData] = useState(
    []
    // {
    //   board_id: 1,
    //   title: 'Live your best life',
    //   owner: 'kkg',
    // },
    // {
    //   board_id: 2,
    //   title: 'Do not disturb',
    //   owner: 'reyna',
    // },
  );
  console.log(boardsData);

  const [cardsData, setCardsData] = useState([
    //   {
    //     board_id: 1,
    //     card_id: 1,
    //     likes_count: 0,
    //     message: "go to the beach",
    //   },
    //   {
    //     board_id: 1,
    //     card_id: 2,
    //     likes_count: 0,
    //     message: "drink all of the wine",
    //   },
  ]);

  const [selectedBoard, setSelectedBoard] = useState(null);

  const getAllBoards = () => {
    return getAllBoardsApi()
      .then((boards) => {
        setBoardsData(boards);
        console.log(boards);
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

  const updateCardLikes = (updatedCard) => {
    const newCardData = cardsData.map((card) => {
      if (card.card_id === updatedCard.card_id) {
        return updatedCard;
      } else {
        return card;
      }
    });
    setCardsData(newCardData);
  };

  const deleteCard = (card_id) => {
    const newCardData = cardsData.filter((card) => !card.card_id);
    setCardsData(newCardData);
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
      console.log(newCardData);
      setCardsData(newCardData);
    });
  };

  // get all cards

  const getCardsApi = (selectedBoard) => {
    return axios
      .get(`${kBaseUrl}/boards/${selectedBoard}/cards`)
      .then((response) => {
        setCardsData(response.data);
        console.log(response.data);
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

  const getSelectedCards = (cardsData) => {
    const cards = [];
    for (let card of cardsData) {
      if (card.board_id === selectedBoard) {
        cards.push(card);
      }
    }
    return cards;
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
        cards={getSelectedCards(cardsData)}
        updateCards={updateCardLikes}
        deleteCard={deleteCard}
      ></CardList>
      <NewCardForm
        selectedBoard={selectedBoard}
        onAddCard={addCardData}
      ></NewCardForm>
    </div>
  );
}

export default App;
