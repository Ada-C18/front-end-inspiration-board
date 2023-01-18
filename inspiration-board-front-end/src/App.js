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

const emptyBoard = { id: 0, title: "", owner: "" };

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
    axios
      .post(URL, newBoard)
      .then((response) => {
        const newBoardList = [...boardData];
        newBoardList.push(response.data.board);
        setBoardData(newBoardList);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't create a new board. Try again!");
      });
  };

  const deleteAllBoards = () => {
    axios
      .delete(`${URL}`)
      .then((response) => {
        setBoardData(response);
        setSelectedBoard(emptyBoard);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't delete all boards. Try again!");
      });
  };

  let selectedBoardDisplay = "Please select a board to display cards";
  if (selectedBoard.id !== 0) {
    selectedBoardDisplay = `Selected Board: ${selectedBoard.title} (${selectedBoard.owner}'s Board)`;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Boards</h1>
      </header>
      <main>
        <section className="Boards-Area">
          <BoardList
            className="BoardList-box"
            boards={boardData}
            onClickBoard={clickToSelectBoard}
          />
          <NewBoardForm
            className="NewBoardForm-box"
            addBoardCallBack={addBoard}
          />
        </section>
        <p className="SelectedBoard ">{selectedBoardDisplay}</p>

        <CardList
          className="CardList-Area"
          selectedBoardId={selectedBoard.id}
        />
        <button onClick={deleteAllBoards} className="Delete-Button">
          Click Here to delete ALL Boards and Cards Data
        </button>
      </main>
    </div>
  );
}

export default App;
