import React from 'react';
import './BoardContainer.css';
import Board from './Board';
import PropTypes from 'prop-types';

// props = boardData
// might need to add cardData as props?
const BoardContainer = (props) => {
    const boards = props.boards.map((board, i) => {
        return <Board
        key={i}
        title={board.title}
        owner={board.owner}
        />
    })
    
    return (
        <div>
            {boards}
        </div>
    ) 
};

//waiting for backend response
BoardContainer.propTypes = {
    boards: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
    })) 
};

export default BoardContainer;