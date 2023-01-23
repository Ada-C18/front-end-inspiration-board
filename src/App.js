import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";
import Board from "./components/Board";
import NewBoardForm from "./components/NewBoardForm";
import "./App.css";

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
  // const [cardsList, setCardsList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    id: null,
    title: null,
    owner: null,
    cards: [],
  });
  const [formStatus, setFormStatus] = useState("");

  const URL = "https://duckies-inspo-board.herokuapp.com";

  const toggleForm = () => {
    if (!formStatus) {
      setFormStatus("hidden");
    } else {
      setFormStatus("");
    }
  };

  const onBoardSelect = (selectedBoard) => {
    axios
      .get(`${URL}/boards/${selectedBoard.id}/cards`)
      .then((res) => {
        console.log(res);
        setSelectedBoard({
          ...selectedBoard,
          cards: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(fetchAllCards, []); //intial get request

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
      .post(`${URL}/boards/${selectedBoard.id}/cards`, newCardInfo)
      .then((response) => {
        const newCards = [...selectedBoard.cards];
        newCards.push(response.data);
        setSelectedBoard({ ...selectedBoard, cards: newCards });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("newCardForm is working");
  };

  const deleteCard = (cardId) => {
    axios.delete(`${URL}/cards/${cardId}`).then(() => {
      const newCardList = [];
      for (const card of selectedBoard.cards) {
        if (card.id !== cardId) {
          newCardList.push(card);
        }
      }
      setSelectedBoard({ ...selectedBoard, cards: newCardList });
    });
  };

  const addBoard = (newBoardInfo) => {
    axios
      .post(URL + "/boards", newBoardInfo)
      .then((res) => {
        const newBoardList = [...boardList];
        const newBoardJSON = { ...newBoardInfo, id: res.data.id };
        newBoardList.push(newBoardJSON);
        setBoardList(newBoardList);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  // const [likeCardCount, setLikeCardCount] = useState();

  const addLikes = (cardId, likes) => {
    // setLikeCardCount(card.likes_count);
    axios.patch(`${URL}/cards/${cardId}/${likes + 1}`).then((response) => {
      const newCardList = [];
      for (const card of selectedBoard.cards) {
        if (card.id !== cardId) {
          newCardList.push(card);
        } else if (card.id === cardId) {
          console.log("addLikes called");
          card.likes_count += 1;
          newCardList.push(response.data);
        }
      }
      setSelectedBoard({ ...selectedBoard, cards: newCardList });
    });
  };

  // const handleClick = (boardId) => {
  //   console.log("Clicked");
  //   fetchAllCards(boardId);
  // };
  console.log("App component is rendering");

  // console.log(test_board);
  return (
    <div>
      <header></header>
      <main>
        <div className="title-container">
          <h1 className="inspo-board-title">🐥 The Rubber Duckies 🫧</h1>
        </div>
        <CardList
          cards={selectedBoard.cards}
          // fetchAllCards={fetchAllCards}
          deleteCard={deleteCard}
          addLikes={addLikes}
        />

        {/* <NewCardForm message="testing" addCardCallbackFunc={addCard} /> */}
        {/* <Board
          id={test_board.board_id}
          title={test_board.title}
          owner={test_board.owner}
          cards={test_board.cards}
        /> */}

        <Board
          boards={boardList}
          // getCards={addCard}
          onBoardSelect={onBoardSelect}
        />
        <section className="selected-board">
          <h1>Selected Board: </h1>
          <h2>
            {selectedBoard.title} - Creator: {selectedBoard.owner}
          </h2>
        </section>
        <section className="upper-box-grid">
          <div className="upper-box-container">
            <div className="card-form">
              <NewCardForm addCard={addCard} />
            </div>
            <div className={formStatus}>
              <NewBoardForm addBoardCallBackFunc={addBoard} />
            </div>
            <button type="button" onClick={toggleForm}>
              Toggle Board Form
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
