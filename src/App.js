import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import BoardsList from "./components/BoardsList";
import NewBoardForm from "./components/NewBoardForm";
import CardsList from "./components/CardsList";
import NewCardForm from "./components/NewCardForm";

function App() {
	const [boardsList, setBoardsData] = useState([]);

	const URL = "http://127.0.0.1:5000";

	const fetchAllBoards = () => {
		axios
			.get(`${URL}/boards`)
			.then((response) => {
				const boardsAPIResCopy = response.data.map((board) => {
					return {
						board_id: board.board_id, // or boardId
						title: board.title,
						owner: board.owner,
					};
				});
				setBoardsData(boardsAPIResCopy);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(fetchAllBoards, []);

	const addBoard = (newBoard) => {
		axios
			.post(`${URL}/boards`, newBoard)
			.then((response) => {
				console.log(`add board response: ${response}`);
				const updatedBoardsList = [...boardsList];
				updatedBoardsList.push({
					...newBoard,
					// check board id response var name
					// Pending - generate new id num (backend?)
					board_id: response.data.board_id, // hidden, implied primary key
				});

				setBoardsData(updatedBoardsList);
			})
			.catch((error) => console.log(error));
	};

	// Selected Board State
	const [selectedBoard, setSelected] = useState([]);

	console.log(`selectedBoard: ${selectedBoard}`);

	const updateSelectedBoard = (boardId) => {
		console.log("updateBoard called");
		axios
			.get(`${URL}/boards/${boardId}`)
			.then((response) => {
				console.log(response);
				const boardAPIResCopy = response.data;
				setSelected(boardAPIResCopy);
				fetchCards(boardId);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// ------------ Cards Logic ----------- //
	const [selectedCards, setCardsList] = useState([]); // useState([]);

	// console.log(`selectedBoard id: ${selectedBoard.board_id}`);

	const fetchCards = (board_id) => {
		const fetchCardsURL = `${URL}/boards/${board_id}/cards`;
		axios
			.get(fetchCardsURL)
			.then((response) => {
				const cardsAPIResCopy = response.data.map((card) => {
					console.log(
						"Inside of app level this is what Card is",
						card
					);
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

	const addCard = (newCard) => {
		axios
			.post(`${URL}/boards/${selectedBoard.board_id}/cards`, newCard)
			.then((response) => {
				const updatedCardsList = [...selectedCards];
				updatedCardsList.push({
					...newCard,
					cardId: response.data.card_id,
				});
				setCardsList(updatedCardsList);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const deleteCard = (cardId) => {
		axios
			.delete(`${URL}/cards/${cardId}`)
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
			<div>
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
			</div>
			{/* Todo: display elements below after selecting Board */}
			{/* <h2>Cards for {selectedBoard.title} Quotes</h2> */}
			<CardsList
				cardsList={selectedCards}
				deleteCard={deleteCard}
				boardTitle={selectedBoard.title}
			/>

			<NewCardForm addCardCallback={addCard} />
		</div>
	);
}

export default App;
