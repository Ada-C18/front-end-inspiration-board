import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board.js";
import CardList from "./components/CardList.js";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import axios from "axios";

function App() {
  const [boardsList, setBoardsList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
      title: '',
      owner: '',
      id: null
    }
);
  const [selectedBoardLabel, setSelectedBoardLabel] = useState("Select A Board");
  const [selectedBoardTitle, setSelectedBoardTitle] = useState("Affirmation");

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
    // console.log("joguioiuoiuoih");
    for (const board of boardsList) {
      if (board.id === boardId) {
        const boardTitle = board.title;
        const boardOwner = board.owner;
        const selectedBoardInfo = `${boardTitle} - ${boardOwner}`;
        setSelectedBoardLabel(selectedBoardInfo);
        setSelectedBoardTitle(boardTitle)
        setSelectedBoard({
          title: `${boardTitle}`,
          owner: `${boardOwner}`,
          id: `${boardId}`
        })
      };
    };
  };

  // const likeCounter = (newChatList) => {
  //   for (const chat of newChatList) {
  //     if (chat.liked === true) {
  //       likeSum += 1;
  //     };
  //   };
  //   setNumLikes(likeSum);
  // };

  const boardsComponent = boardsList.map((board) => {
    
    return (
      <ul key={board.id}> 
        <Board board={board} onBoardSelect={onBoardSelect}></Board>
      </ul>
    );
  });

  return (
    <div className="container">
      <header>
        <section>
          <h1>SELECTED BOARD</h1>
          <p>{selectedBoardLabel}</p>
        </section>
        <section>
        {selectedBoard.board_id ? <NewCardForm></NewCardForm> : ''}
          {/* <h2>Create A New Card</h2>
          <NewCardForm></NewCardForm> */}
        </section>
        
      </header>
      <aside>
        <section>
          <h1>Create A New Board</h1>
          <NewBoardForm></NewBoardForm>
        </section>
        <section>
          <h1>Boards</h1>
          {boardsComponent}
        </section>
      </aside>
      <main>
        {selectedBoard.board_id ? <CardList board={selectedBoard}></CardList> : ''}
        {/* <h1>Cards for {selectedBoardTitle}</h1>
        <CardList board={selectedBoard}></CardList> */}
      </main>
    </div>
  );
};

export default App;