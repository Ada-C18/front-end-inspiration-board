import React from "react";

const Card = (props) => {
  return (
    <div className="container">
      <div className="card-item__message">{props.card.message}</div>
      <div className="content">
        <div className="second">
          <section className="ac-footer">
            <div className="ac-footer-container ac-footer-brand">
              <div onClick={() => props.onLikeClick(props.card)}>
                <span class="ac-icon ac-icon-love-dark"></span>
              </div>{" "}
            </div>{" "}
            <span id="number">{props.card.likes_count}</span>
          </section>
        </div>

        <div className="last">
          <p onClick={() => props.deleteCard(props.card)}>
            <span class="trash">
              <span></span>
              <i></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
