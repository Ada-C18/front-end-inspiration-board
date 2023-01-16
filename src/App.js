import { useEffect, useState } from 'react';
import axios from 'axios';

import BoardContainer from './components/BoardContainer';
import CardContainer from './components/CardContainer';
import Header from './components/Header';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';

function App() {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState("");

  // CREATE NEW BOARD
  const addBoard = (boardData) => {
    axios
      .post("http://127.0.0.1:5000/board", boardData)
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

  // CREATE NEW CARD
  const addCard = (cardData) => {
    axios
      .post("http://127.0.0.1:5000/card", cardData)
      .then((response) => {
        const newCards = [...cards];
        newCards.push({ message: response.data.message, ...cardData });
        setCards(newCards);
        setMessage("You made a new card!")
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
        setMessage("Please enter valid input.");
      });
  };

  // GET ALL BOARDS
  useEffect(() => {
    axios
    .get("http://127.0.0.1:5000/board")
    .then((response) => {
      const newBoards = response.data.map((board) => {
        return {
          key: board.board_id,
          title: board.title,
          owner: board.owner,
        };
      });
      setBoards(newBoards);
    })
    .catch((error) => {
      console.log(error)
    });
  }, []);


  return (
    <div className="App">
      <Header />
      <NewBoardForm addBoardCallback={addBoard} afterSubmitMessage={message} />
      <BoardContainer boards={boards}/>
      <NewCardForm addCardCallback={addCard} afterSubmitMessage={message} />
      <CardContainer />
    </div>
  );
}

export default App;
