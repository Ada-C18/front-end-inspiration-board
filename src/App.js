import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board.js";
import BoardList from "./components/BoardList";
// import NewCardForm from "./components/NewCardForm";
import NewBoardForm from "./components/NewBoardForm";
import Card from "./components/Card";

// const REACT_APP_BACKEND_URL = "http://localhost:5000/cards";

function App() {
  const [boardList, setBoardList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cards, setCards] = useState([]);

  const loadBoardList = () => {
    axios
      .get("http://localhost:5000/boards")
      .then((response) => {
        const updatedBoardList = response.data.map((board) => {
          return { id: board.id, title: board.title, owner: board.owner };
        });
        // if (cards) {
        //   for (const card of cards) {
        //     cardComponents.push(
        //       <Card key={card.id} id={card.id} message={card.message} />
        //     );
        //   }
        // }
        setBoardList(updatedBoardList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(loadBoardList, []);

  const addBoard = (newBoardInfo) => {
    console.log("addBoard called");
    const newBoardList = [...boardList];
    axios
      .post("http://localhost:5000/boards", newBoardInfo)
      .then((response) => {
        const newBoard = {
          ...newBoardInfo,
          id: response.data.id,
        };
        newBoardList.push(newBoard);
        setBoardList(newBoardList);
      });
  };

  const loadCards = (boardId) => {
    console.log(`💀${boardId}`);
    axios
      .get(`http://127.0.0.1:5000/boards/${boardId}/cards`)
      .then((response) => {
        console.log(`${JSON.stringify(response)}`);
        // const cards = response.data.map((card) => {
        //   return { id: card.id, message: card.message };
        // });
        const cards = response.data["chosen board cards"];
        console.log(`🐼${JSON.stringify(cards)}`);

        // if (cards) {
        //   for (const card of cards) {
        //     console.log(`🐴${card.id} ${card.message}`);
        //     cards.push(
        //       <div>hi</div>
        //       // <Card key={card.id} id={card.id} message={card.message} />
        //     );
        //   }
        // }
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadBoard = (boardId) => {
    console.log("handle board click called");
    axios
      .get(`http://127.0.0.1:5000/boards/${boardId}`)
      .then((response) => {
        console.log(`🥹${JSON.stringify(response)}`);
        setSelectedBoard(response.data);
        console.log(`🤡${boardId}`);
        loadCards(boardId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Hello Peeps!</h1>
      <BoardList boardList={boardList} loadBoard={loadBoard} />
      <NewBoardForm addBoardCallbackFunc={addBoard} />
      <Board cards={cards} selectedBoard={selectedBoard} />
      {/* <NewCardForm addCardCallbackFunc={addCard} /> */}
    </div>
  );
}

export default App;

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
//       newBoard.push(card);
//     } else {
//       const newCard = {
//         id: id,
//         message: message,
//       };
//       newBoard.push(newCard);
//     }
//   }
//   setBoardList(newBoard);

//   axios.post(REACT_APP_BACKEND_URL, newCardInfo).then((response) => {
//     const newCards = [...board];
//     const newCardJSON = {
//       ...newCardInfo,
//       message: response.data.message,
//     };
//     newCards.push(newCardJSON);
//     setBoard(newCards);
//   });
// };
