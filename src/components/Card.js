import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="individual-card">
      <div>
        <section></section>
      </div>

      <h3 className="entry-name">{props.body}</h3>
      <section className="entry-bubble">
        <button className="num_likes" onClick={() => props.onlikedCard(props.card_id)}>
          {props.likes} 🦑
        </button>
        <button className="delete_card"
          onClick={() => props.ondeleteCard(props.card_id)}>
          Delete
        </button>
      </section>
    </div>
  );
};

Card.propTypes = {
  likes: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  card_id: PropTypes.number.isRequired,
};

export default Card;
