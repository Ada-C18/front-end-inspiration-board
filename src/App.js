import './App.css';

import { useState } from 'react';
import axios from 'axios';

import BoardContainer from './components/BoardContainer';
import CardContainer from './components/CardContainer';
import NewBoardForm from './components/NewBoardForm';


function App() {
  const [boards, setBoards] = useState([]);


  // create new board, post request
  const addBoard = (boardData) => {
    axios
      .post(URL, boardData)
      .then((response) => {
        const newBoards = [...boards];
        newBoards.push({ title: response.data.title, owner: response.data.owner, ...boardData });
        setBoards(newBoards);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <NewBoardForm addBoardCallback={addBoard}/>
      {/* <BoardContainer boards={boardData} />
      <CardContainer cards={cardData} /> */}
    </div>
  );
}

export default App;
