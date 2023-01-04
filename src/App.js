import { useState } from "react";
import BoardList from "./components/BoardList";
import BoardForm from "./components/BoardForm";
import CardList from "./components/CardList";
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
const DEFAULT_CARDS = [
  { id: 1, boardId: 1, message: "Hello This is Puja" },
  { id: 2, boardId: 1, message: "Bye -Puja" },
  { id: 3, boardId: 2, message: "Hello This is Miranda" },
  { id: 4, boardId: 2, message: "Bye -Miranda" },
  { id: 5, boardId: 3, message: "Hello This is Julia" },
  { id: 6, boardId: 3, message: "Bye -Julia" },
  { id: 7, boardId: 4, message: "Hello This is Abby" },
  { id: 8, boardId: 4, message: "Bye -Abby" },
];

const DEFAULT_BOARDS = [
  {
    id: 1,
    title: "Our First Board",
    owner: "Puja",
  },
  {
    id: 2,
    title: "Our Second Board",
    owner: "Miranda",
  },
  {
    id: 3,
    title: "Our Third Board",
    owner: "Julia",
  },
  {
    id: 4,
    title: "Our Fourth Board",
    owner: "Abby",
  },
];

function App() {
  const [boardList, setBoardList] = useState(DEFAULT_BOARDS);
  const [cardList, setCardList] = useState(DEFAULT_CARDS);
  const [selectedBoard, setSelectedBoard] = useState("Please Select a Board");

  const selectBoard = (title, owner, boardId) => {
    console.log("selectBoard is called");
    const boardTitle = `${title} - ${owner}`;
    const newSelectedBoard = { board: boardTitle, id: boardId };
    setSelectedBoard(newSelectedBoard);
  };

  const addBoard = (newBoardInfo) => {
    console.log("addBoard called");
    const newBoards = [...boardList];
    console.log(boardList[boardList.length - 1].id + 1);
    const newBoard = {
      ...newBoardInfo,
      id: boardList[boardList.length - 1].id + 1,
    };
    newBoards.push(newBoard);
    setBoardList(newBoards);
  };

  return (
    <div className="InspoBoard">
      <header>
        <h1>Inspiration Board</h1>
      </header>
      <BoardList boardList={boardList} selectBoard={selectBoard}></BoardList>
      <h2>Selected Board</h2>
      <p>{selectedBoard.board}</p>
      <BoardForm addBoardCallbackFunc={addBoard}></BoardForm>
      <CardList
        selectedBoardId={selectedBoard.id}
        cardList={cardList}
      ></CardList>
    </div>
  );
}

export default App;
