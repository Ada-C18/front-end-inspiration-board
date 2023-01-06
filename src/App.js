import "./App.css";
import { useState, useEffect } from "react";
import BoardList from "./components/BoardList.js";
import CardList from "./components/CardList.js";
import CreateBoardForm from "./components/CreateBoardForm.js";
import axios from "axios";

const api = {
  baseUrl: process.env.REACT_APP_BACKEND_URL,

  logErr: (err) => {
    console.log("Request error", err.config.url, err.config.data);
    console.log(err);
  },

  getAllBoards: () =>
    axios
      .get(`${api.baseUrl}/boards`)
      .then((response) => response.data)
      .catch(api.logErr),

  getBoard: (board_id) =>
    axios
      .get(`${api.baseUrl}/boards/${board_id}`)
      .then((response) => response.data)
      .catch(api.logErr),

  postBoard: (boardData) => {
    console.log("Posting board", boardData);
    return axios
      .post(`${api.baseUrl}/boards`, boardData)
      .then((response) => response.data)
      .catch(api.logErr);
  },
};

function App() {
  const [boardList, setBoardList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState();
  const [cardList, setCardList] = useState([]);

  const refreshBoardList = () => {
    api.getAllBoards().then((allBoards) => {
      setBoardList(allBoards);
      selectBoard(allBoards[0].board_id);
    });
  };

  useEffect(refreshBoardList, []);

  useEffect(() => {
    if (selectedBoard !== undefined) {
      api
        .getBoard(selectedBoard)
        .then((boardData) => setCardList(boardData.board.cards));
    }
  }, [selectedBoard]);

  const selectBoard = (id) => {
    if (id !== undefined) setSelectedBoard(id);
  };

  const createBoard = (newBoard) => {
    console.log("createBoard newBoard", newBoard);
    api.postBoard(newBoard).then((createdBoard) => {
      console.log("then createdBoard", createdBoard);
      refreshBoardList();
      selectBoard(createdBoard.board_id);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Boards</h1>
      </header>
      <main>
        <BoardList boards={boardList} selectBoard={selectBoard}></BoardList>
        <CreateBoardForm createBoard={createBoard}></CreateBoardForm>
        <h2>
          Board:{" "}
          {boardList[selectedBoard] ? boardList[selectedBoard].title : "None"}
        </h2>
        <CardList cards={cardList}></CardList>
      </main>
    </div>
  );
}

export default App;
