import './Card.css';
import './Board';

const Card = (props) => {
    return (
        <div className="card">
          <p>{props.message}</p>
          <p>{props.likes}</p>
          <p className="likes-button" onClick={() => props.likeOneCard(props.id)}>💕</p>
         <p className="delete-button" onClick={() => props.deleteCard(props.id)}>🗑️</p>
        </div>
      )
    };
export default Card;