import PropTypes from 'prop-types';
import React from 'react';
import './Board.css';


const Board = ({ id, title, owner, onUpdateCurrentBoard }) => {
    const boardName = `${title} by ${owner}`;

    const handleClick = () => {
        onUpdateCurrentBoard(id);
    }

    return (<li onClick={handleClick} className='boardName__li'>{boardName}</li>);
};


Board.propTypes = {
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
};


export default Board;