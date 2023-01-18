<<<<<<< HEAD
import PropTypes from "prop-types";
import { FaRegTrashAlt } from 'react-icons/fa';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
=======
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import PropTypes from "prop-types";
>>>>>>> b91a735f381bb4ef81283c24c498cc40ce9e2659

const Card = ({ card, updateLikedCard, deleteCard }) => {
  const likeOrNot = card.likes_count ? <AiFillLike /> : <AiOutlineLike />;

  return (
    // updated from ul to section
    <section className="card">
      <h1>{card.message}</h1>
      <div className="card-elements">
        <p
          onClick={() => {
            updateLikedCard(card.id, card.likes_count + 1);
          }}
        >
          {likeOrNot} {card.likes_count}
        </p>
        <p
          onClick={() => {
            deleteCard(card.id);
          }}
        >
          <FaRegTrashAlt />
        </p>
      </div>
    </section>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  updateLikedCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};
<<<<<<< HEAD

export default Card;
=======
export default Card;
>>>>>>> b91a735f381bb4ef81283c24c498cc40ce9e2659
