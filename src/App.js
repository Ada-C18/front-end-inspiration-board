import { useState } from "react";
import BoardList from "./components/BoardList";
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
  const [selectedBoard, setSelectedBoard] = useState("Please Select a Board");

  const selectBoard = (title, owner) => {
    console.log("selectBoard is called");
    const boardTitle = `${title} - ${owner}`;

    setSelectedBoard(boardTitle);
  };

  return (
    <div className="InspoBoard">
      <header>
        <h1>Inspiration Board</h1>
      </header>
      <BoardList
        boardList={DEFAULT_BOARDS}
        selectBoard={selectBoard}
      ></BoardList>
      <h2>Selected Board</h2>
      <p>{selectedBoard}</p>
    </div>
  );
}

export default App;
