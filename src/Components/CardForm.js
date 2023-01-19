import "./CardForm.css";
import "./Header";
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

  /* message.length === 0 || message.length > 40 ? "invalid-form-input" : "" */
  const validInput = message.length > 0 && message.length <= 40;

  return props.visible ? (
    <article className="add-card form">
      <div id="new-card-close" onClick={props.toggleVisible}>
        x
      </div>
      <h3>create new card</h3>
      <hr></hr>
      <form
        // onSubmit={validInput ? onCardSubmit : undefined}
        onSubmit={onCardSubmit}
        className="card-form"
      >
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
        <p
          id="err-msg"
          // className={validInput ? "hide-err-msg" : "invalid-input"}
          className="hide-err-msg"
        >
          Message must be less than 40 characters.
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

// import "./CardForm.css";
// import "./Header";
// import { useState } from "react";

// const CardForm = (props) => {
//   const [message, setMessage] = useState("");

//   const onMessageChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const onCardSubmit = (event) => {
//     event.preventDefault();
//     props.addNewCard(message);
//     setMessage("");
//   };

//   // const errMsg = (message) => {
//   //   if (message.length === 0 || message.length > 40) {
//   //     return "invalid-input"
//   //   } else {
//   //     return "hide-err-msg"
//   //     ? "invalid-input"
//   //     : "hide-err-msg"
//   //   }
//   // }

//   return props.visible ? (
//     <article className="add-card form">
//       <div id="new-card-close" onClick={props.toggleVisible}>
//         x
//       </div>
//       {/* <div className="main-form"> */}
//       <h3>create new card</h3>
//       <hr></hr>
//       <form onSubmit={onCardSubmit} className="card-form">
//         <textarea
//           type="text"
//           placeholder="Message"
//           className={"form-field card-form-field"}
//           name="message"
//           value={message}
//           onChange={onMessageChange}
//           rows="3"
//         ></textarea>
//         <p>Invalid message. Message must be less than 40 characters.</p>
//         <input
//           type="submit"
//           className="submit-btn card-submit-btn"
//           value="add card"
//         />
//       </form>
//       {/* </div> */}
//     </article>
//   ) : (
//     <article className="card-form-invisible" onClick={props.toggleVisible}>
//       {" "}
//     </article>
//   );
// };

// export default CardForm;
