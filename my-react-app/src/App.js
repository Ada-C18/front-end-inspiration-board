import "./App.css";

// import BikeList from "./components/BikeList.js";
// import axios from "axios";
import NewBoard from "./components/NewBoard";
import BoardList from "./components/BoardList";
import NewCard from "./components/NewCard";
//TODO: Add card list
import { useState } from "react";
import CardList from "./components/CardList";

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
  const InitialCardList = [];

  const [boardList, setBoardList] = useState(InitialList);
  const [cardList, setCardList] = useState(InitialCardList);

  const cardBoardMap = {
    1: [
      { id: 1, message: "yay1", numOfLikes: 0, liked: false },
      { id: 2, message: "help1", numOfLikes: 0, liked: false },
    ],
    2: [
      { id: 3, message: "yay2", numOfLikes: 0, liked: false },
      { id: 4, message: "help2", numOfLikes: 0, liked: false },
    ],
  };

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

    updateCardList(boardId);
  };

  const selectCard = (cardId) => {};

  const unselectCard = (cardId) => {};

  function updateCardList(boardId) {
    const newCardList = [];
    if (cardBoardMap[boardId] != null) {
      for (const card in cardBoardMap[boardId]) {
        const newCard = {
          ...cardBoardMap[boardId][card],
          selected: true,
        };
        newCardList.push(newCard);
      }
    }

    setCardList(newCardList);
  }

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

    updateCardList(cardList, boardId, setCardList);
  };

  let selectedBoard = {};
  // const displaySelectedBoard = (boardId) => { when select one it sets the others to false - only 1 selected true - consider changing selecte and unselect funtions so only 1 True select shows title and name
  for (const board of boardList) {
    if (board.selected === true) {
      selectedBoard = {
        ...board,
      };
    }
  }
  // };
  const updateLike = (cardId) => {
    const newCardList = [];
    for (const card of cardList) {
      if (card.id !== cardId) {
        newCardList.push(card);
      } else {
        const newCard = {
          ...card,
          liked: !card.liked,
        };
        newCardList.push(newCard);
      }
    }
    setCardList(newCardList);
  };

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
        {selectedBoard.title} - {selectedBoard.name}
      </p>
      <h2>CREATE NEW BOARD</h2>
      <NewBoard addBoardCallback={addBoard}></NewBoard>
      <h2>CARDS FOR {selectedBoard.title}</h2>
      <CardList
        cardList={cardList}
        selectCard={selectCard}
        unselectCard={unselectCard}
        selectBoard={selectBoard}
        updateLike={updateLike}
      />
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
