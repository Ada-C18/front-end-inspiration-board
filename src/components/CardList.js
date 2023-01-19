// not necessary for now

//   # get request for multiple cards
//   # post request
//   # send cards associated with the board
//   # state of cards is the array

import './CardList.css'
import Card from './Card'
// use effect that makes axios post, pass in board_id as prop, set prop inside dependency array 

const CardList = ({cardData}) => {
    console.log(cardData, "cardData")
    const cardComponents = cardData.map(card => {
        return (
            <div key={card.card_id}>
                <Card
                message={card.message}
                likes_count={card.likes_count}
                />
            </div>
        )
    });


    return (
        <section className='card-wrap'>
            {cardComponents}
        </section>
    )
}

export default CardList;