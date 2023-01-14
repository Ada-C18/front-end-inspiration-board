import PropTypes from "prop-types";

import Card from "./Card";

const CardsList = ({ cardsList }) => {
	const cardComponents = [];

	for (const card of cardsList) {
		cardComponents.push(
			<Card
				cardId={card.card_id}
				message={card.message}
				// likeCount = {card.likesCount}
			/>
		);
	}
	// const cardComponents = cardsList.map((card) =>
	// 		<Card
	// 			cardId={card.card_id}
	// 			message={card.message}
	// 			// likeCount = {card.likesCount}
	// 		/>;
	// );

	return (
		<>
			<ul>{cardComponents}</ul>
		</>
	);
};

// CardsList.propTypes = {}

export default CardsList;
