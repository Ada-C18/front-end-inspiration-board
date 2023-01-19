import "./App.css";
import { useEffect, useState } from "react";
// import Board from "./components/Board.js";
import NewBoardForm from "./components/NewBoardForm.js";
import NewCardForm from "./components/NewCardForm.js";
import axios from "axios";
import BoardList from "./components/BoardList.js";
import Card from "./components/Card.js";

function App() {
  const [cardData, setCardData] = useState([]);
  const [boardData, setBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    // try selectedBoard.board_id etc.
    boardId: 0,
    owner: "",
    title: "",
    cards: [],
  });

  const URL = "http://127.0.0.1:5000/board";
  const CARD_URL = "http://127.0.0.1:5000/card";

  const getAllBoards = () => {
    axios
      .get(URL)
      .then((response) => {
        // console.log("Calling API");
        const boardsAPICopy = response.data.map((board) => {
          return {
            boardId: board.board_id,
            owner: board.owner,
            title: board.title,
            cards: board.cards,
          };
        });
        console.log("console of boardAPICopy", boardsAPICopy);
        setBoardData(boardsAPICopy);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(getAllBoards, []);

  // onClick({displayAllCardsForOneBoard})
  const displayAllCardsForOneBoard = (boardId) => {
    axios
      .get(`${URL}/${boardId}/card`) //can we change route to "cards"?
      .then((response) => {
        console.log("Inside display all cards for 1 board");
        console.log(response.data);

        return {
          cards: response.data,
        };
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("cardData from app.js", cardData);
  const updateLikes = (cardId, updatedLikes) => {
    console.log("updateLikes called");
    const newCardsList = [];
    axios
      .patch(`${CARD_URL}/${cardId}`, { likes_count: updatedLikes })
      .then((response) => {
        for (const card of cardData) {
          //
          console.log(`Card.id is ${card.id} and cardId is ${cardId}`);
          if (card.cardId !== cardId) {
            newCardsList.push(card);
          } else {
            const newCard = {
              ...card,
              likes_count: updatedLikes,
            };
            console.log(newCard);
            newCardsList.push(newCard);
          }
        }
        console.log("newCardsList consolelog", newCardsList);
        // const newCardListForBoard = {

        // }
        setCardData(newCardsList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Function to create new card
  const addCard = (boardId, newCardInfo) => {
    console.log(boardId);
    console.log(newCardInfo);
    axios
      .post(`${URL}/${boardId}/card`, newCardInfo)
      .then((response) => {
        console.log(boardId);

        boardData.forEach((board, i) => {
          if (board.boardId === boardId) {
            const newCardList = [...board.cards];

            newCardList.push({
              card_id: response.data.card.card_id,
              message: response.data.card.message,
              likes_count: 0,
            });
            const newBoard = {
              ...board,
              cards: newCardList,
            };
            const newBoardDataCopy = [...boardData];
            newBoardDataCopy[i] = newBoard;
            console.log("logging boardData", newBoardDataCopy);
            setBoardData(newBoardDataCopy);
            setSelectedBoard(newBoard);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to create new board, needs POST with axios
  const addBoard = (newBoardInfo) => {
    axios
      .post(URL, newBoardInfo)
      .then((response) => {
        getAllBoards();
        const newBoardList = [...boardData];
        console.log(response.data);
        const newBoardJSON = {
          ...newBoardInfo,
          boardId: response.data.board.board_id,
          cards: [],
        };
        newBoardList.push(newBoardJSON);
        setBoardData(newBoardList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCard = (cardId) => {
    console.log("deleteCard Called");
    axios
      .delete(`${CARD_URL}/${cardId}`)
      .then(() => {
        const newCardList = [];
        for (const card of selectedBoard.cards) {
          if (card.cardId !== cardId) {
            newCardList.push(card);
          }
        }
        const newBoard = {
          ...selectedBoard,
          cards: newCardList,
        };
        console.log(`New card list = ${newCardList}`);
        setSelectedBoard(newBoard);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cardComponents = [];
  for (const card of selectedBoard.cards) {
    // console.log(`Printing card data from board ${card}`);
    cardComponents.push(
      <Card
        key={card.card_id}
        cardId={card.card_id}
        message={card.message}
        likes_count={card.likes_count}
        updateLikes={updateLikes}
        deleteCard={deleteCard}
      />
    );
  }

  return (
    <div>
      <header>
        <h1>✨ Inspiration Board ✨</h1>
      </header>
      <main id="mainContainer">
        <div id="upperContainerBoard">
          <BoardList
            boardData={boardData}
            cardData={cardData}
            selectedBoard={selectedBoard}
            setSelectedBoard={setSelectedBoard}
            updateLikes={updateLikes}
            displayAllCardsForOneBoard={displayAllCardsForOneBoard}
          />
          <div>
            <h2>Selected Board:</h2>
            <p>Title: {selectedBoard.title}</p>
            <p>Owner: {selectedBoard.owner}</p>
          </div>

          <NewBoardForm addBoardFunc={addBoard} />
        </div>
        <div id="lowerContainerCard">
          <NewCardForm
            addCardFunc={addCard}
            selectedBoard={selectedBoard}
            boardData={boardData}
            setBoardData={setBoardData}
          />
          <div id="cardItems">
            {/* <h2 id="cardsHeading">Cards</h2> */}
            <div id="cardComponents">{cardComponents}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
