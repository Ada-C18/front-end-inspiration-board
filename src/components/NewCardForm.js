import { useState } from "react";
// CREATE CARD
// Create a new card for the selected board, by filling out a form and filling out a "message."
// See an error message if I try to make the card's "message" more than 40 characters.
// All error messages can look like a new section on the screen, a red outline around the input field, and/or disabling the input, as long as it's visible
// See an error message if I try to make a new card with an empty/blank/invalid/missing "message."

const NewCardForm = ({ addCardCallback }) => {
	// console.log("callling new card form");

	const [cardData, setCardData] = useState({ message: "" });

	const onMessageChange = (event) => {
		setCardData({
			// ...cardData,
			message: event.target.value,
		});
	};

	// Add Card
	const onCardFormSubmit = (event) => {
		console.log("Calling onCardFormSubmit");
		event.preventDefault();

		addCardCallback({
			message: cardData.message,
		});

		setCardData({ message: "" });
	};

	return (
		<>
			<form onSubmit={onCardFormSubmit}>
				<label htmlFor="message">Message</label>
				<input
					type="string"
					name="message"
					id="message"
					value={cardData.message}
					onChange={onMessageChange}
				/>
			</form>
		</>
	);
};

export default NewCardForm;
