import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import PropTypes from 'prop-types';


// const getAllCards = () => {
//   return getAllCardsApi()
//   .then(cards => {
//     setCardsData(cards);
//   })
// };

// useEffect(() => {
//   getAllCards();
// }, [props.board]);



const convertFromApi = (apiCard) => {
  const {likes_count, ...rest} = apiCard;
  const newCard = {likesCount: likes_count, ...rest};
  return newCard;
};


const getAllCardsApi = async () => {
  const response = await  axios.get(`${process.env.REACT_APP_BACKEND_URL}/board.cards`
  )
  response.data.map(convertFromApi);
};


const CardList = (props) => {

  const [cardsData, setCardsData] = useState([]);


  useEffect(() => {
    const getAllCards = async () => {
      const cards = await getAllCardsApi();
      setCardsData(cards);
    };
    getAllCards();
  }, [props.board]);


  // const deleteCard = (card) => {
  //   axios
  //   .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}`)
  //   .then((response) => {
  //     const newCardsData = cardsData.filter((existingCard) => {
  //       return existingCard.card_id !== card.card_id;
  //     });
  //     setCardsData(newCardsData);
  //   }).catch((error) => {console.log(error);
  //   });
  // };

  const deleteCard = async (card) => {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}`);
    const newCardsData = cardsData.filter((existingCard) => {
      return existingCard.card_id !== card.card_id;
    });
    setCardsData(newCardsData);
  };


  // const handleLikes = (card) => {
  //   axios
  //   .put(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}/like`)
  //   .then((response) => {
  //     const newCardsData = cardsData.map((existingCard) => {
  //       return existingCard.card_id !== card.card_id ? existingCard : {...card, likesCount: card.likes_count + 1}
  //     });
  //     setCardsData(newCardsData);
  //   }).catch((error) => {console.log(error);
  //   });
  // };

  const handleLikes = async (card) => {
    await axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}/like`)
    const newCardsData = cardsData.map((existingCard) => {
      return existingCard.card_id !== card.card_id ? existingCard : {...card, likesCount: card.likes_count + 1}
      });
    setCardsData(newCardsData);
  };

  const cards = cardsData.map((card) => {
    return (<Card
        card={card}
        handleLikes={handleLikes}
        deleteCard={deleteCard}/>)
  });


  return (<section className='cards__container'>
        <h2>Cards for {props.board.title}</h2>
        <div>
          {cards}
        </div>
    </section>
    )
};


CardList.propTypes = {
  board: PropTypes.string.isRequired,
};


export default CardList;