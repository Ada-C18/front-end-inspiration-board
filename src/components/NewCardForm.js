import { useState } from "react";
// CREATE CARD
// Create a new card for the selected board, by filling out a form and filling out a "message." - DONE

// See an error message if I try to make the card's "message" more than 40 characters. => TODO
// -- All error messages can look like a new section on the screen, a red outline around the input field, and/or disabling the input, as long as it's visible

// See an error message if I try to make a new card with an empty/blank/invalid/missing "message." - DONE

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

	const isSubmitDisabled = cardData.message === "";
	// const isSubmitDisabled = cardData.message === "" || length(cardData.message) > 40;

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
				<p>Preview: {cardData.message}</p>

				<button type="submit" disabled={isSubmitDisabled}>
					Submit
				</button>
			</form>
		</>
	);
};

export default NewCardForm;
