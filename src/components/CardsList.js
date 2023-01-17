import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';
import NewCardForm from './NewCardForm';


const CardsList = (props) => {

  const [cardsData, setCardsData] = useState([]);

  const cardElements = cardsData.map((card) => {
    return (<Card
        card={card}
        ></Card>)
  });

  const postNewCard = (message) => {
    axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.board_id}/cards`,
        {message}
    ).then((response) => {
      const cards = [...cardsData];
      cards.push(response.data.card);
      setCardsData(cards);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t create a new card.');
    });
  };

  return (<section className='cards__container'>
      <section>
        <h2>Cards for {props.board.title}</h2>
        <div className='card-items__container'>
          {cardElements}
        </div>
      </section>
      <NewCardForm postNewCard={postNewCard}></NewCardForm>
    </section>)
};


export default CardsList;