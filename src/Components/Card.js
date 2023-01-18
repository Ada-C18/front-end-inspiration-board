import "./Card.css";
import "./Board";

// const Card = (props) => {
//     return (
//         <div className="card">
//           <p>{props.message}</p>
//           <p>{props.likes}</p>
//           <p className="likes-button" onClick={() => props.likeOneCard(props.id)}>💕</p>
//          <p className="delete-button" onClick={() => props.deleteCard(props.id)}>🗑️</p>
//         </div>
//       )
//     };
// export default Card;
// import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <p className="card-msg">{props.message}</p>
      <div className="card-info">
        <button
          className="card-likes"
          onClick={() => props.likeOneCard(props.id)}
        >
          {props.likes}💕
        </button>
        <button className="card-del" onClick={() => props.deleteCard(props.id)}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default Card;
