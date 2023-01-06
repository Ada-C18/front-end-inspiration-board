import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board.js";
import CardList from "./components/CardList.js";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import axios from "axios";

function App() {
  const [boardsList, setBoardsList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState("Select A Board");

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
    console.log("joguioiuoiuoih");
    for (const board of boardsList) {
      if (board.id === boardId) {
        const selectedBoardTitle = board.title;
        const selectedBoardOwner = board.owner;
        const selectedBoardInfo = `${selectedBoardTitle} - ${selectedBoardOwner}`;
        setSelectedBoard(selectedBoardInfo);
      }
    }
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
          <p>{selectedBoard}</p>
        </section>
        <section>
          <h2>Create A New Card</h2>
          <NewCardForm></NewCardForm>
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
        <div>
          <h1>Cards for Affirmations</h1>
          <CardList></CardList>
        </div>
      </main>
    </div>
  );
}

export default App;
