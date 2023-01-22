import NewCardForm from "./NewCardForm";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function CardsList(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards(props.board.id);
  }, [props.board]);

  const fetchCards = (boardId) => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`,
        {}
      )

      .then((response) => setCards(response.data))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (cardId) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`)
      .then(() => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [likes, setLikes] = useState(0);

  const increaseLikes = (cardId) => {
    setLikes(likes + 1);
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}/likes`, {
        likes_count: likes + 1,
      })
      .then((response) => {
        console.log(response.data);
        const newCards = cards.map((oldCard) => {
          return oldCard.id !== cardId
            ? oldCard
            : { ...oldCard, likes_count: oldCard.likes_count + 1 };
        });
        setCards(newCards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postNewCard = (message) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.id}/cards`,
        {
          message: message,
          likes_count: 0,
          board_id: props.board.id,
        }
      )
      .then((response) => {
        const cardsData = [...cards];
        cardsData.push(response.data);
        setCards(cardsData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  if (props.board.id !== null) {
    return (
      <div className="cardsContainer">
        {cards.length > 0 ? (
          cards.map((card) => (
            <div key={card.id}>
              <div>
                <div className="cardMessageContainer">
                  <p className="cardMessage"> {card.message}</p>
                  <div className="cardButtonsContainer">
                    <img
                      className="likeButton"
                      src={"/assets/heart.png"}
                      onClick={() => increaseLikes(card.id)}
                      alt="Like button"
                    />
                    <div class="likeCount">
                      <p>{card.likes_count}</p>
                    </div>
                    <button
                      className="deleteButton"
                      onClick={() => handleDelete(card.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No cards found for this board.</p>
        )}
        <div>
          <NewCardForm postNewCard={postNewCard} />
        </div>
      </div>
    );
  }
}

export default CardsList;
