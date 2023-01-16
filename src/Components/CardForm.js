import { useState } from "react";

const CardForm = (props) => {
  const [message, setMessage] = useState("");

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const onCardSubmit = (event) => {
    event.preventDefault();
    props.addNewCard(message);
    setMessage("");
  };

  return (
    <section className="add-card">
      <h3>Create New Card</h3>
      <form onSubmit={onCardSubmit} className="card-form">
        <div>
          <label htmlFor="cardMessage">Message</label>
          <input /*className*/
            type="text"
            name="message"
            value={message}
            onChange={onMessageChange}
          />
        </div>
        <input
          type="submit"
          className="submit-btn card-submit-btn"
          value="add card"
        />
      </form>
    </section>
  );
};

export default CardForm;
