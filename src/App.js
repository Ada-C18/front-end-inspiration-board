import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";
import Board from "./components/Board";
import NewBoardForm from "./components/NewBoardForm";

// const CARD_LIST = [
//   {
//     id: 1,
//     message: "I love you",
//     owner: "Megan",
//   },
//   {
//     id: 2,
//     message: "This is Card 2",
//     owner: "Megan",
//   },
// ];
// const test_board = {
//   board_id: 1,
//   title: "Demo",
//   owner: "Sam",
//   cards: CARD_LIST,
// };

function App() {
  const [boardList, setBoardList] = useState([]);
  const [cardsList, setCardsList] = useState([]);
  const URL = "http://127.0.0.1:5000";

  const fetchAllCards = () => {
    axios
      .get(URL + "/boards/1/cards") //make this get from a specific board, not just board 1.
      .then((res) => {
        const cardsAPIResCopy = res.data.map((card) => {
          return {
            ...card,
          };
        });
        setCardsList(cardsAPIResCopy);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchAllCards, []); //intial get request

  useEffect(() => {
    axios
      .get(URL + "/boards")
      .then((res) => {
        const boardsAPIResCopy = res.data.map((board) => {
          // console.log(getCards(board.board_id))
          return {
            ...board,
          };
        });
        setBoardList(boardsAPIResCopy);
        console.log(boardList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addCard = (newCardInfo) => {
    //connecting to axios
    axios
      .post(URL + "/boards/1/cards", newCardInfo) //make this post to a specific board, not just board 1.
      .then((response) => {
        const newCards = [...cardsList];
        const newCardJSON = {
          ...newCardInfo,
          id: response.data.id,
        };
        newCards.push(newCardJSON);
        setCardsList(newCards);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("newCardForm is working");
  };

  const deleteCard = (cardId) => {
    console.log("deleteCard called", cardId);
    const newCardList = [];
    for (const card of cardsList) {
      if (card.id !== cardId) {
        newCardList.push(card);
      }
    }
    setCardsList(newCardList);
  };

  const addBoard = (newBoardInfo) => {
    axios.post(URL + "/boards")
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }

  console.log("App component is rendering");

  // console.log(test_board);
  return (
    <div>
      <header></header>
      <main>
        <h1>Inspiration Board</h1>
        <CardList
          cards={cardsList}
          // fetchAllCards={fetchAllCards}
          deleteCard={deleteCard}
        />
        <NewCardForm message="testing" addCardCallbackFunc={addCard} />
        {/* <Board
          id={test_board.board_id}
          title={test_board.title}
          owner={test_board.owner}
          cards={test_board.cards}
        /> */}
        <Board boards={boardList} getCards={addCard}/>
        <NewBoardForm addBoardCallBackFunc={addBoard} />
      </main>
    </div>
  );
}

export default App;
