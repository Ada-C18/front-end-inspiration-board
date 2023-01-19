// not necessary for now

//   # get request for multiple cards
//   # post request
//   # send cards associated with the board
//   # state of cards is the array

import './CardList.css'

const CardList = ({cardData}) => {
    console.log(cardData)
    // use effect that makes axios post, pass in board_id as prop, set prop inside dependency array 
    return (
        <section className='card-wrap'>
            <div className='card1'></div>
            <div className='card2'></div>
            <div className='card3'></div>
            <div className='card4'></div>
            <div className='card5'></div>
            <div className='card6'></div>
            <div className='card7'></div>
            <div className='card8'></div>
        </section>
    )
}

export default CardList;