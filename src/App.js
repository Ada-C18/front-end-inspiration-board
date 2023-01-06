import "./App.css";
import { useState } from "react";

// import Board from "./components/Board";
import BoardsList from "./components/BoardsList";
import NewBoardForm from "./components/NewBoardForm";

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

// -- Read Boards:
// View a list of all boards.
// Select a board.

function App() {
	// state for boardsList
	const [boardsList, setBoardsData] = useState(boardsData);
	

	// form prop function
	const addBoard = (newBoard) => {
		console.log("Calling addBoard");

		const updatedBoardsList = [...boardsList];

		// Pending - generate new id num (backend?)
		updatedBoardsList.push({
			board_id: newBoard.board_id, // hidden, implied primary key
			title: newBoard.title,
			owner: newBoard.owner,
		});

		setBoardsData(updatedBoardsList);
	};

	// Select Board
	// Make boards clickable

	return (
		<div className="App">
			{/* <Board /> */}
			<BoardsList boardsList={boardsList} />

			<p>{/* Selected: {title} - {owner} */}</p>
			<NewBoardForm addBoard={addBoard} />
		</div>
	);
}

export default App;
