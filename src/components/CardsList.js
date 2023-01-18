import PropTypes from "prop-types";

import Card from "./Card";

const CardsList = ({ cardsList, deleteCard }) => {
	const cardComponents = cardsList.map((card) => {
		return (
			<Card
				cardId={card.card_id}
				message={card.message}
				// likeCount = {card.likesCount}
			/>
		);
	});

	return (
		<>
			<ul>{cardComponents}</ul>
		</>
	);
};

CardsList.propTypes = {
	cardsList: PropTypes.arrayOf(
		PropTypes.shape({
			cardId: PropTypes.number.isRequired,
			message: PropTypes.string.isRequired,
		})
	),
	deleteCard: PropTypes.func.isRequired,
};

export default CardsList;
