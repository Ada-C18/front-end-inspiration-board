import { useEffect, useState } from "react";
import BoardList from "./components/BoardList";
import BoardForm from "./components/BoardForm";
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";
import axios from "axios";
import "./App.css";
/* 
Title - Inspiration Board 
Different sections for - 
Boards
  numbered list of the boards
Selected Board - display which board from Boards was clicked
  if board is not clicked - "Select a Board from the Board List"
  "Board Name" - "Owner Name"
Cards for {selected board name}
  display all the cards for the board below 

2 Forms - 
Create New Board (hide and show form)
Create New Card (new card should only show once board is selected)
  adding card to selected board
*/
// const DEFAULT_CARDS = [
//   { id: 1, boardId: 1, message: "Hello This is Puja" },
//   { id: 2, boardId: 1, message: "Bye -Puja" },
//   { id: 3, boardId: 2, message: "Hello This is Miranda" },
//   { id: 4, boardId: 2, message: "Bye -Miranda" },
//   { id: 5, boardId: 3, message: "Hello This is Julia" },
//   { id: 6, boardId: 3, message: "Bye -Julia" },
//   { id: 7, boardId: 4, message: "Hello This is Abby" },
//   { id: 8, boardId: 4, message: "Bye -Abby" },
// ];

// const DEFAULT_BOARDS = [
//   {
//     id: 1,
//     title: "Our First Board",
//     owner: "Puja",
//   },
//   {
//     id: 2,
//     title: "Our Second Board",
//     owner: "Miranda",
//   },
//   {
//     id: 3,
//     title: "Our Third Board",
//     owner: "Julia",
//   },
//   {
//     id: 4,
//     title: "Our Fourth Board",
//     owner: "Abby",
//   },
// ];

function App() {
  const cardURL = "http://localhost:5000/cards";
  const boardURL = "http://localhost:5000/boards";

  const [boardList, setBoardList] = useState([]);
  const [cardList, setCardList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    board: "Please Select a Board!",
    id: false,
  });

  const fetchAllBoards = () => {
    axios
      .get(boardURL)
      .then((response) => {
        console.log(response);
        const boardAPIResCopy = response.data.map((board) => {
          return {
            id: board.board_id,
            owner: board.owner,
            title: board.title,
          };
        });
        setBoardList(boardAPIResCopy);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const fetchAllCards = () => {}
  useEffect(fetchAllBoards, []);

  const fetchAllCards = () => {
    axios
      .get(`${boardURL}/${selectedBoard.id}/cards`)
      .then((response) => {
        console.log(response);
        const cardAPIResCopy = response.data.map((card) => {
          return {
            id: card.card_id,
            message: card.message,
            likesCount: card.likes_count,
            boardId: card.board_id,
          };
        });
        setCardList(cardAPIResCopy);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const fetchAllCards = () => {}
  useEffect(fetchAllCards, [selectedBoard]);

  const selectBoard = (title, owner, boardId) => {
    console.log("selectBoard is called");
    const boardTitle = `${title} - ${owner}`;
    const newSelectedBoard = { board: boardTitle, id: boardId };
    setSelectedBoard(newSelectedBoard);
  };

  const addBoard = (newBoardInfo) => {
    axios
      .post(boardURL, newBoardInfo)
      .then((response) => {
        fetchAllBoards();

        const newBoards = [...boardList];
        console.log(response.data);
        const newBoard = { ...newBoardInfo, id: response.data.board_id };
        newBoards.push(newBoard);

        setBoardList(newBoards);
      })
      .catch((error) => {
        console.log(error);
        console.log("Board was not able to be added.");
      });
  };

  // console.log("addBoard called");
  // const newBoards = [...boardList];
  // console.log(boardList[boardList.length - 1].id + 1);
  // const newBoard = {
  //   ...newBoardInfo,
  //   id: boardList[boardList.length - 1].id + 1,
  // };
  // newBoards.push(newBoard);
  // setBoardList(newBoards);

  const addCard = (newCardInfo) => {
    axios
      .post(`${boardURL}/${selectedBoard.id}/cards`, newCardInfo) 
      // i think youre right! ok does it work? no T_T MAYBE HERE WE DON't need the board id cool!!  Yes I see it as you saied before cool thank you! see u afternoon
      

      // it works! we needed to remove the selected board as a parameter of add card
      .then((response) => {
        fetchAllCards();

        const newCards = [...cardList];
        const newCard = {
          ...newCardInfo,
          id: response.data.card_id,
          boardId: response.data.board_id,
          likesCount: response.data.likes_count,
        };

        newCards.push(newCard);

        setCardList(newCards);
      })
      .catch((error) => {
        console.log(error);
        console.log("Card was not able to be added");
      });
  };

  // console.log("addCard called");
  // const newCards = [...cardList];
  // const newCard = {
  //   ...newCardInfo,
  //   id: cardList[cardList.length - 1].id + 1,
  //   boardId: selectedBoard.id,
  // };
  // newCards.push(newCard);
  // setCardList(newCards);

  const deleteCard = (cardId) => {
    axios
      .delete(`${cardURL}/${cardId}`)
      .then(() => {
        const newCardList = [];
        for (const card of cardList) {
          if (card.id !== cardId) {
            newCardList.push(card);
          }
        }
        setCardList(newCardList);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //   console.log("deleteCard called");
  //   const newCards = [];
  //   for (let card of cardList) {
  //     if (card.id !== cardId) {
  //       newCards.push(card);
  //     }
  //   }
  //   setCardList(newCards);
  // };

  return (
    <div className="InspoBoard">
      <header className="Header">
        <h1>Inspiration Board</h1>
      </header>
      <BoardList className="BoardList" boardList={boardList} selectBoard={selectBoard}></BoardList>
      <div className="selectBoard">
        <h2>Selected Board</h2>
        <p>{selectedBoard.board}</p>
      </div>
      <BoardForm addBoardCallbackFunc={addBoard}></BoardForm>
      <CardList
        selectedBoardId={selectedBoard.id}
        deleteCard={deleteCard}
        cardList={cardList}
      ></CardList>
      <CardForm
        addCardCallbackFunc={addCard}
        selectedBoard={selectedBoard}
      ></CardForm>
    </div>
  );
}

export default App;
