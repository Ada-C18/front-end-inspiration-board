import { FaRegTrashAlt } from 'react-icons/fa'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'

const Card = ({ card, updateLikedCard, deleteCard }) => {

  const likeOrNot = card.likes_count ? <AiFillLike /> : <AiOutlineLike />;

  return (
    // updated from ul to section
    <section className="card">
      <h1>{card.message}</h1>
      <div className='card-elements'>
        <p onClick = {()=>{updateLikedCard(card.id, card.likes_count+1)}}>{likeOrNot} {card.likes_count}</p>
        <p onClick = {()=>{deleteCard(card.id)}}><FaRegTrashAlt/></p>
      </div>
    </section>
  );
};

export default Card;