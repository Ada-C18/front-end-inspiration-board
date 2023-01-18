import "./App.css";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import "./Fonts/GlossySheenRegular-L35oy.ttf";

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
        setBoardData([]);
        setSelectedBoard(emptyBoard);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't delete all boards. Try again!");
      });
  };

  const deleteOneBoard = (board_id) => {
    axios
      .delete(`${URL}/${board_id}`)
      .then((response) => {
        const newBoardData = boardData.filter((oldBoards) => {
          return oldBoards.id !== board_id;
        });
        setBoardData(newBoardData);
        setSelectedBoard(emptyBoard);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't delete board. Try again!");
      });
  };

  let selectedBoardDisplay = "Please select a board to display cards";
  if (selectedBoard.id !== 0) {
    selectedBoardDisplay = `${selectedBoard.title} (${selectedBoard.owner}'s Board)`;
  }

  return (
    <div className="App">
      <header id="App-header">
        <h1>✐ Inspiration Boards ✎</h1>
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
          onDeleteBoard={deleteOneBoard}
        />
        <button
          onClick={() => {
            if (window.confirm("Are you sure you wish to delete this item?")) {
              deleteAllBoards();
            }
          }}
          className="Delete-Button"
        >
          Click Here to delete ALL Boards and Cards Data
        </button>
        <div></div>
      </main>
    </div>
  );
}

export default App;
