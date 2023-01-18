import { useState } from "react";

const NewCardForm = ({ addCardCallback }) => {
	// console.log("callling new card form");

	const [cardData, setCardData] = useState({ message: "" });

	const onMessageChange = (event) => {
		setCardData({
			// ...cardData,
			message: event.target.value,
		});
		// error message if card message more than 40 chars
		if (event.target.value.length > 40) {
			window.alert("Message shouldn't exceed 40 characters");
		}
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

	const isSubmitDisabled =
		cardData.message === "" || cardData.message.length > 40;

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
