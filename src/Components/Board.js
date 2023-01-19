import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import CardForm from "./CardForm";
import SortSelector from "./SortSelector.js";
import "./Board.css";

const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}`;

const Board = (props) => {
  const [cardList, setCardList] = useState([]);
  const addNewCard = (message) => {
    axios
      .post(`${BACKEND_URL}/boards/${props.currentBoard}/cards`, { message })
      .then((_) => {
        getCardList();
      })
      .catch((err) => {
        console.log("Error:", err);
        alert("Unable to create new card");
      });
  };

  const [sortCardsBy, setSortCardsBy] = useState({
    method: "id",
    direction: "asc",
  });
  const changeSortMethod = (method, direction) => {
    setSortCardsBy({ method, direction });
  };

  const sortSelector = props.currentBoard ? (
    <SortSelector
      sortedBy={sortCardsBy}
      changeSortedBy={changeSortMethod}
    ></SortSelector>
  ) : (
    ""
  );

  const getCardList = () => {
    if (props.currentBoard)
      axios
        .get(`${BACKEND_URL}/boards/${props.currentBoard}/cards`)
        .then((result) => {
          const cards = result.data;

          cards.sort((c1, c2) => {
            const [comp1, comp2] = [
              c1[sortCardsBy.method],
              c2[sortCardsBy.method],
            ];

            if (sortCardsBy.method === "message") {
              return sortCardsBy.direction === "asc"
                ? comp1.toLowerCase().localeCompare(comp2.toLowerCase())
                : comp2.toLowerCase().localeCompare(comp1.toLowerCase());
            }

            return sortCardsBy.direction === "asc"
              ? comp1 - comp2
              : comp2 - comp1;
          });

          setCardList(cards);
        });
    else setCardList([]);
  };

  useEffect(getCardList, [props.currentBoard, sortCardsBy]);
  useEffect(() => {
    // Reset the board controls when changing the board.
    setSortCardsBy({ method: "id", direction: "asc" });
    setCardFormVisible(false);
  }, [props.currentBoard]);

  const [cardFormVisible, setCardFormVisible] = useState(false);
  const toggleCardFormVisible = () => setCardFormVisible(!cardFormVisible);

  const cardForm = props.currentBoard ? (
    <CardForm
      visible={cardFormVisible}
      toggleVisible={toggleCardFormVisible}
      addNewCard={addNewCard}
    ></CardForm>
  ) : (
    ""
  );

  const likeOneCard = (id) => {
    axios
      .put(`${BACKEND_URL}/cards/${id}`)
      .then((_) => {
        getCardList();
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't +1 the card.");
      });
  };

  const deleteCard = (id) => {
    axios
      .delete(`${BACKEND_URL}/cards/${id}`)
      .then((_) => {
        getCardList();
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Couldn't delete the card.");
      });
  };

  const cardsData = cardList.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        likes={card.likes}
        likeOneCard={likeOneCard}
        deleteCard={deleteCard}
      ></Card>
    );
  });

  return (
    <section id="board">
      <h2 className="board-name">{props.currentBoardName}</h2>
      {sortSelector}
      <div className="card-list">
        {cardsData}
        {cardForm}
      </div>
    </section>
  );
};

export default Board;
