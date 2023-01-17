
const Card = (props) => {
    return(
        <div className="card__item">
            <p className="card__item__message">{props.card.message} 💗</p>
            <ul>
                <li><p>{props.card.likes_count}</p></li>
                <li><p onClick={() => props.plusOneCardItem(props.card)}>+1</p></li>
                <li><p className="card__item__delete" onClick={() => props.deleteCardItem(props.card)}>Delete</p></li>
            </ul>
        </div>
    );
};

export default Card;