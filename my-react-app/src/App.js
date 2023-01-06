import "./App.css";

// import BikeList from "./components/BikeList.js";
// import axios from "axios";
import NewBoard from "./components/NewBoard";
import BoardList from "./components/BoardList";
import NewCard from "./components/NewCard";
import { useState } from "react";

function App() {
  const InitialList = [
    {
      id: 1,
      title: "titletest",
      name: "nametest",
      selected: false,
    },
    {
      id: 2,
      title: "titletest2",
      name: "nametest2",
      selected: false,
    },
  ];
  const InitialCardList = [
    { id: 1, message: "yay" },
    { id: 2, message: "help" },
  ];
  const [boardList, setBoardList] = useState(InitialList);
  const [cardList, setCardList] = useState(InitialCardList);

  const addBoard = (newBoardInfo) => {
    // axios.post(URL, newBoardInfo)
    // .then((response)=>{
    //fetchAllBikes();  //<- This helper function will make a .get() call to fetch all bikes and update the state variable to display them
    const newBoards = [...boardList];
    const newBoardJSON = {
      ...newBoardInfo,
      id: Math.floor(Math.random() * 100) /*response.data.id*/,
    };
    newBoards.push(newBoardJSON);
    setBoardList(newBoards); //this method does not require a .get request; we are pushing the bike data to the bikes list and using the setter to trigger a rerender.
  }; /*)*/
  // .catch((error)=>{
  //   console.log(error);
  // });

  const addCard = (newCardInfo) => {
    // axios.post(URL, newBoardInfo)
    // .then((response)=>{
    //fetchAllBikes();  //<- This helper function will make a .get() call to fetch all bikes and update the state variable to display them
    const newCards = [...cardList];
    const newCardJSON = {
      ...newCardInfo,
      id: Math.floor(Math.random() * 100) /*response.data.id*/,
    };
    newCards.push(newCardJSON);
    setCardList(newCards); //this method does not require a .get request; we are pushing the bike data to the bikes list and using the setter to trigger a rerender.
  }; /*)*/
  // .catch((error)=>{
  //   console.log(error);
  // });

  const selectBoard = (boardId) => {
    const newBoardList = [];
    //turn every boards selected key to false
    for (const board of boardList) {
      if (board.id === boardId) {
        const newBoard = {
          ...board,
          selected: true,
        };
        newBoardList.push(newBoard);
      } else {
        const newBoard = {
          ...board,
          selected: false,
        };
        newBoardList.push(newBoard);
      }
    }
    setBoardList(newBoardList);
  };

  const unselectBoard = (boardId) => {
    const newBoardList = [];
    for (const board of boardList) {
      if (board.id === boardId) {
        const newBoard = {
          ...board,
          selected: false,
        };
        newBoardList.push(newBoard);
      } else {
        newBoardList.push(board);
      }
    }
    setBoardList(newBoardList);
  };
  const selectedBoard = [];
  // const displaySelectedBoard = (boardId) => {
  for (const board of boardList) {
    if (board.selected === true) {
      selectedBoard.push(board.title, board.name);
    }
  }
  // };

  return (
    <div className="App">
      <h1 className="App-header"> Mindful Moments</h1>
      <h2>BOARDS</h2>
      <main>
        <BoardList
          boardList={boardList}
          selectBoard={selectBoard}
          unselectBoard={unselectBoard} /* entries={Board}*/
        />
      </main>
      <h2>SELECTED BOARDS</h2>
      <p>
        {selectedBoard[0]} - {selectedBoard[1]}
      </p>
      <h2>CREATE NEW BOARD</h2>
      <NewBoard addBoardCallback={addBoard}></NewBoard>
      <h2>CARDS FOR {selectedBoard[0]}</h2>
      {/* <NewCardForm></NewCardForm> */}
      <h2>CREATE NEW CARD</h2>
      <NewCard addCardCallback={addCard} />
      {/* <main>
        <CardsList entries={singleCard} />
      </main> */}
    </div>
  );
}

export default App;
