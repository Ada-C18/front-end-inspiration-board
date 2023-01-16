import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.message}</p>
      <p>{props.likes}</p>
    </div>
  )
};

export default Card;
