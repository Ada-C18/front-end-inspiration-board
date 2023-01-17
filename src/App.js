import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board.js";
import {CardList, addCard} from "./components/CardList.js";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import axios from "axios";


function App() {
  const [boardsList, setBoardsList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
      title: '',
      owner: '',
      id: null
    });

  const [selectedBoardLabel, setSelectedBoardLabel] = useState("Select A Board");
  // const [selectedBoardTitle, setSelectedBoardTitle] = useState("Affirmation");
  const cardsListVisible = selectedBoard.id ? <CardList board={selectedBoard}></CardList> : ''
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        const boardsListCopy = response.data.map((board) => {
          return {
            ...board,
          };
        });
        setBoardsList(boardsListCopy);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const onBoardSelect = (boardId) => {
    for (const board of boardsList) {
      if (board.id === boardId) {
        const boardTitle = board.title;
        const boardOwner = board.owner;
        const selectedBoardInfo = `${boardTitle} - ${boardOwner}`;
        setSelectedBoardLabel(selectedBoardInfo);
        setSelectedBoard(board)
      };
    };
  };
  
  const boardsComponent = boardsList.map((board) => {
    
    return (
      <ul key={board.id}> 
        <Board board={board} onBoardSelect={onBoardSelect}></Board>
      </ul>
    );
  });
  
  const addBoard = (newBoardInfo) => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoardInfo)
    .then((response) => {
      const newBoards = [...boardsList];
      const newBoardJSON = {
        ...newBoardInfo,
        "id": response.data.board.id
      }
      newBoards.push(newBoardJSON);
      setBoardsList(newBoards);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  
  
  
  const newCardFormVisible = selectedBoard.id ? <NewCardForm createNewCardForm={addCard}></NewCardForm> : ''
  
  return (
    <div className="container">
      <header>
        <section>
          <h1>SELECTED BOARD</h1>
          <p>{selectedBoardLabel}</p>
        </section>
        <section>
          {newCardFormVisible}
        </section>    
      </header>
      <aside>
        <section className = "newBoard">
          <h1>Create A New Board</h1>
          <NewBoardForm createNewBoardForm={addBoard}></NewBoardForm>
        </section>
        <section className = "boards">
          <h1>Boards</h1>
          <ul>
            {boardsComponent}
          </ul>
        </section>
      </aside>
      <main>
          {cardsListVisible}
      </main>
    </div>
  );
};

export default App;