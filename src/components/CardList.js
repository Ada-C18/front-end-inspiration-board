import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";


// {
//   "cards": [
//     {
//         "id": 1,
//         "likes_count": 0,
//         "message": "This is a new card!"
//     },
//     {
//         "id": 2,
//         "likes_count": 0,
//         "message": "We've got this!"
//     }
// ],
// "id": 1,
// "owner": "Sarah",
// "title": "testing"
// }

const CardList = ({ board }) => {
  console.log("This is CardList Component")
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${board.id}/cards`)
    .then((response) => {
      console.log(response.data);
      setCardsList(response.data.cards)
    })
    .catch( (error) => {
      console.log(error);
    });
  }, [board.id]);

  const cardsComponent = cardsList.map((card) => {
    return (
      <ul>
        <Card card={card} />
      </ul>
    );
  });

  return (
    <div>
      <section>
        <h1>Cards for {board.title}</h1>
        {cardsComponent}
      </section>
    </div>
  );
};

export default CardList;