import './App.css';

import { useState } from 'react';
import axios from 'axios';

// import BoardContainer from './components/BoardContainer';
// import CardContainer from './components/CardContainer';
import NewBoardForm from './components/NewBoardForm';

function App() {
  const [boards, setBoards] = useState([]);
  const [message, setMessage] = useState("");

  // CREATE NEW BOARD WITH POST REQUEST
  const addBoard = (boardData) => {
    axios
      .post(process.env.REACT_APP_BACKEND_URL, boardData)
      .then((response) => {
        const newBoards = [...boards];
        newBoards.push({ title: response.data.title, owner: response.data.owner, ...boardData });
        setBoards(newBoards);
        setMessage("You made a new board!")
      })
      .catch((error) => {
        console.log(error)
        // if (error.includes("title")) {
        //   setMessage("Please enter a title.")
        // } else if (error.includes("owner")) {
        //   setMessage("Please enter an owner.")
        // } else {
        //   setMessage("Please enter a title or owner.");
        // }
        setMessage("Please enter a title or owner.");
      });
  };

  return (
    <div className="App">
      <NewBoardForm addBoardCallback={addBoard} afterSubmitMessage={message} />
      {/* <BoardContainer boards={boardData} />
      <CardContainer cards={cardData} /> */}
    </div>
  );
}

export default App;
