import "./CardForm.css";

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

  return props.visible ? (
    <article className="add-card">
      <div id="new-card-close" onClick={props.toggleVisible}>
        x
      </div>
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
    </article>
  ) : (
    <article className="card-form-invisible" onClick={props.toggleVisible}>
      {" "}
    </article>
  );
};

export default CardForm;
