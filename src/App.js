import "./App.css";
import { useState } from "react";

import BoardsList from "./components/BoardsList";
import NewBoardForm from "./components/NewBoardForm";

// Cards Components
import CardsList from "./components/CardsList";
import NewCardForm from "./components/NewCardForm";

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

const cardsData = [
	{ cardId: 1, message: "great job" },
	{ cardId: 2, message: "you're doing great" },
];

// -- Read Boards:
// View a list of all boards.
// Select a board.

function App() {
	// state for boardsList
	const [boardsList, setBoardsData] = useState(boardsData);

	// TODO: Select Board  State - top level
	// State: Selected Board ID
	// Make boards clickable
	// State for selected board - manage here
	// const [selected, setSelected] = useState(false); // move useState somewhere else

	// 	const updateSelectedBoard = () => {
	// 	console.log("updateBoard called");
	// };

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

	// Add Card
	// State: Selected Board Cards
	// TODO: Move cards state logic to Board component
	const [cards, setCardsList] = useState(cardsData);

	const addCard = (newCard) => {
		console.log("Calling addCard");

		const newCardsList = [...cards];

		newCardsList.push({
			board_id: newCard.board_id, // hidden, implied primary key
			message: newCard.message,
		});

		setCardsList(newCardsList);
	};

	return (
		<div className="App">
			{/* <Board /> */}
			<BoardsList boardsList={boardsList} />

			<p>{/* Selected: {title} - {owner} */}</p>
			<NewBoardForm addBoard={addBoard} />

			{/* Todo: might need to move CardsList component somewhere else, like Board component */}
			<h2>Cards for "insert Board title here" Quotes</h2>
			<CardsList cardsList={cards} />
			<h2>Create New Card</h2>
			<NewCardForm addCardCallback={addCard} />
		</div>
	);
}

export default App;
