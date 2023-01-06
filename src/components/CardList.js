import Card from "./Card";
import { useState } from "react";

const CardList = (props) => {
    // const [likesCount, setLikesCount] = useState(0);
    // const updateLikes = () => {
    //     setLikesCount(likesCount + 1);
    //     console.log("i am updating")

    // };
    const cards = props.cards;
    return (
        <div>
            {
            cards.map((card,id) => (
                <Card 
                id={card.id}
                message={card.message}
                key={id}
                // onUpdateLikes={updateLikes}
                // onLikesCount ={likesCount}
                // onDeleteCard ={props.onDeleteCard}
                />
            ))}
        </div>
    )
    // const displayCards = props.cards.map((card) => {
    //     return (
    //     <Card card={card.message}>
    //         <p> {likesCount} 💕 </p>
    //         onUpdateLikes={updateLikes}
    //         onDeleteCard={props.deleteCard}
    //     </Card>
    //     );
    // });

    // return <p> {displayCards}</p>;
};
export default CardList;
