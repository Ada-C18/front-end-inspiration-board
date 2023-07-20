import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SelectedBoard.css'

const SelectedBoard = ({selectedBoard}) => {
    return (
        <div className='selected-board'>
            <h2>Selected Board</h2>
            <div className='board_container'>
                {selectedBoard ? (
                    <h3>{selectedBoard.title}</h3>
                ) : (
                    <p>No board selected</p>
                )}
            </div>
        </div>
    );
};

SelectedBoard.propTypes = {
    selectedBoard: PropTypes.object,
};

export default SelectedBoard;