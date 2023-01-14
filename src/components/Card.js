import PropTypes from "prop-types";

const Card = (props) => {
    const cardId = props.card_id;
    const message = props.message;
    // const likeCount = props.likesCount;

    return (
        <li>{message}</li>
    );
};

Card.propTypes = {
    cardId = PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
}

export default Card;