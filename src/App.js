import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import Board from "./components/Board";
import Card from "./components/Card";
import CardList from "./components/CardList";
import { useState, useEffect } from "react";
import axios from "axios";

//const URL = process.env['REACT_APP_BACKEND_URL'];
const URL = "http://localhost:5000/boards";

const App = () => {
  const [boardData, setBoardData] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
    id: null,
  });

  //works
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const newBoards = response.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoardData(newBoards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //works
  const addBoard = (board) => {
    axios
      .post(URL, board)
      .then((response) => {
        const newBoards = [...boardData];
        newBoards.push({ id: response.data.board_id, title: "", ...board });
        setBoardData(newBoards);
      })
      .catch((error) => console.log(error));
  };

  const handleBoardClicked = (id) => {
    console.log(id);
    console.log(boardData);
    const board = boardData.find((board) => {
      return id === board.id;
    });
    if (!board) {
      return;
    }
    axios
      .get(`${URL}/${board.id}/cards`)
      .then((response) => {
        const newCards = response.data.cards.map((card) => {
          return {
            id: card.id,
            message: card.message,
          };
        });
        setCardData(newCards);
        setSelectedBoard(board);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCard = (card) => {
    axios
      .post(URL, cardData)
      .then((response) => {
        const newCards = [...cardData];
        newCards.push({ id: response.data.id, message: "", ...card });
        setBoardData(newCards);
      })
      .catch((error) => console.log(error));
  };

  const deleteCard = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const newCards = cardData.filter((card) => card.id !== id);
        setCardData(newCards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <header className="header">INSPIRATION BOARD</header>
      <div className="control_panel">
        <div className="boards_container">
          <Board boards={boardData} onBoardClicked={handleBoardClicked} />
        </div>
        <div>
          <h1> Selected Board</h1>
          {/* <p>{selectedBoard.title} {selectedBoard.owner}</p> */}
          <p>
            {selectedBoard.id
              ? `${selectedBoard.title}  ${selectedBoard.owner}`
              : "Please select a Board from the Board List!"}
          </p>
        </div>
        <div>
          <h1> Create A New Board </h1>
          {showForm && <NewBoardForm onUpdateBoardData={addBoard} />}
          <button type="button" onClick={() => setShowForm(!showForm)}>
            {" "}
            {showForm === true ? "Hide New Board Form" : "Show New Board Form"}
          </button>
        </div>
      </div>
      <br></br>

      <div className="corkboard">
        {selectedBoard.id && (
          <div className="boardtitle">Cards for {selectedBoard.title}</div>
        )}
        {selectedBoard.id && (
          <div className="board_container">
            {/* {cardData} */}
            {/* was this before axios call {displayCards} */}
            <CardList cards={cardData} onDeleteCard={deleteCard}></CardList>

            <div className="new_card">
              <h3> Create a New Card</h3>
              <NewCardForm onUpdateCardData={addCard} />
            </div>
          </div>
        )}
      </div>
      {/* <footer>
        <p> Click here to delete all boards and cards</p>
      </footer> */}
    </section>
  );
};

export default App;
