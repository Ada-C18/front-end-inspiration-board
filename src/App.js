import "./App.css";
import { useState } from "react";

// import Board from "./components/Board";
import BoardsList from "./components/BoardsList";
import NewBoardForm from "./components/NewBoardForm";

// 1. Create component files
// 2. Set up components in App
// 3. Display list of Boards
// 4. Form

const boardsData = [
	{
		board_id: 1,
		title: "Do things!",
		owner: "Milena",
	},
	{
		board_id: 2,
		title: "You can do it!",
		owner: "Laura",
	},
];

function App() {
	// state for boardsList
	const [boardsList, setBoardsData] = useState(boardsData);

	// form prop function
  // todo - add event listener
	const addBoard = (board) => {
    const newBoard = board;
    // boardsList.push(newBoard);
    const updatedBoardsList = boardsList.push(newBoard);
    
    setBoardsData(updatedBoardsList) ;
  };

	return (
		<div className="App">
			{/* <Board /> */}
			<BoardsList boardsList={boardsData} />
			<NewBoardForm addBoard={addBoard} />
		</div>
	);
}

export default App;
