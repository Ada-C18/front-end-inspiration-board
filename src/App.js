import "./App.css";
import Card from "./components/Board";
import { useEffect, useState } from "react";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import CardsList from "./components/CardsList";
import Board from "./components/Board";

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
    board_id: null,
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {})
      .then((response) => {
        setBoardsData(response.data);
      });
  }, []);

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

  // const handleBoardSubmit = (data) => {
  //   createNewBoard(data).then(newBoard);
  // };

  return (
    <div className="App">
      <header className="App-header">Inspiration Board</header>
      <div>
        <NewBoardForm createNewBoard={createNewBoard} />
        <span onClick={NewBoardForm}></span>
      </div>

      <div>
        <CardsList />
      </div>
    </div>
  );
}

export default App;
