import "./App.css";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import BoardList from "./Components/BoardList";
import NewBoardForm from "./Components/NewBoardForm";
import CardList from "./Components/CardList";
import NewCardForm from "./Components/NewCardForm";
import RainbowText from "react-rainbow-text";
import {
  convertFromApiCard,
  getAllBoardsApi,
  deleteCardApi,
} from "./HelperFunctions/ApiCalls.js";

function App() {
  const [allBoardData, setAllBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [showCardForm, setShowCardForm] = useState(false);
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const [cardsData, setCardsData] = useState([]);

  // BOARDS
  // Select a board
  const handleBoardClick = (title, owner, id) => {
    setSelectedBoard({ title: title, owner: owner, id: id });
    setShowCardForm(true);
  };

  useEffect(() => {
    getAllBoards();
  }, []);

  const getAllBoards = async () => {
    const boards = await getAllBoardsApi();
    setAllBoardData(boards);
  };

  // Add a board- New board form
  const toggleNewBoardForm = () => {
    setIsBoardFormVisible(!isBoardFormVisible);
  };

  const addBoard = async (boardData) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/boards`,
      boardData
    );
    const newBoards = [...allBoardData];
    newBoards.push({ ...response.data.board });
    setAllBoardData(newBoards);
  };

  // CARDS
  // Get all cards for selected board
  const getAllCardsApi = useCallback(async () => {
    if (!selectedBoard) {
      return [];
    }
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard.id}/cards`
    );
    return response.data.map(convertFromApiCard);
  }, [selectedBoard]);

  useEffect(() => {
    const getAllCards = async () => {
      const cards = await getAllCardsApi();
      setCardsData(cards);
    };
    getAllCards();
  }, [getAllCardsApi]);

  const getAllCards = async () => {
    const selectedBoardId = selectedBoard.id;
    const cards = await getAllCardsApi(selectedBoardId);
    setCardsData(cards);
  };

  // Add a card- New card form
  const addCardData = async (cardForm) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/cards`,
      cardForm
    );
    const newCard = [...cardsData];
    const convertedCard = convertFromApiCard(response.data.card);
    newCard.push(convertedCard);
    setCardsData(newCard);
    if (sortType === "likesCount") {
      return getAllCardsByLikes();
    } else if (sortType === "alphabetically") {
      return getAllCardsByAsc();
    } else {
      return getAllCards();
    }
  };

  // Delete a card
  const handleDeleteCard = async (cardId) => {
    await deleteCardApi(cardId);
    if (sortType === "likesCount") {
      return getAllCardsByLikes();
    } else if (sortType === "alphabetically") {
      return getAllCardsByAsc();
    } else {
      return getAllCards();
    }
  };

  // Like a card and Likes count
  const handleLikesApi = async (cardId, likesCount) => {
    const plusOneLike = { likes_count: likesCount + 1 };
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}/like`,
      plusOneLike
    );
    const cardResult = convertFromApiCard(response.data.card);
    setCardsData((cardsData) =>
      cardsData.map((card) => {
        if (card.id === cardResult.id) {
          return cardResult;
        } else {
          return card;
        }
      })
    );
  };

  const handleLikes = async (cardId, likesCount) => {
    await handleLikesApi(cardId, likesCount);
    if (sortType === "likesCount") {
      getAllCardsByLikes();
    }
  };

  // Sort pull down- Works with error
  const [sortType, setSortType] = useState("");

  const handleChange = (e) => {
    setSortType(e.target.value);
  };

  const sortCardsByAscApi = useCallback(async () => {
    if (!selectedBoard) {
      return [];
    }
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard.id}/cards?sort=asc`
    );
    return response.data.map(convertFromApiCard);
  }, [selectedBoard]);

  const sortCardsByLikesApi = useCallback(async () => {
    if (!selectedBoard) {
      return [];
    }
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard.id}/cards?sort=likes`
    );
    return response.data.map(convertFromApiCard);
  }, [selectedBoard]);

  const getAllCardsByAsc = async () => {
    const cards = await sortCardsByAscApi(selectedBoard.id);
    setCardsData(cards);
  };

  const getAllCardsByLikes = async () => {
    const cards = await sortCardsByLikesApi(selectedBoard.id);
    setCardsData(cards);
  };

  const sortArray = () => {
    if (sortType === "id") {
      return getAllCards();
    }
    if (sortType === "alphabetically") {
      return getAllCardsByAsc();
    }
    if (sortType === "likesCount") {
      return getAllCardsByLikes();
    }
  };

  useEffect(() => {
    sortArray(sortType);
  }, [sortType]);


  return (
    <div>
      {/* BOARDS */}
      <h1 className="App__header">
        <RainbowText lightness={0.7} saturation={1}>
          💫 No Thoughts Just Vibes Inspiration Board 💫
        </RainbowText>
      </h1>
      <section className="all__board__container">
        <section className="board__container">
          <h2 className="board__header">
            🌟 Select a Board to see their inspirational messages 🌟
          </h2>
          <section className="boards">
            <BoardList
              boardData={allBoardData}
              handleBoardClick={handleBoardClick}
            />
          </section>
          <section className="select__board">
            {!selectedBoard ? (
              <span>👆 Select a board 👆</span>
            ) : (
              <span>
                🤩 You selected {selectedBoard.title} made by{" "}
                {selectedBoard.owner} 🤩
              </span>
            )}
          </section>
        </section>
        <section className="create__board__form">
          <h3 className="create__board__header">✨ Create a Board ✨</h3>
          {isBoardFormVisible ? (
            <NewBoardForm addBoardCallback={addBoard} />
          ) : (
            ""
          )}
          <button className="hide__button" onClick={toggleNewBoardForm}>
            {isBoardFormVisible ? "Hide Form" : "Show Form"}
          </button>
        </section>
      </section>
      {/* CARDS */}
      <section>
        {showCardForm ? (
          <div className="all__card__container">
            <section className="cards__container">
              <h4 className="cards__header">
                🌟 {selectedBoard.title} Messages 🌟
              </h4>
              <div className="cards">
                <CardList
                  cardsData={cardsData}
                  handleLikes={handleLikes}
                  handleDeleteCard={handleDeleteCard}
                />
              </div>
              <section className="sort__by">
                Sort messages
                <select
                  className="sort__by__pull__down"
                  value={sortType}
                  onChange={handleChange}
                >
                  <option value="id">by Newest to Oldest</option>
                  <option value="alphabetically">Alphabetically</option>
                  <option value="likesCount">by Most Likes</option>
                </select>
              </section>
            </section>
            <section className="card__form">
              <h1 className="card__form__header">✨ Create a Message ✨</h1>
              <NewCardForm
                addCardData={addCardData}
                selectedBoard={selectedBoard}
              />
            </section>
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default App;
