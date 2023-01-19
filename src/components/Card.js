import PropTypes from "prop-types";
import { useState } from "react";
import "./Card.css";

//import css here.

function Card(props) {
  const id = props.id;
  const message = props.message;

  const deleteCard = props.deleteCard;

  //to do: wrap this in a function.
  const [likes, setLikes] = useState(0); //make props.likes later!!

  console.log(likes);

  return (
  <section className="card-box">    
    <div className="card-alignment">
      <h1 id="card-message">{message}</h1>
    <div className="add1">
      <button
        id="add_like_button"
        onClick={() => {
          setLikes(likes + 1);
        }}
      >
        +1
      </button>
    </div>
    <div className="delete">
      <button
        id="delete_card_button"
        onClick={() => {
          deleteCard(id);
        }}
      >
        Delete
      </button>
    </div>

    <div className="likecount"> 
      <p id="like_counter">{likes}💕</p>
    </div>  
    </div>
  </section>

  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string,
  likes: PropTypes.number,
  deleteCard: PropTypes.func,
};
export default Card;
