import React from "react";
// import PropTypes from 'prop-types';
import CardList from "./CardList";
import NewCardForm from "./NewCardForm";
import "./Board.css";

const Board = (props) => {
  return (
    <section className="cards__container">
      <section>
        <h2>{props.selectedBoardObj?.title}</h2>
        <section>
          <label>Sort notes by: </label>
          <select onChange={(e) => props.sortCards(e.target.value)}>
            <option value="id">id</option>
            <option value="abc">alphabetically</option>
            <option value="likes">likes</option>
          </select>
        </section>
        <CardList
          cardsData={props.cardsData}
          likeCard={props.likeCard}
          deleteCard={props.deleteCard}
        />
      </section>
      <NewCardForm addCard={props.addCard} />
    </section>
  );
};

// Board.propTypes = {
//     owner: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     cardsData: PropTypes.arrayOf(
//         PropTypes.shape({
//             card_id: PropTypes.number.isRequired,
//             board_id: PropTypes.number.isRequired,
//             likes_count: PropTypes.number.isRequired,
//             message: PropTypes.string.isRequired,
//         })
//     )
// };

export default Board;
