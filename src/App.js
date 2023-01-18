import "./App.css";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import BoardList from "./Components/BoardList";
import NewBoardForm from "./Components/NewBoardForm";
import CardList from "./Components/CardList";
import NewCardForm from "./Components/NewCardForm";
import RainbowText from "react-rainbow-text";

const convertFromApiCard = (apiCard) => {
  const { board_id: boardId, id, likes_count: likesCount, message } = apiCard;

  return { boardId, id, likesCount, message };
};

const getAllBoardsApi = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/boards`
  );
  return response.data;
};

const deleteCardApi = async (cardId) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`
  );
  return convertFromApiCard(response.data);
};

const sortCardsByikesApi = async (selectedBoardId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoardId}/cards?sort=likes`
  );
  return response.data.map(convertFromApiCard);
};

const sortCardsByAscApi = async (selectedBoardId) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoardId}/cards?sort=asc`
  );
  return response.data.map(convertFromApiCard);
};

function App() {
  const [allBoardData, setAllBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [showCardForm, setShowCardForm] = useState(false);
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const [cardsData, setCardsData] = useState([]);

  // BOARDS
  // Board click
  const handleBoardClick = (title, owner, id) => {
    setSelectedBoard({ title: title, owner: owner, id: id });
    setShowCardForm(true);
  };

  // Get all boards
  // useEffect(() => {
  //   const getAllBoards = async () => {
  //     const boards = await getAllBoardsApi();
  //     setAllBoardData(boards);
  //   };
  //   getAllBoards();
  // }, []);

  useEffect(() => {
    getAllBoards();
  }, []);

  const getAllBoards = async () => {
    const boards = await getAllBoardsApi();
    setAllBoardData(boards);
  };

  // New board form
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
      return []
    }
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard.id}/cards`)
    return response.data.map(convertFromApiCard);
  }, [selectedBoard]);

  useEffect(() => {
    const getAllCards = async () => {
      const cards = await getAllCardsApi();
      setCardsData(cards);
    };
    getAllCards();
  }, [getAllCardsApi] );

  const getAllCards = async () => {
    const selectedBoardId = selectedBoard.id;
    const cards = await getAllCardsApi(selectedBoardId);
    setCardsData(cards);
  };

  // Adds card through card form
  const addCardData = async (cardForm) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/cards`,
      cardForm
    );
    const newCard = [...cardsData];
    const convertedCard = convertFromApiCard(response.data.card)
    newCard.push(convertedCard);
    setCardsData(newCard);
  };

  // Delete a card
  const handleDeleteCard = async (cardId) => {
    await deleteCardApi(cardId);
    return getAllCards();
  };

  // Likes
  const handleLikesApi = async (cardId, boardId, message, likesCount) => {
    const plusOneLike = { likes_count: likesCount + 1 };
    await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}/like`,
      plusOneLike
    );
    const newCardsData = cardsData.map((card) => {
      return card.cardId !== cardId
        ? card
        : {
            cardId: cardId,
            boardId: boardId,
            message: message,
            likesCount: likesCount,
          };
    });
    setCardsData(newCardsData);
  };

  const handleLikes = async (cardId, boardId, message, likesCount) => {
    await handleLikesApi(cardId, boardId, message, likesCount);
    return getAllCards();
  };

  // Sort **ALMOST WORKING**
  const [sortType, setSortType] = useState("");

  const handleChange = (e) => {
    const selectedSort = e.target.value;
    setSortType(selectedSort);


    if (sortType === "id") {
        return getAllCards();
      }
    if (sortType === "alphabetically") {
      const selectedBoardId = selectedBoard.id;
      const sorted = sortCardsByAscApi(selectedBoardId);
      setCardsData(sorted);
    }
    if (sortType === "likesCount") {
      const selectedBoardId = selectedBoard.id;
      const sorted = sortCardsByikesApi(selectedBoardId);
      setCardsData(sorted);
    }
  };


  // useEffect(() => {
  //   const sortArray = (type) => {
  //     const types = {
  //       id: "id",
  //       alphabetically: "message",
  //       likes: "likesCount",
  //     };
  //     const sortProperty = types[type];
  //     if (sortProperty === "id") {
  //       return getAllCards();
  //     }
  //     if (sortProperty === "message") {
  //       const selectedBoardId = selectedBoard.id;
  //       const sorted = sortCardsByAscApi(selectedBoardId);
  //       setCardsData(sorted);
  //     }
  //     if (sortProperty === "likesCount") {
  //       const selectedBoardId = selectedBoard.id;
  //       const sorted = sortCardsByikesApi(selectedBoardId);
  //       setCardsData(sorted);
  //     }
  //   };
  //   sortArray(sortType);
  // }, [sortType]);


  return (
    <div className="whole__page">
      {/* BOARDS */}
      <h1 className="App__header">
        <RainbowText lightness={0.5} saturation={1}>
          💫 No thoughts Just vibes Inspiration Board 💫
        </RainbowText>
      </h1>
      <section
        style={{
          backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYknV4AaaHSWrEZmZFZsCZrcFsfKQeFqNeQ&usqp=CAU")`,
        }}
        className="all__board__container"
      >
        <section className="board__container">
          <h2 className="board_header">
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
          <div
            style={{
              backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/734ced07-9d10-475f-b63a-cd31b48584e5/d2xhif2-df14212c-955e-44f1-8183-a7271d277cf0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzczNGNlZDA3LTlkMTAtNDc1Zi1iNjNhLWNkMzFiNDg1ODRlNVwvZDJ4aGlmMi1kZjE0MjEyYy05NTVlLTQ0ZjEtODE4My1hNzI3MWQyNzdjZjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.c9PQZA9uwHQaNYlTpEUrKqP93NinlJ6ktXhmOxVhuU4")`,
            }}
            className="all_card__container"
          >
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
              <section className="sort_by">
                Sort messages
                <select value={sortType} onChange={handleChange}>
                  <option value="id">by Oldest to Newest</option>
                  <option value="alphabetically">Alphabetically</option>
                  <option value="likesCount">by Most Likes</option>
                </select>
              </section>
            </section>
            <section className="card__form">
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
