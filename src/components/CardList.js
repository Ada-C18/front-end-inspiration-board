import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

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

const CardList = ({board}) => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${board.id}/cards`)
    .then((response) => {
      console.log(response.data);
      setCardsData(response.data)
    })
    .catch( (error) => {
      console.log(error);
    });
  }, [board]);

  const cardComponent = cardsData.map((card) => {
    return (
      <ul>
        <Card card={card}/>
      </ul>
    );
  });

  return (
    <div>
      <section>
        <h2>Create A New Card</h2>
        <NewCardForm></NewCardForm>
      </section>
      <section>
        <h1>Cards for {board.title}</h1>
        {cardComponent}
      </section>
    </div>
  );
  };

export default CardList;