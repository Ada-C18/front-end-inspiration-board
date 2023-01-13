const Card = ({ card, updateLikedCard, deleteCard }) => {

  return (
    <ul>
      <p>{card.message}</p>
      <p>{card.likes_count}</p>
      <p onClick = {()=>{updateLikedCard(card.id)}}>+1</p>
      <p onClick = {()=>{deleteCard(card.id)}}>delete</p>
    </ul>
  );
};

export default Card;