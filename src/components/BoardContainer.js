import React from 'react';
// import PropTypes from 'prop-types';
import './BoardContainer.css';
import Board from './Board';


const BoardContainer = ({ boards, onDisplayCurrentBoard}) => {
    const getAllBoardsJSX = (boards) => {
        return boards.map((board, i) => {
            return (
                <Board
                key={i}
                id={board.id}
                title={board.title}
                owner={board.owner}
                onDisplayCurrentBoard={onDisplayCurrentBoard}
                />
            );
        });
    };
    
    return (
        <section className='all-boards__section'>
            <h2 id='all-boards__title'>All Boards (pick one)</h2>
            <div id="line" />
            <div className='all-boards__container'>
            <ul className='all-board__list'>{getAllBoardsJSX(boards)}</ul>
            </div>
        </section>
    ); 
};


// BoardContainer.propTypes = {
//     boards: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         owner: PropTypes.string.isRequired,
//     })) 
// };

export default BoardContainer;