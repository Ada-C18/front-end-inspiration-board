import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SelectedBoard.css'

const SelectedBoard = ({selectedBoard}) => {
    return (
        <div className='selected-board'>
            <h2 className='selected_header'>Selected Board</h2>
                {selectedBoard ? (
                    <h3>{selectedBoard.title}</h3>
                ) : (
                    <p>No board selected</p>
                )}
        </div>
    );
};

SelectedBoard.propTypes = {
    selectedBoard: PropTypes.object,
};

export default SelectedBoard;