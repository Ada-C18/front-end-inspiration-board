import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
// import NewCardForm from './NewCardForm';
import PropTypes from 'prop-types';


const convertFromApi = (apiCard) => {
  const {likes_count, ...rest} = apiCard;
  const newCard = {likesCount: likes_count, ...rest};
  return newCard;
};

// const getAllCardsApi = () => {
//   return axios
//   .get(`${process.env.REACT_APP_BACKEND_URL}/cards`)
//   .then(response => {
//     return response.data.map(convertFromApi);
//   })
//   .catch((error) => {console.log(error);
//   })
// };

const getAllCardsApi = async () => {
  const response = await  axios.get(`${process.env.REACT_APP_BACKEND_URL}/cards`
  )
  response.data.map(convertFromApi);
};

const CardList = (props) => {

  const [cardsData, setCardsData] = useState([]);

  const getAllCards = () => {
    return getAllCardsApi()
    .then(cards => {
      setCardsData(cards);
    })
  };

  useEffect(() => {
    getAllCards();
  }, [props.board]);

  const deleteCard = (card) => {
    axios
    .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}`)
    .then((response) => {
      const newCardsData = cardsData.filter((existingCard) => {
        return existingCard.card_id !== card.card_id;
      });
      setCardsData(newCardsData);
    }).catch((error) => {console.log(error);
    });
  };

  const handleLikes = (card) => {
    axios
    .put(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}/like`)
    .then((response) => {
      const newCardsData = cardsData.map((existingCard) => {
        return existingCard.card_id !== card.card_id ? existingCard : {...card, likes_count: card.likes_count + 1}
      });
      setCardsData(newCardsData);
    }).catch((error) => {console.log(error);
    });
  };

  const cards = cardsData.map((card) => {
    return (<Card
        card={card}
        handleLikes={handleLikes}
        deleteCard={deleteCard}/>)
  });

  // const newCard = (message) => {
  //   axios.post(
  //       `${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.board_id}/cards`,
  //       {message}
  //   ).then((response) => {
  //     const cards = [...cardsData];
  //     cards.push(response.data.card);
  //     setCardsData(cards);
  //   }).catch((error) => {console.log(error);
  //   });
  // };

  return (<section className='cards__container'>
      <section>
        <h2>Cards for {props.board.title}</h2>
        <div>
          {cards}
        </div>
      </section>
      {/* <NewCardForm newCard={newCard}/> */}
    </section>
    )
};


CardList.propTypes = {
  board: PropTypes.string.isRequired,
};


export default CardList;