import Card from "./Card";
import "../styles/CardList.css";
import PropTypes from "prop-types";

const CardList = ({ cardList, deleteCard, countLikesTotal }) => { 
    const cardComponents = cardList.map((card) => {
    return (
        <div key={card.id}>
            <Card
                id={card.id}
                message={card.message}
                likes={card.likes}
                deleteCard={deleteCard}
                countLikesTotal={countLikesTotal}
            />
        </div>
    );
});

return (
    <div>
        {cardComponents}
    </div>
    )
};

CardList.propTypes = {
    cardList : PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        likes: PropTypes.bool,
    }),
),
    deleteCard: PropTypes.func,
    countLikesTotal: PropTypes.func,
};

export default CardList;
