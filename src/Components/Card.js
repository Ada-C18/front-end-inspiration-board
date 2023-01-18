import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <p className="card-msg">{props.message}</p>
      <div className="card-info">
        {/* <p className="card-likes">{props.likes} 💕</p> */}
        <button className="card-likes">{props.likes} 💕</button>
        <button className="card-del">🗑️</button>
      </div>
    </div>
  );
};

export default Card;
