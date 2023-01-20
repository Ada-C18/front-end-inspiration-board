import "./CardForm.css";
import "./Header";
import { useState } from "react";

const CardForm = (props) => {
  const [message, setMessage] = useState("");

  const onMessageChange = (event) => {
    setMessage(event.target.value);

    if (event.target.value.length === 0 || event.target.value.length > 40) {
      document.querySelector("#err-msg").className = "invalid-input";
    } else {
      document.querySelector("#err-msg").className = "hide-err-msg";
    }
  };

  const onCardSubmit = (event) => {
    event.preventDefault();
    props.addNewCard(message);
    setMessage("");
  };

  const validInput = message.length > 0 && message.length <= 40;

  return props.visible ? (
    <article className="add-card form">
      <div id="new-card-close" onClick={props.toggleVisible}>
        x
      </div>
      <h3>create new card</h3>
      <hr></hr>
      <form onSubmit={onCardSubmit} className="card-form">
        <textarea
          type="text"
          placeholder="Message"
          id="text-area"
          className={"form-field card-form-field"}
          name="message"
          value={message}
          onChange={onMessageChange}
          rows="3"
        ></textarea>
        <p id="err-msg" className="hide-err-msg">
          Invalid message. Message must be a minimum of one character and less
          than 40 characters.
        </p>
        <input
          type="submit"
          className="submit-btn card-submit-btn"
          disabled={!validInput}
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
