import "./App.css";

// import BikeList from "./components/BikeList.js";
import axios from "axios";
import NewBoard from "./components/NewBoard";
import BoardList from "./components/BoardList";
import NewCard from "./components/NewCard";
//TODO: Add card list
import { useEffect, useState } from "react";
import CardList from "./components/CardList";

function App() {
  const [boardList, setBoardList] = useState([]);
  const [cardList, setCardList] = useState([]);
  const [boardForm, setBoardForm] = useState(true); //-----------------ADDED-------------

  const URL = "http://127.0.0.1:5000";

  // const InitialList = [
  //   {
  //     id: 1,
  //     title: "titletest",
  //     name: "nametest",
  //     selected: false,
  //   },
  //   {
  //     id: 2,
  //     title: "titletest2",
  //     name: "nametest2",
  //     selected: false,
  //   },
  // ];
  // const InitialCardList = [];

  // const cardBoardMap = {
  //   1: [
  //     { id: 1, message: "yay1", numOfLikes: 0, liked: false },
  //     { id: 2, message: "help1", numOfLikes: 0, liked: false },
  //   ],
  //   2: [
  //     { id: 3, message: "yay2", numOfLikes: 0, liked: false },
  //     { id: 4, message: "help2", numOfLikes: 0, liked: false },
  //   ],
  // };

  const getAllBoards = () => {
    axios
      .get(`${URL}/boards`)
      .then((response) => {
        const boaredsAPIResponseCopy = response.data.map((board) => {
          return {
            ...board,
          };
        });
        setBoardList(boaredsAPIResponseCopy);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(getAllBoards, []); //initial get request

  const getAllCards = () => {
    axios
      .get(`${URL}/cards`)
      .then((response) => {
        const cardsAPIResponseCopy = response.data.map((card) => {
          return {
            ...card,
          };
        });
        setCardList(cardsAPIResponseCopy);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(getAllCards, []); //initial get request

  //---------------------------------ADDED----------------------------------------------

  let displayBoardFormText = "HIDE/SHOW NEW BOARD FORM";
  const displayBoardForm = (boardForm) => {
    let newBoardForm = "";
    if (boardForm === false) {
      newBoardForm = true;
    } else {
      newBoardForm = false;
      displayBoardFormText = "SHOW NEW BOARD FORM";
    }
    setBoardForm(newBoardForm);
  };
  //--------------------------------------------------------------------------------------

  const addBoard = (newBoardInfo) => {
    axios
      .post(`${URL}/boards`, newBoardInfo)
      .then((response) => {
        // console.log("RESPONSEEEE", response.data);
        getAllBoards(); //<- This helper function will make a .get() call to fetch all bikes and update the state variable to display them
        const newBoards = [...boardList];
        const newBoardJSON = {
          ...newBoardInfo,
          id: response.data.id /*response.data.id*/,
        };
        newBoards.push(newBoardJSON);
        setBoardList(newBoards); //this method does not require a .get request; we are pushing the bike data to the bikes list and using the setter to trigger a rerender.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCard = (newCardInfo) => {
    axios
      .post(`${URL}/cards`, newCardInfo)
      .then((response) => {
        getAllCards(); //<- This helper function will make a .get() call to fetch all bikes and update the state variable to display them
        const newCards = [...cardList];
        const newCardJSON = {
          ...newCardInfo,
          id: response.data.id /*response.data.id*/,
          // //---------------------------------ADDED----------------------------------------------

          board_id: selectedBoard.id,
          // messageLength: newCardInfo.message.length /*response.data.id*/,
          // //-------------------------------------------------------------------------------------
        };
        newCards.push(newCardJSON);
        setCardList(newCards); //this method does not require a .get request; we are pushing the bike data to the bikes list and using the setter to trigger a rerender.
        // updateCardList(cardList, boardId, setCardList) ----DO WE NEED THIS HERE?
      }) /*)*/
      .catch((error) => {
        console.log(error);
      });
  };

  //TO ADD THIS WITH AXIOS - NEED A PATCH ROUTE IN be (but don't think we need it to connect to axios? wait-- the setcards update might need to tho)
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

    updateCardList(boardId, true);
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

    updateCardList(/*cardList, */ boardId /*, setCardList*/, false); //MAKE SURE USING THIS IN OTHER FUNCTIONS THAT NEED IT?
  };

  const selectCard = (cardId) => {};

  const unselectCard = (cardId) => {};
  // const cardBoardMap = {
  //   1: [
  //     { id: 1, message: "yay1", numOfLikes: 0, liked: false },
  //     { id: 2, message: "help1", numOfLikes: 0, liked: false },
  //   ],
  //   2: [
  //     { id: 3, message: "yay2", numOfLikes: 0, liked: false },
  //     { id: 4, message: "help2", numOfLikes: 0, liked: false },
  //   ],
  // };

  function updateCardList(boardId, selection) {
    const newCardList = [];
    //want to turn selected: to true for cards that have card.board_id===boardId, and false for the others
    for (const card of cardList) {
      if (card.board_id === boardId && selection === true) {
        const newCard = {
          ...card,
          selected: true,
        };
        newCardList.push(newCard);
      } else {
        const newCard = {
          ...card,
          selected: false,
        };
        newCardList.push(newCard);
      }
    }

    // function updateCardList(boardId) {
    //   const cardBoardMap = {}
    //   for (const board in boardList) {
    //     cardBoardMap[board.id] = []
    //     for (const card in cardList){
    //       if (card.board_id===boardId) {
    //         cardBoardMap[board.id].push(card)
    //       }
    //     }
    //   }
    //   const newCardList = [];
    //   if (cardBoardMap[boardId] != null) {
    //     for (const card in cardBoardMap[boardId]) {
    //       const newCard = {
    //         ...cardBoardMap[boardId][card],
    //         selected: true,
    //       };
    //       newCardList.push(newCard); //only putting cards of specific board id into "newCardList"
    //       console.log("in updateCardList, newCard being updated:", newCard);
    //     }
    //   }
    // for (const board in cardBoardMap) {
    //   if (parseInt(board) !== boardId /*&& cardBoardMap[board] != null*/) {
    //     console.log("board: ", board, "boardId: ", boardId);
    //     for (const card in cardBoardMap[board]) {
    //       const newCard = {
    //         ...cardBoardMap[board][card],
    //         selected: false,
    //       };
    //       newCardList.push(newCard);
    //     }
    //   }
    // }

    setCardList(newCardList); //only setting the state with values in newCardList (which are onlyy cards of the specified board)
  }

  // function updateCardList(boardId) {
  //   const newCardList = [];
  //   if (cardBoardMap[boardId] != null) {
  //     for (const card in cardBoardMap[boardId]) {
  //       const newCard = {
  //         ...cardBoardMap[boardId][card],
  //         selected: true,
  //       };
  //       newCardList.push(newCard); //only putting cards of specific board id into "newCardList"
  //       console.log("in updateCardList, newCard being updated:", newCard);
  //     }
  //   }
  // for (const board in cardBoardMap) {
  //   if (parseInt(board) !== boardId /*&& cardBoardMap[board] != null*/) {
  //     console.log("board: ", board, "boardId: ", boardId);
  //     for (const card in cardBoardMap[board]) {
  //       const newCard = {
  //         ...cardBoardMap[board][card],
  //         selected: false,
  //       };
  //       newCardList.push(newCard);
  //     }
  //   }
  // }

  //   setCardList(newCardList); //only setting the state with values in newCardList (which are onlyy cards of the specified board)
  //   console.log("in updateCardList, the updated CardList:", newCardList);
  //   console.log("state cardList", cardList);
  // }
  // console.log("state cardList part 2", cardList);

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
  const updateLike = (cardId, updatedPrice, liked) => {
    const newCardList = [];
    axios
      .patch(`${URL}/cards/${cardId}/${liked}`)
      .then((response) => {
        for (const card of cardList) {
          if (card.id !== cardId) {
            newCardList.push(card);
          } else {
            const newCard = {
              ...card,
              liked: !card.liked,
              likes_count: updatedPrice,
            };
            newCardList.push(newCard);
          }
        }
        setCardList(newCardList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCard = (cardId) => {
    axios
      .delete(`${URL}/cards/${cardId}`)
      .then(() => {
        const newCardList = [];
        for (const card of cardList) {
          if (card.id !== cardId) {
            newCardList.push(card);
          }
        }
        setCardList(newCardList);
        // NOT PERSISTING DATA WHEN CLICKING OFF OFF THE BOARD
      })
      .catch((err) => {
        console.log(err);
      });
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
        {selectedBoard.title} - {selectedBoard.owner}
      </p>
      <h2>CREATE NEW BOARD</h2>
      <NewBoard boardForm={boardForm} addBoardCallback={addBoard}></NewBoard>
      <button onClick={() => displayBoardForm(boardForm)}>
        {displayBoardFormText}
      </button>
      <h2>CARDS FOR {selectedBoard.title}</h2>
      <CardList
        cardList={cardList}
        selectCard={selectCard}
        unselectCard={unselectCard}
        selectBoard={selectBoard}
        updateLike={updateLike}
        selectedBoard={selectedBoard}
        deleteCard={deleteCard}
      />
      {/* <NewCardForm></NewCardForm> */}
      <h2>CREATE NEW CARD</h2>
      <NewCard selectedBoard={selectedBoard} addCardCallback={addCard} />
      {/* <main>
        <CardsList entries={singleCard} />
      </main> */}
    </div>
  );
}

export default App;
