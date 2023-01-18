import { useEffect, useState } from "react";
import axios from "axios";
// import "./App.css";
import BoardContainer from "./components/BoardContainer";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import { isVisible } from "@testing-library/user-event/dist/utils";


// helper function for boards API request
const getAllBoardsApi = () => {
  return axios
    .get("http://127.0.0.1:5000/board")
    .then((response) => {
      const newBoards = response.data.map((board) => {
        return {
          id: board.board_id,
          title: board.title,
          owner: board.owner,
        };
      });

      return newBoards;
    })
    .catch((error) => {
      console.log(error);
    });
};

// helper function for cards API request
const getAllCardsApi = (id) => {
  return axios
    .get(`http://127.0.0.1:5000/board/${id}/cards`)
    .then((response) => {

      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

function App() {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState("");
  const [currentBoard, setCurrentBoard] = useState({
    title: "No board selected",
  });

  // get all boards using API helper
  const getAllBoards = () => {
    return getAllBoardsApi().then((boards) => setBoards(boards));
  };

  // get all boards when App renders
  useEffect(() => {
    getAllBoards();
  }, []);

  // get all cards using API helper
  const getAllCards = (id) => {
    getAllCardsApi(id).then((cards) => {
      const allCards = [];
      for (let card of cards) {
        allCards.push({
          id: card.card_id,
          message: card.message,
          likeCount: card.likes_count,
        });
      }
      setCards(allCards);
    });
  };

  // display current board callback for selected Board
  const displayCurrentBoard = (id) => {
    for (let board of boards) {
      if (id === board.id) {
        setCurrentBoard(board);
        getAllCards(id);
      }
    }
  };

  // add new board callback for new board form
  const addBoard = (boardData) => {
    axios
      .post("http://127.0.0.1:5000/board", boardData)
      .then((response) => {
        const newBoards = [...boards];

        newBoards.push({
          title: response.data.title,
          owner: response.data.owner,
          ...boardData,
        });

        setBoards(newBoards);
        setMessage("You made a new board!");
      })
      .catch((error) => {
        console.log(error);
        // add conditional to display custom message
        setMessage("Please enter a title or owner.");
      });
  };

  // add new card callback for new card form
  const addCard = (cardData) => {
    axios
      .post("http://127.0.0.1:5000/card", cardData)
      .then((response) => {
        setMessage("You made a new card!");
      })
      .catch((error) => {
        console.log(error);
        // add conditional to display custom message
        setMessage("Please enter valid input.");
      });
  };

  const toggleHide = (className, isVisible) => {
    if (isVisible){
      className = "new-board__form visible"
    }else{
      className = "new-board__form collapse"
    }
  };

  return (
    <div className="App">
      <Header />
      <NewBoardForm addBoardCallback={addBoard} afterSubmitMessage={message} toggleHide={toggleHide} isVisible={isVisible}/>
      <BoardContainer
        boards={boards}
        onDisplayCurrentBoard={displayCurrentBoard}
      />
      <NewCardForm addCardCallback={addCard} afterSubmitMessage={message} />
      <CardContainer currentBoard={currentBoard} cards={cards} />
    </div>
  );
}

export default App;
