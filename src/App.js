// import axios from "axios";
import React from "react";
import { useState } from "react";
import "./App.css";
import Board from "./components/Board.js";
import BoardList from "./components/BoardList";
import NewCardForm from "./components/NewCardForm";
import NewBoardForm from "./components/NewBoardForm";
import Header from "./components/Header"
import Title from "./components/Title"
import ViewOrAddButtons from "./components/ViewOrAddButtons"

const BOARD_LIST = [
  {
    id: 1,
    title: "Lynn's Board",
    owner: "Lynn",
    cards: [
      {
        id: 1,
        message: "Lynn, stay cool.",
      },
      {
        id: 2,
        message: "Lynn, you are always good enough.",
      },
      {
        id: 3,
        message: "Lynn loves you.",
      },
    ],
  },
  {
    id: 2,
    title: "Nina's Board",
    owner: "Nina",
    cards: [
      {
        id: 1,
        message: "Nina, stay cool.",
      },
      {
        id: 2,
        message: "Nina, you are always good enough.",
      },
      {
        id: 3,
        message: "Nina loves you.",
      },
    ],
  },
  {
    id: 3,
    title: "Tami's Board",
    owner: "Tami",
    cards: [
      {
        id: 1,
        message: "Tami, stay cool.",
      },
      {
        id: 2,
        message: "Tami, you are always good enough.",
      },
      {
        id: 3,
        message: "Tami loves you.",
      },
    ],
  },
];

// const REACT_APP_BACKEND_URL = "http://localhost:5000/cards";

function App() {
  const [boardList, setBoardList] = useState(BOARD_LIST);
  const [cards, setCards] = useState([]);

  const addBoard = (newBoardInfo) => {
    console.log("addBoard called");
    const newBoardList = [...boardList];
    const nextId = Math.max(...newBoardList.map((board) => board.id)) + 1;
    newBoardList.push({
      id: nextId,
      owner: newBoardInfo.owner,
      title: newBoardInfo.title,
    });
    setBoardList(newBoardList);
  };

  const displayCards = (boardId) => {
    const boards = boardList.map((board) => {
      if (boardId === board.id) {
        setCards(board.id.cards);
        return board;
      }
    });
  };

  // const fetchAllCards = () => {
  //   axios
  //     .get(REACT_APP_BACKEND_URL)
  //     .then((response) => {
  //       const cardsAPIResponseCopy = response.data.map((card) => {
  //         return { id: card.id, message: card.message };
  //       });
  //       setBoard(cardsAPIResponseCopy);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(fetchAllCards, []);

  // const addCard = (newCardInfo) => {
  //   console.log("addCard called");
  //   const newBoardList = [];
  //   for (const card of board) {
  //     if (board.id !== boardId) {
  //       newBoard.push(card)
  //     } else {
  //       const newCard = {
  //         id: id,
  //         message: message
  //       }
  //       newBoard.push(newCard)
  //     }
  //   }
  //   setBoardList(newBoard)

  // axios.post(REACT_APP_BACKEND_URL, newCardInfo).then((response) => {
  //   const newCards = [...board];
  //   const newCardJSON = {
  //     ...newCardInfo,
  //     message: response.data.message,
  //   };
  //   newCards.push(newCardJSON);
  //   setBoard(newCards);
  // };

  return (
    <div>
      <Header></Header>
      <Title></Title>
      <ViewOrAddButtons></ViewOrAddButtons>
      <NewBoardForm addBoardCallbackFunc={addBoard} />
      <BoardList boardList={boardList} />
      <Board handleBoardTitleClick={displayCards} />
    </div>
  );
}

export default App;
