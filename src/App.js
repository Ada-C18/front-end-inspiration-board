import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import BoardList from "./components/BoardList";
import Board from "./components/Board";
import NewBoardForm from "./components/NewBoardForm";
import CardList from "./components/CardList";

function App() {
  const [boardsData, setBoardsData] = useState([
    {
      board_id: 1,
      title: "Live your best life",
      owner: "kkg",
    },
    {
      board_id: 2,
      title: "Do not disturb",
      owner: "reyna",
    },
  ]);

  const [cardsData, setCardsData] = useState([
    {
      board_id: 1,
      card_id: 1,
      likes_count: 0,
      message: "go to the beach",
    },
    {
      board_id: 1,
      card_id: 2,
      likes_count: 0,
      message: "drink all of the wine",
    },
  ]);

  const [selectedBoard, setSelectedBoard] = useState(null);

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
    const newCardData = cardsData.filter((card) => {
      if (card.card_id !== card_id) {
        return card;
      }
    });
    setCardsData(newCardData);
  };

  const updateSelectedBoard = (board_id) => {
    setSelectedBoard(board_id);
  };

  const addBoardData = (newBoard) => {
    const newBoardData = [...boardsData];
    // update when we access the data base later
    const nextId = Math.max(...newBoardData.map((board) => board.board_id)) + 1;
    newBoardData.push({
      board_id: nextId,
      title: newBoard.title,
      owner: newBoard.owner,
    });
    setBoardsData(newBoardData);
  };

  const getSelectedTitle = (boardsData) => {
    for (let board of boardsData) {
      if (board.board_id === selectedBoard) {
        return board.title;
        // const boardOwner = board.owner
      }
    }
  };

  const getSelectedOwner = (boardsData) => {
    for (let board of boardsData) {
      if (board.board_id === selectedBoard) {
        console.log(board.owner);
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
        board={getSelectedTitle(boardsData)}
        cards={getSelectedCards(cardsData)}
        updateCards={updateCardLikes}
        deleteCard={deleteCard}
      ></CardList>
    </div>
  );
}

export default App;
