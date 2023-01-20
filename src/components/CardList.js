import './CardList.css';
import Card from './Card';

const CardList = (props) => {


    const cardComponents = props.cardData.map((card, i) => {
    return (
        <div key={card.card_id} className={`C${i}`}>
            <Card 
            card_id={card.card_id}
            message={card.message}
            likes_count={card.likes_count}
            updateCard={props.updateCard}
            deleteCard={props.deleteCard}
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
