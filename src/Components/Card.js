const Card = (props) => {
  return (
    <div>
      <p>{props.message}</p>
      <p>{props.likes}</p>
    </div>
  )
};

export default Card;
