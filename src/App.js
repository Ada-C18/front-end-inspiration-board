import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm";
import CardsList from "./components/CardsList";
import Board from "./components/Board";

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
    id: null,
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {})
      .then((response) => {
        setBoardsData(response.data);
      });
  }, []);

  const selectBoard = (board) => {
    setSelectedBoard(board);
  };

  const boardInformation = boardsData.map((board) => {
    return (
      <li key={board.id}>
        <Board board={board} onBoardSelect={selectBoard}></Board>
      </li>
    );
  });

  const createNewBoard = (newBoard) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
      .then((response) => {
        console.log("Response Board successfully created", response.data.board);
        const boards = [...boardsData];
        boards.push(response.data.board);
        setBoardsData(boards);
      })
      .catch((error) => {
        console.log("Error", error);
        alert("Couldn't create a new board.");
      });
  };

  const [hideBoardForm, sethideBoardForm] = useState(true);
  const hideBoardButton = () => {
    sethideBoardForm(!hideBoardForm);
  };

  return (
    <div className="App">
      <div className="content__container">
        <header className="App-header">Inspiration Board</header>
        <section className="boards__container">
          <section>
            <h2>Boards</h2>
            <ol className="boards__list">{boardInformation}</ol>
          </section>

          <section className="selected_board">
            <h2> Selected Board</h2>
            <p>
              {selectedBoard.id
                ? `${selectedBoard.title} - owned by ${selectedBoard.owner}`
                : "select board from list"}
            </p>
          </section>

          <section className="new-board-form__container">
            <h2>Create a New Board</h2>
            <section>
              {hideBoardForm ? (
                <NewBoardForm createNewBoard={createNewBoard} />
              ) : (
                ""
              )}
            </section>
            <button onClick={hideBoardButton}>
              {" "}
              {hideBoardForm ? "Hide Board Form" : "Show Board Form"}
            </button>
            <section onClick={NewBoardForm}></section>
          </section>
        </section>
        <section className="cards__sectioncontainer">
          {selectedBoard.id ? <CardsList board={selectedBoard} /> : " "}
        </section>
      </div>
    </div>
  );
}

export default App;
