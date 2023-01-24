import React from "react";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import PropTypes from 'prop-types';
import "../styles/CardsList.css";

const CardsList = (props) => {

  const cardsList = props.cards.map((card, index) => {
    return (
      <div key={index}>
        <Card
        card={card}
        updateLikesDB={props.onUpdateLikes}
        deleteOneCard={props.onDeleteCard}
        ></Card>
      </div>
    );
  });

  return (
    <section className="lowerGrid">
      <section>
        <h2 className="cardsListHeader">
        Cards for {props.board.title}
        </h2>
        <div className="cardsListInnerGrid">
          {cardsList}
        </div>
      </section>
      <section>  
        <NewCardForm createNewCard={props.addNewCard}></NewCardForm>
      </section>
    </section>
  );
  };

CardsList.propTypes = {
  board: PropTypes.shape({
    board_id: PropTypes.number,
    cards: PropTypes.arrayOf(PropTypes.shape({
      card_id: PropTypes.number,
      likes: PropTypes.number,
      message: PropTypes.string
    })),
    title: PropTypes.string,
    owner: PropTypes.string
  }),
  onUpdateLikes: PropTypes.func,
  onDeleteCard: PropTypes.func,
  addNewCard: PropTypes.func,
  cards: PropTypes.arrayOf(PropTypes.shape({
    card_id: PropTypes.number,
    likes: PropTypes.number,
    message: PropTypes.string
  }))
};


export default CardsList;
