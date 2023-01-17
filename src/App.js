import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

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

// REQUIREMENTS
// -- Read Boards:
// View a list of all boards.
// Select a board.

function App() {
	// state for boardsList
	const [boardsList, setBoardsData] = useState(boardsData);

	const URL = "http://127.0.0.1:5000";

	// TODO: Select Board  State - top level, Make boards clickable
	// State for selected board - manage here
	// State: Selected Board ID
	// const [selectedBoardId, setSelected] = useState(false);
	const [selectedBoard, setSelected] = useState({
		board_id: 1,
		title: "Do things!",
		owner: "Milena",
	}); // move useState somewhere else?

	// 	const updateSelectedBoard = () => {
	// 	console.log("updateBoard called");
	// };

	// Todo: add API post / add Board code
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

	// ------------ Cards Logic ----------- //
	// State: Selected Board Cards
	const [selectedCards, setCardsList] = useState(cardsData); // useState([]);

	// TODO: ask Backend team about GET Cards route
	const fetchCardsURL = `${URL}/${selectedBoard.board_id}/cards`; // "/<board_id>/cards"
	// 2 different GET routes in backend repo
	// 1. @boards_bp.route("/<board_id>/cards", methods = ["GET"])
	// def get_board_cards(board_id):
	// 2. @cards_bp.route("", methods = ["GET"])
	// def get_all_cards():
	console.log(fetchCardsURL);

	// Get all cards with board ID
	const fetchCards = () => {
		axios
			.get(fetchCardsURL)
			.then((response) => {
				console.log(response);
				const cardsAPIResCopy = response.data.map((card) => {
					return {
						cardId: card.cardId,
						message: card.message,
						// likesCount: card.likesCount,
					};
				});
				setCardsList(cardsAPIResCopy);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// initial get cards request
	useEffect(fetchCards, []);

	// Add Card Function
	// Todo: add API post card code
	const addCard = (newCard) => {
		console.log("Calling addCard");

		const newCardsList = [...selectedCards];
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

			{/* Todo: display elements below after selecting Board */}
			<h2>Cards for {selectedBoard.title} Quotes</h2>
			{/* <h2>Cards for "insert Board title here" Quotes</h2> */}
			<CardsList cardsList={selectedCards} />

			<h2>Create New Card</h2>
			<NewCardForm addCardCallback={addCard} />
		</div>
	);
}

export default App;
