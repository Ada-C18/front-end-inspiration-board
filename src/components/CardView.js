import './CardView.css'

const CardView = (props) => {
  return (
    <div className={`single-card ${props.shadowClass}`}> 
      <p id='card-message'> {props.message} </p> 
      <span className='likes-and-delete'> {props.likes} ♥️ </span>
      <button className='likes-and-delete'> +1 </button>
      <button className='likes-and-delete'> Delete </button>
    </div>
  )
};

export default CardView;