import PropTypes from 'prop-types';
import React from 'react';
import './Board.css';

// props = title and owner
const Board = ({ title, owner }) => {
    const boardName = `${title} by ${owner}`;
    return (<li className='boardName__li'>{boardName}</li>);
};


Board.propTypes = {
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
};


export default Board;