import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";

const App = () => {
  const [showBoard, setShowBoard] = useState(true);
  const [boardsData, setBoardsData] = useState([]);
  const [currentBoard, setCurrentBoard] = useState({});

  const effectHelper = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        setBoardsData(response.data.boards);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  useEffect(() => {
    effectHelper();
  }, []);

  const selectBoard = (board) => {
    setCurrentBoard(board);
  };

  const addBoardData = (newBoard) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard)
      .then((response) => {
        const newBoardsList = [...boardsData];
        newBoardsList.push(response.data);
        setBoardsData(newBoardsList);
      })
      .catch((error) => {
        console.log(("Error:", error));
      });
  };

  return (
    <div className="App">
      <div className="heading">
        <h2>Team Serval's</h2>
        <h1>Inspiration Board</h1>
      </div>
      <section className="sidebar">
        {showBoard ? <BoardForm addBoardData={addBoardData} /> : null}
        <button
          className="board-button"
          onClick={() => setShowBoard((showBoard) => !showBoard)}
        >
          {showBoard ? "Hide" : "Show"}
        </button>
        <BoardList
          boardsData={boardsData}
          onSelectBoard={selectBoard}
          currentBoard={currentBoard}
        />
      </section>
      {Object.keys(currentBoard).length === 0 ? null : (
        <CardList currentBoard={currentBoard} />
      )}
    </div>
  );
}

export default App;
