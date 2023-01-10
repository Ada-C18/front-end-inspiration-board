import { useState } from "react";
const Card = (props) => {
    const [likesCount, setLikesCount] = useState(0);
    const updateLikes = () => {
        setLikesCount(likesCount + 1);

    };
    
    return (
        <div>
        <p>
            {props.message}
        </p>
        {likesCount} 💕
        {/* {props.onLikesCount} 💕 */}
        
        <button type="button" onClick={updateLikes}>
            +1
        </button>
        {/* <button type="button" onClick={props.onUpdateLikes}>
            +1
        </button> */}
        {/* <button type="button" onClick={() => props.onDeleteCard(props.id)}> */}
        <button type="button" onClick={() => props.onDeleteCard(props.id)}>
            Delete
        </button>
        </div>
    );
};
// const [isClicked, setisClicked] = useState(false);

// moving state cardlist
// set each card to state
// remove map from card
// only moving 1 card

export default Card;
