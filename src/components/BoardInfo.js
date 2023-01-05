
import Card from "./Card";
import PropTypes from 'prop-types';

const BoardInfo = ({entries}) => {
    const cardComponents = entries.map((card) => {
        return (
            <div key={card.id}>
                <Card
                        id={card.id}
                        title={card.title}
                        owner={card.owner}
                        message={card.message} 
                        />  
            </div>
        )
    })

    return (
        <div>
            {cardComponents}
        </div>
        );
};

BoardInfo.propTypes ={
    entries : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            owner: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
        })
    )
}

export default BoardInfo;
