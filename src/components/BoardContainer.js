import React from 'react';
import PropTypes from 'prop-types';
import './BoardContainer.css';
import Board from './Board';

// props = boardData
// might need to add cardData as props?
const BoardContainer = ({ boards }) => {
    const getAllBoardsJSX = (boards) => {
        return boards.map((board, i) => {
            return (
                <Board
                key={board.board_id}
                title={board.title}
                owner={board.owner}
                />
            );
        });
    };
    
    return (
        <section className='all-boards__section'>
            <h2 id='all-boards__title'>All Boards (pick one)</h2>
            <div id="line" />
            <div className='all-boards__container'>{getAllBoardsJSX(boards)}</div>
        </section>
    ); 
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