import { FaRegTrashAlt } from 'react-icons/fa'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'

const Card = ({ card, updateLikedCard, deleteCard }) => {

  return (
    // updated from ul to section
    <section className="card">
      <h3>{card.message}</h3>
      <p>{card.likes_count}</p>
      <p onClick = {()=>{updateLikedCard(card.id)}}><AiFillLike /><AiOutlineLike /></p>
      <p onClick = {()=>{deleteCard(card.id)}}><FaRegTrashAlt/></p>
    </section>
  );
};

export default Card;