import "./App.css";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import { useState, useEffect } from "react";
import axios from "axios";

export const URL = "https://powerful-mesa-70650.herokuapp.com/boards";

const convertFromApi = (apiBoard) => {
  const { title, owner, id } = apiBoard;
  const newBoard = { id, title, owner };
  return newBoard;
};

const getAllBoards = async () => {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
    return response.data.map(convertFromApi);
  } catch (error) {
    console.log(error.message);
  }
};

// const testBoards = [
//   { title: "Test Board One ", id: 1, owner: "Pavi" },
//   { title: "Test Board Two", id: 2, owner: "Soleil" },
//   { title: "Test Board Three", id: 3, owner: "Misha" },
// ];
const emptyBoard = { id: 0, title: " ", owner: " " };

function App() {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(emptyBoard);

  const refreshBoard = async () => {
    try {
      const boards = await getAllBoards();
      setBoardData(boards);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    refreshBoard();
  }, []);

  const clickToSelectBoard = (id) => {
    console.log("this function is running!");
    for (const board of boardData) {
      console.log(board, id);
      if (board.id === id) {
        setSelectedBoard(board);
      }
    }
  };
  const addBoard = (newBoard) => {
    console.log(newBoard);
    const newBoardList = [...boardData];
    const newBoardId = Math.max(...newBoardList.map((board) => board.id)) + 1;
    newBoardList.push({
      id: newBoardId,
      title: newBoard.title,
      owner: newBoard.owner,
    });
    setBoardData(newBoardList);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Boards</h1>
      </header>
      <main>
        <BoardList boards={boardData} onClickBoard={clickToSelectBoard} />
        <p className="BoardHeading">
          Selected Board: {selectedBoard.title} -- {selectedBoard.owner}'s Board
        </p>
        <NewBoardForm addBoardCallBack={addBoard} />
        <div>
          <CardList board={selectedBoard} />
        </div>
      </main>
    </div>
  );
}

export default App;
