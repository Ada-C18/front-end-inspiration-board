import Board from "./components/Board";
import { useState, useEffect } from "react";
import axios from "axios";
import CardsList from "./components/CardsList";
import NewBoardForm from "./components/NewBoardForm";

// helper function dedicated to only making API GET request for Boards
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
  // state variable and function for updating state of boardList
  const [boardList, setBoardList] = useState([]); // initial value for boardList is an empty list
  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
    id: null,
  });

  // Event handler function
  const selectBoard = (board) => {
    setSelectedBoard(board);
  };

  // Create a function that calls the getBoardListApi function
  // If that particular API call is successful, it will go ahead
  // and send the data and update/set it as our new state of boardList.
  const getBoardList = () => {
    return getBoardListApi().then((boards) => setBoardList(boards));
  };

  // useEffect is used to initially render data
  useEffect(() => {
    getBoardList(); // getBoardList just updates the state of boardList
  }, []); // using empty dependency

  // mapping through each board in boardList
  const boardElements = boardList.map((board) => {
    return (
      <li>
        <Board board={board} selectBoard={selectBoard} />
      </li>
    );
  });

  // Lift up state
  // Pass down event handlers from App to NewBoardForm
  // Make API call to create new board
  // clone boardList (piece of state) and add newly created board to update BoardList state
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
  // Create a toggle botton to show/hide board form
  const [showForm, setShowForm] = useState(true);
  const toggleNewBoardForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div>
          <h2>Boards</h2>
          <ol>{boardElements}</ol>
          <div>
            <h2>{selectedBoard.title}</h2>
          </div>
        </div>
        <CardsList board={selectedBoard} />
        <h2>Create New Board</h2>
        {showForm ? (
          <NewBoardForm createNewBoard={createNewBoard}/>
        ) : (
          ""
        )}
        <button onClick={toggleNewBoardForm} className="toggle-btn">
          {showForm ? "Hide New Board Form" : "Show New Board Form"}
        </button>
      </main>
    </div>
  );
}

export default App;
