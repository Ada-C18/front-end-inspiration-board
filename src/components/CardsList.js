import Card from "./Card";

const CardsList = ({ cardData }) => {
  // console.log("cardData", cardData.cards);



  
  return (
    <div className="cardsContainer">
      {cardData.cards.map((card) => {
        return <Card message={card.message} likes={card.likes_count} />;
      })}
    </div>
  );
};

export default CardsList;

