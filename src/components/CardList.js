import './CardList.css'
import Card from './Card'

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