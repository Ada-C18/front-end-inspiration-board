import "./styles/App.css"
import { useState, useEffect } from "react";
import CardList from "./components/CardList";
import axios from "axios";
import BoardList from "./components/BoardList";
import FormNewBoard from "./components/FormNewBoard";
import FormNewCard from "./components/FormNewCard";


function App() {
  const [boardList, setBoardList] = useState([]);

  const URL = "https://inspo-project.herokuapp.com";

  //get boards
  const getAllBoards = () => {
    axios
      .get(`${URL}/boards`)
      .then((response) => {
        console.log(response);
        const boardsAPIResponseCopy = response.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoardList(boardsAPIResponseCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getAllBoards, []);

  //forms -> add one board:
  const addBoard = (newBoardInfo) => {
    axios
      .post(`${URL}/boards`, newBoardInfo)
      .then((response) => {
        const newBoard = [...boardList];
        const newBoardJson = {
          ...newBoardInfo,
          id: response.data.id,
        };
        newBoard.push(newBoardJson);
        setBoardList(newBoard);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //get cards from one board:
  const [cardList, setCardList] = useState([]);
  const [boardId, setBoardId] = useState([]);
  const getOneBoard = (boardId) => {
    axios
      .get(`${URL}/boards/${boardId}`)
      .then((response) => {
        console.log(response);
        const newCardList = response.data;
        setCardList(newCardList);
        setBoardId(boardId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // form -> updates backend with new card,
  const addCard = (newCardInfo, boardId) => {
    axios
      .post(`${URL}/card`, newCardInfo)
      .then((response) => {
        const newCards = [...cardList];
        const newCardJson = {
          ...newCardInfo,
          id: response.data.id,
        };
        newCards.push(newCardJson);
        setCardList(newCards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // OK -- create delete card item function from backend, and update cardsList state
  const deleteCard = (cardId) => {
    axios
      .delete(`${URL}/card/${cardId}`)
      .then(() => {
        const updatedCards = [];
        for (const card of cardList) {
          if (card.id !== cardId) {
            updatedCards.push(card);
          }
        }
        setCardList(updatedCards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // create plus one card function
  const countLikesTotal = (cardId) => {
    axios.put(`${URL}/card/${cardId}`).then((response) => {
      const updatedCards = [];
      for (const card of cardList) {
        if (card.id === cardId) {
          card.likes += 1;
          updatedCards.push(card);
        } else {
          updatedCards.push(card);
        }
      }
      setCardList(updatedCards);
    });
  };

  //
  return (
    <div className="app-all">
      <header> Inspiration Board </header>


      <nav className="board">
        <h2 className="boardListTitle"> Board List</h2>

        <BoardList boardList={boardList} getOneBoard={getOneBoard} />
        <h2> Create a New Board</h2>
        <FormNewBoard addBoardCallbackFunc={addBoard} />
      </nav>

      <aside className="cards">

        <h2> Create a New Card </h2>
        <FormNewCard addCardCallbackFunc={addCard} boardId={boardId} />
      </aside>

      <main>
        <h2> Card List </h2>
        <CardList
          cardList={cardList}
          deleteCard={deleteCard}
          countLikesTotal={countLikesTotal}
        />
      </main>
    </div>
  );
}

export default App;
