import Board from "./components/Board";
import { useState, useEffect } from "react";
import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import CardsList from "./components/CardsList";
import axios from "axios";

const getBoardListApi = () => {
  return axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {})

    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

function App() {
  const [boardList, setBoardList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
    id: null,
  });

  const selectBoard = (board) => {
    setSelectedBoard(board);
  };

  const getBoardList = () => {
    return getBoardListApi().then((boards) => setBoardList(boards));
  };

  useEffect(() => {
    getBoardList();
  }, []);

  const boardElements = boardList.map((board) => {
    return (
      <li>
        <Board board={board} selectBoard={selectBoard} />
      </li>
    );
  });

  const createNewBoard = (newBoard) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
      .then((response) => {
        console.log("Response", response.data);
        const boards = [...boardList];
        boards.push(response.data);
        setBoardList(boards);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const [showForm, setShowForm] = useState(true);
  const toggleNewBoardForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>INSPIRATION BOARD</h1>
      </header>
      <main>
        <div className="topComponents">
          <div className="boardContainer">
            <h2 className="boardHeader">Boards</h2>
            <ol className="boardElements">{boardElements}</ol>
          </div>
          <div className="createCard">
            <h2 className="boardFooter">
              {" "}
              This is {selectedBoard.owner}'s <br></br>
              {selectedBoard.title}
            </h2>
          </div>
          <div className="createBoard">
            <h2>Create Board</h2>
            {showForm ? (
              <NewBoardForm createNewBoard={createNewBoard}></NewBoardForm>
            ) : (
              ""
            )}
            <button onClick={toggleNewBoardForm} className="hideButton">
              {showForm ? "Hide New Board Form" : "Show New Board Form"}
            </button>
          </div>
        </div>
        <CardsList board={selectedBoard} />
      </main>
    </div>
  );
}

export default App;
