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
// BOARDS
// -- Read Boards:
// View a list of all boards. - fetchAllBoards
// Select a board. - updateSelectedBoard

function App() {
	// state for boardsList
	const [boardsList, setBoardsData] = useState(boardsData);

	const URL = "http://127.0.0.1:5000";

	// Get all cards with board ID
	const fetchAllBoards = () => {
		axios
			.get(`${URL}/boards`)
			.then((response) => {
				console.log(`get response: ${response}`);
				const boardsAPIResCopy = response.data.map((board) => {
					return {
						boardId: board.board_id, // or boardId
						title: board.title,
						owner: board.owner,
					};
				});
				// update boardsList state
				setBoardsData(boardsAPIResCopy);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// initial get request
	useEffect(fetchAllBoards, []);

	const addBoard = (newBoard) => {
		console.log("Calling addBoard");

		axios
			.post(`${URL}/boards`, newBoard)
			.then((response) => {
				const updatedBoardsList = [...boardsList];
				updatedBoardsList.push({
					...newBoard,
					// check board id response var name
					// Pending - generate new id num (backend?)
					boardId: response.data.board_id, // hidden, implied primary key
				});

				setBoardsData(updatedBoardsList);
			})
			.catch((error) => console.log(error));
	};

	// Selected Board State
	const [selectedBoard, setSelected] = useState({
		boardId: 1,
		title: "Do things!",
		owner: "Milena",
	});

	const updateSelectedBoard = (boardId) => {
		console.log("updateBoard called");
		axios
			.get(`${URL}/boards/${boardId}`)
			.then((response) => {
				console.log(response);
				const boardAPIResCopy = response.data;
				setSelected(boardAPIResCopy);
			})
			.catch((error) => {
				console.log(error);
			});

		// setSelected({
		//   board_id: 2,
		//   title: "You can do it!",
		//   owner: "Laura",
		// });
	};

	// ------------ Cards Logic ----------- //
	// State: Selected Board Cards
	const [selectedCards, setCardsList] = useState(cardsData); // useState([]);

	// TODO: ask Backend team about GET Cards route
	const fetchCardsURL = `${URL}/${selectedBoard.board_id}/cards`; // "boardId"?
	// console.log(fetchCardsURL);

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

	const deleteCard = (cardId) => {
		console.log("deleteCard called");

		axios
			.delete(`${URL}/${cardId}`)
			.then(() => {
				const newCardsList = [];
				for (const card of selectedCards) {
					if (card.cardId !== cardId) {
						newCardsList.push(card);
					}
				}
				setCardsList(newCardsList);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="App">
			{/* <Board /> */}
			<BoardsList
				boardsList={boardsList}
				updateSelectedBoard={updateSelectedBoard}
			/>

			<h1>Selected Board</h1>
			{/* TODO: Add logic show selectedBoard if selectedBoard is not empty */}
			{/* <p>Select a Board from the Board List!</p> */}
			<p>
				{selectedBoard.title} - {selectedBoard.owner}
			</p>

			<NewBoardForm addBoard={addBoard} />

			{/* Todo: display elements below after selecting Board */}
			<h2>Cards for {selectedBoard.title} Quotes</h2>
			{/* <h2>Cards for "insert Board title here" Quotes</h2> */}
			<CardsList cardsList={selectedCards} deleteCard={deleteCard} />

			<h2>Create New Card</h2>
			<NewCardForm addCardCallback={addCard} />
		</div>
	);
}

export default App;
