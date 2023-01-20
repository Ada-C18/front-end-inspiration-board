import React from "react";
import PropTypes from "prop-types";
import "./CardList.css";

/*
  svg used to replace missing unicode glyphs
    1D377 𝍷 TALLY MARK ONE
    1D378 𝍸 TALLY MARK FIVE
*/
import { ReactComponent as TallyOneSvg } from "./tally_mark_one.svg";
import { ReactComponent as TallyFiveSvg } from "./tally_mark_five.svg";

const CardList = ({ title, owner, cards, likeCard, deleteCard, color }) => {
  const clickLike = (id) => likeCard(parseInt(id));
  const clickDelete = (id) => deleteCard(parseInt(id));
  const tallyLikes = (likes) => {
    let fives = Math.floor(likes / 5);
    let ones = likes % 5;
    return (
      <span role="img" title={`${likes} likes`} aria-label={`${likes} likes`}>
        {Array(fives).fill(
          <TallyFiveSvg
            viewBox="15 150 278 235"
            className="tallyFive"
            alt="five"
          />
        )}
        <nobr>
          {Array(ones).fill(
            <TallyOneSvg
              viewBox="0 150 57 235"
              className="tallyOne"
              alt="one"
            />
          )}
        </nobr>
      </span>
    );
  };
  return [...cards].map((card) => (
    <div
      className="card"
      tabIndex="-1"
      key={card.card_id}
      id={card.card_id}
      // TODO: find something that doesn't jump every change
      //style={{ rotate: `${(Math.random() - 0.5) * 10}deg` }}
      style={{ background: color }}
    >
      <button
        className="cardDeleteIcon"
        onClick={() => clickDelete(card.card_id)}
      >
        🗑️
      </button>
      <div className="cardMessage">{card.message}</div>
      <div className="cardLikes">
        likes:{" "}
        <span className="cardLikesCount">{tallyLikes(card.likes_count)}</span>
        <button
          className="cardLikeIcon"
          onClick={() => clickLike(card.card_id)}
        >
          ✍️
        </button>
      </div>
    </div>
  ));
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
    })
  ),
};

export default CardList;
