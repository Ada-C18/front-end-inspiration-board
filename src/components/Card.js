import PropTypes from "prop-types";

const Card = ({ cardId, message }) => {
	return <li>{message}</li>;
};

Card.propTypes = {
	cardId: PropTypes.number.isRequired,
	message: PropTypes.string.isRequired,
	// likesCount: PropTypes.number.isRequired,
};

export default Card;
