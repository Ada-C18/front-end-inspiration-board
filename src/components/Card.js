import PropTypes from "prop-types";

const Card = ({ cardId, message, deleteCard }) => {
	return (
		<>
			<li>{message}</li>
			<button>Delete</button>
			{/* likes button here */}
		</>
	);
};

Card.propTypes = {
	cardId: PropTypes.number.isRequired,
	message: PropTypes.string.isRequired,
	// likesCount: PropTypes.number.isRequired,
	deleteCard: PropTypes.func.isRequired,
};

export default Card;
