import "./App.css";
import { useState, useEffect } from "react";
import BoardList from "./components/BoardList.js";
import CardList from "./components/CardList.js";
import CreateBoardForm from "./components/CreateBoardForm.js";
import CreateCardForm from "./components/CreateCardForm.js";
import axios from "axios";

const api = {
  baseUrl: process.env.REACT_APP_BACKEND_URL,

  logErr: (err) => {
    console.log("Request error", err.config.url, err.config.data);
    console.log(err);
  },

  getAllBoards: () =>
    axios
      .get(`${api.baseUrl}/boards`)
      .then((response) => response.data)
      .catch(api.logErr),

  getBoard: (board_id) =>
    axios
      .get(`${api.baseUrl}/boards/${board_id}`)
      .then((response) => response.data)
      .catch(api.logErr),

  getCards: (board_id) =>
    axios
      .get(`${api.baseUrl}/boards/${board_id}/cards`)
      .then((response) => response.data)
      .catch(api.logErr),

  postBoard: (boardData) =>
    axios
      .post(`${api.baseUrl}/boards`, boardData)
      .then((response) => response.data)
      .catch(api.logErr),

  postCard: (cardData) =>
    axios
      .post(`${api.baseUrl}/cards`, cardData)
      .then((response) => response.data)
      .catch(api.logErr),

  likeCard: (cardId) =>
    axios
      .patch(`${api.baseUrl}/cards/${cardId}`)
      .then((response) => response.data)
      .catch(api.logErr),
};

function App() {
  const [boardList, setBoardList] = useState();
  const [selectedBoard, setSelectedBoard] = useState();
  const [cardList, setCardList] = useState();

  const refreshBoardList = () => {
    api.getAllBoards().then((allBoards) => {
      setBoardList(allBoards);
    });
  };
  useEffect(refreshBoardList, []);

  useEffect(() => {
    if (selectedBoard !== undefined) {
      api
        .getCards(selectedBoard.board_id)
        .then((cardData) => setCardList(cardData.cards));
    }
  }, [selectedBoard]);

  const selectBoard = (id) =>
    setSelectedBoard(boardList.find((board) => id === board.board_id));

  const likeCard = (id) =>
    api
      .likeCard(id)
      .then((likedCard) =>
        setCardList(
          [...cardList].map((card) =>
            card.card_id === likedCard.card_id ? likedCard : card
          )
        )
      );

  const createBoard = (newBoard) =>
    api.postBoard(newBoard).then((createdBoard) => {
      refreshBoardList();
      setSelectedBoard(createdBoard);
    });

  const createCard = (newCard) =>
    api
      .postCard(newCard)
      .then((createdCard) => selectBoard(createdCard.card.board_id));

  return (
    <div className="App">
      <header className="inspiration_style">
        <h1 className="inspiration_background"> Inspiration Board </h1>
      </header>
      <main>
        <div className="wrapper">
          <div className="one">
            <CreateBoardForm createBoard={createBoard}></CreateBoardForm>
          </div>
          <div className="two">
            <BoardList
              boards={boardList || []}
              selectBoard={selectBoard}
            ></BoardList>
          </div>
          <div className="three">
            {selectedBoard && (
              <section>
                <CardList
                  title={selectedBoard.title}
                  owner={selectedBoard.owner}
                  cards={cardList || []}
                  likeCard={likeCard}
                ></CardList>

                <CreateCardForm
                  createCard={createCard}
                  board={selectedBoard.board_id}
                ></CreateCardForm>
                <h2>
                  Cards on {selectedBoard.title} for {selectedBoard.owner}
                </h2>
              </section>
            )}{" "}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
