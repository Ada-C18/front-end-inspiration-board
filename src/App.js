import React, { useEffect, useState } from "react";
import axios from "axios";
import CardsList from "./components/CardsList";
import NewBoardForm from "./components/NewBoardForm";
import Board from "./components/Board";
import "./styles/App.css";

function App() {

  const [boardsData, setBoardsData] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: "",
    owner: "",
    board_id: null,
  });
  const [isBoardFormShowing, setIsBoardFormShowing] = useState(true);

  const selectBoard = (board) => {
    setSelectedBoard(board);
  };

  const resetSelectBoard = () => {
    setSelectedBoard(
      {
        title: "",
        owner: "",
        board_id: null,
      }
    )
  };

  const toggleNewBoardForm = () => {
    setIsBoardFormShowing(!isBoardFormShowing);
  };  

  useEffect(() => {
    axios
      .get("https://inpiration-board-haam.herokuapp.com/boards", {})
      .then((response) => {
        setBoardsData(response.data);
    });
  }, []);

  const getBoardCards = (board_id) => {
    axios
      .get(
        `https://inpiration-board-haam.herokuapp.com/boards/${board_id}/cards`
      )
      .then((response) => {
        setCardsData(response.data.cards);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Unable to retrieve cards for this board");
    });
  };

  const boardsList = boardsData.map((board, index) => {
    return (
      <li key={index}>
        <Board
          board={board}
          onSelect={selectBoard}
          displayCards={getBoardCards}
        ></Board>
      </li>
    );
  });

  const createNewBoard = (newBoard) => {
    axios
      .post(
        "https://inpiration-board-haam.herokuapp.com/boards", newBoard
      )
      .then((response) => {
        console.log("Response:", response.data.boards);
        const boards = [...boardsData];
        boards.push(response.data.boards);
        setBoardsData(boards);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Error creating a new board");
    });
  };

  const deleteOneBoard = (board_id) => {
    axios
      .delete(
        `https://inpiration-board-haam.herokuapp.com/boards/${board_id}`
      )
      .then((response) => {
        const newBoardsData = boardsData.filter((deletedBoard) => {
          return deletedBoard.board_id !== board_id;
        });
        setBoardsData(newBoardsData);
        resetSelectBoard();
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Unable to delete this board");
    });
  };

  const deleteAllBoards = (boards) => {
    axios
    .delete(
      "https://inpiration-board-haam.herokuapp.com/boards"
      )
    .then((response) => {;
      setBoardsData([])
      resetSelectBoard();
    })
    .catch((error) => {
      console.log("Error:", error);
      alert("Unable to delete all boards");
    });
  };

  const createNewCard = (message) => {
    axios
      .post(
        `https://inpiration-board-haam.herokuapp.com/boards/${selectedBoard.board_id}/cards`,
        { message }
      )
      .then((response) => {
        console.log("Response:", response.data.cards);
        const cards = [...cardsData];
        cards.push(response.data.cards);
        setCardsData(cards);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't create a new card.");
    });
  };

  const deleteCard = (cardId) => {
    axios
      .delete(
        `https://inpiration-board-haam.herokuapp.com/cards/${cardId}`
      )
      .then((response) => {
        const newCardsData = cardsData.filter((deletedCard) => {
          return deletedCard.card_id !== cardId;
        });
        setCardsData(newCardsData);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Unable to delete the selected card");
    });
  };

  const updateLikes = async (cardId) => {
    try {
      const res = await axios.patch(`https://inpiration-board-haam.herokuapp.com/boards/${selectedBoard.board_id}/cards/${cardId}`);
      onCardLikes(cardId);
    } catch(err) {
      console.error(err);
    }
  }

  const onCardLikes = (cardId) => {
    setCardsData(cardsData.map(card => {
      if(card.card_id === cardId) {
          return {...card, likes: card.likes + 1}
      } else {
          return card;
      }
  }));
  }

  return (
    <main className="mainContainer">
      <section>
        <h1>Inspiration Board</h1>
      </section>
      <section>
        <section className="upperGrid">
          <section>
            <h2 className="noBottomMargin">List of Boards</h2>
            <div className="deleteBoards"
              onClick={(event) => deleteAllBoards(boardsData)}>
              Delete All Boards
            </div>
            <p>Select a board to view from the list below</p>
            <ul className="listOfBoards">{boardsList}</ul>
          </section>
          <section>
            <h2 className="noBottomMargin">Now Viewing:</h2>
            <div className="deleteBoards"
              onClick={(event) => deleteOneBoard(selectedBoard.board_id)}>
              {selectedBoard.board_id 
                ? "Delete This Board"
                : ""}
            </div>
            <p className="selectedBoard">
              {selectedBoard.board_id &&
              `${selectedBoard.title} by ${selectedBoard.owner}`}
            </p>
          </section>
          <section>
            <h2>Need a New Board?</h2>
            <p>Enter details below and click Create</p>
              {isBoardFormShowing && (
                <NewBoardForm
                addNewBoard={createNewBoard}
                ></NewBoardForm>
              )}
            <br />
            <div
              onClick={toggleNewBoardForm}
              className="toggleNewBoardForm">
              {isBoardFormShowing
                ? "Hide New Board Form"
                : "Show New Board Form"}
            </div>
          </section>
        </section>
        {selectedBoard.board_id && (
          <CardsList 
            board={selectedBoard}
            onUpdateLikes={updateLikes}
            onDeleteCard={deleteCard}
            addNewCard={createNewCard}
            cards={cardsData}
          ></CardsList>
        )}
      </section>
      <footer>
        <h3>
          © 2023 Inspiration Board | Hoku, Alaere, Anika, & Mia | C18
          Snow Leopards
        </h3>
      </footer>
    </main>
  );
};

export default App;
