import "./App.css";
import { useState, useEffect } from "react";
import BoardList from "./components/BoardList.js";
import CardList from "./components/CardList.js";
//import CreateBoard from "./components/CreateBoard.js";
import axios from "axios";

//const apiUrl = process.env.REACT_APP_BACKEND_URL;
const apiUrl = false;

const MOCK_BOARD_LIST = [
  {
    id: 1,
    owner: "lilian",
    title: "title test",
  },
  {
    id: 2,
    owner: "neida",
    title: "welcome",
  },
  {
    id: 3,
    owner: "tanil",
    title: "test title",
  },
  {
    id: 4,
    owner: "lain",
    title: "all the boards",
  },
];

const MOCK_BOARD = {
  board: {
    cards: [
      {
        board_id: 1,
        id: 1,
        likes_count: 54,
        message: "does this return an int",
      },
      {
        board_id: 1,
        id: 2,
        likes_count: 0,
        message: "we're testing more",
      },
      {
        board_id: 1,
        id: 3,
        likes_count: 17,
        message: "lots of cards",
      },
      {
        board_id: 1,
        id: 4,
        likes_count: 20,
        message: "no sql databases",
      },
      {
        board_id: 1,
        id: 5,
        likes_count: 6,
        message: "no concept of migrations",
      },
    ],
    id: 1,
    owner: "yet",
    title: "title test",
  },
};

const getAllBoards = () => {
  if (!apiUrl)
    return new Promise((resolve, reject) => resolve(MOCK_BOARD_LIST));
  else
    return axios
      .get(`${apiUrl}/boards`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
};

const getBoard = (board_id) => {
  if (!apiUrl) return new Promise((resolve, reject) => resolve(MOCK_BOARD));
  else
    return axios
      .get(`${apiUrl}/board/${board_id}`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
};

function App() {
  const [boardList, setBoardList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState();
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    getAllBoards().then((allBoards) => {
      setBoardList(allBoards);
      setSelectedBoard(0);
    });
  }, []);

  useEffect(() => {
    console.log(selectedBoard);
    if (selectedBoard !== undefined) {
      getBoard(selectedBoard.id).then((boardData) =>
        setCardList(boardData.board.cards)
      );
    }
    //setCardList(MOCK_BOARD.board.cards);
  }, [selectedBoard]);

  const selectBoard = (event) => {};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Boards</h1>
      </header>
      <main>
        <BoardList boards={boardList} selectBoard={selectBoard}></BoardList>
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
