import { React, useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BoardList from "./components/BoardList.js";
import CardList from "./components/CardList.js";
import NewBoardForm from "./components/NewBoardForm.js";
import NewCardForm from "./components/NewCardForm.js";

function App() {
  // boardsList axios call
  const [boardsList, setBoardsList] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);
  console.log(`selectedBoard: ${selectedBoardId}`);
  const URL = "https://inspirationboard-api.herokuapp.com";
  const fetchAllBoards = () => {
    axios
      .get(`${URL}/boards`)
      .then((res) => {
        //making a copy of the data to display to DOM
        const boardsAPIResCopy = res.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoardsList(boardsAPIResCopy);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(fetchAllBoards, []);

  // cardsList axios call
  const [cardsList, setCardsList] = useState([]);

  // const cardsURL = "https://inspirationboard-api.herokuapp.com/cards";
  const fetchAllCards = (boardId) => {
    console.log(`${boardId} fetchAllCards called`);
    axios
      .get(`${URL}/boards/${boardId}/cards`)
      .then((res) => {
        //making a copy of the data to display to DOM
        console.log(res.data);
        const cardsAPIResCopy = res.data.cards.map((card) => {
          return {
            id: card.id,
            message: card.message,
            like_count: card.like_count,
          };
        });
        setCardsList(cardsAPIResCopy);
        setSelectedBoardId(boardId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(fetchAllCards, []);

  const addBoard = (newBoardInfo) => {
    //use axios.post request here
    //handling .then to update frontend, update state variable with setBikesList()
    axios
      .post(`${URL}/boards`, newBoardInfo)
      .then((response) => {
        // console.log(response);
        fetchAllBoards();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteBoard = (boardId) => {
    axios
      .delete(`${URL}/boards/${boardId}`)
      .then(() => {
        const newBoardList = [];
        for (const board of boardsList) {
          if (board.id !== boardId) {
            newBoardList.push(board);
          }
        }
        setBoardsList(newBoardList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCard = (newCardInfo) => {
    //use axios.post request here
    //handling .then to update frontend, update state variable with setBikesList()
    console.log("newCardInfo!");
    console.log(newCardInfo);
    axios
      .post(`${URL}/boards/${selectedBoardId}/cards`, newCardInfo)
      .then((response) => {
        // console.log(response);
        fetchAllCards();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCard = (cardId) => {
    axios
      .delete(`${URL}/cards/${cardId}`)
      .then(() => {
        const newCardList = [];
        for (const card of cardsList) {
          if (card.id !== cardId) {
            newCardList.push(card);
          }
        }
        setCardsList(newCardList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav>
      <div className="grid-container">
        <div className="grid-item">
          <h2>Boards:</h2>
          <BoardList
            boardEntries={boardsList}
            deleteBoard={deleteBoard}
            fetchCards={fetchAllCards}
          />
          <h2>Add Board:</h2>
          <NewBoardForm addBoardCallbackFunc={addBoard} />
          <NewCardForm
            addCardCallbackFunc={addCard}
            selectedBoardId={selectedBoardId}
          />
        </div>
        <div className="gridcards-item ">
          <h2>Cards</h2>
          <CardList cardEntries={cardsList} deleteCard={deleteCard} />
        </div>
        
      </div>
      
    </nav>
  );
}

export default App;
