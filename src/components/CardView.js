import './CardView.css'

const CardView = (props) => {
  return (
    <div className={`single-card ${props.shadowClass}`}> 
      <p id='card-message'> {props.message} </p> 
      <span id='num-likes'> {props.likes} ♥️ </span>
      <button className='like-and-delete-buttons'> +1 </button>
      <button className='like-and-delete-buttons'> Delete </button>
    </div>
  )
};

export default CardView;