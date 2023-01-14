const Card = ({ card, updateLikedCard, deleteCard }) => {

  return (
    // updated from ul to section
    <section className="card">
      <h3>{card.message}</h3>
      <p>{card.likes_count}</p>
      <p onClick = {()=>{updateLikedCard(card.id)}}>+1</p>
      <p onClick = {()=>{deleteCard(card.id)}}>delete</p>
    </section>
  );
};

export default Card;