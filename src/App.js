import Board from "./components/Board";
import CardsList from "./components/CardsList";
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

// helper function dedicated to only making API get request
const getBoardListApi = () => {
  return axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
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
    title: '',
    owner: '',
    id: null
  });

  // this is our event handler function that will be sent 
  // as a prop to Board component for when user clicks/selects 
  // specific board name
  const selectBoard = (board) => { setSelectedBoard(board) };

  // Create a fx that calls the getBoardListApi fx.
  // If that particular API call is successful, it will go ahead
  // and send the data and update/set it as our new state of boardList.
  const getBoardList = () => {
    return getBoardListApi().then((boards) => setBoardList(boards));
  };

  // useEffect is used to initially render data
  useEffect(() => {
    getBoardList(); // getBoardList just updates the state of boardList
  }, []); // using empty dependency (this lets react know just run the page once on this initial render)
  // If you don't have an empty dependency array, it will run over and over again.

  // mapping through each board in boardList
  const boardElements = boardList.map((board) => {
    return (
      <li>
        <Board board={board} selectBoard={selectBoard} />
      </li>
    );
  });

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
          <h2 className="boardFooter">{selectedBoard.title}</h2>
        </div>
        <div className = "createCard">
            <h2>Create Card</h2>
        </div>
        <div className = "createBoard">
          <h2>Create Board</h2>
        </div>
      </div>
        <CardsList board={selectedBoard}/>
      </main>
    </div>
  );
}

export default App;
