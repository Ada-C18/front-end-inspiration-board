import "./Card.css";
// import PropTypes from "prop-types";

function Card(props) {
  const cardId = props.Id;
  const cardMessage = props.message;

  return (
    <div className="card">
      <h5>{cardMessage}</h5>
    </div>
  );
}

export default Card;
