import PropTypes from "prop-types";
import { FaRegTrashAlt } from 'react-icons/fa';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';

const Card = ({ card, updateLikedCard, deleteCard }) => {
  const likeOrNot = card.likes_count ? <AiFillLike /> : <AiOutlineLike />;

  return (
    // updated from ul to section
    <section className="card">
      <h1>{card.message}</h1>
      <ul className="card-elements">
        <li
          onClick={() => {
            updateLikedCard(card.id, card.likes_count + 1);
          }}
        >
          {likeOrNot}   
        </li>
        <li>{card.likes_count} </li>
        <li className="trash"
          onClick={() => {
            deleteCard(card.id);
          }}
        >
          <FaRegTrashAlt className="trash"/>
        </li>
      </ul>
    </section>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  updateLikedCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
