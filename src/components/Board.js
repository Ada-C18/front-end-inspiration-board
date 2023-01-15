import React from "react";
import PropTypes from "prop-types";

const Board = (props) => {
  return (
    <section>
      <h1>SELECTED BOARD</h1>
      {!props.title && <div>Select a board!</div>}
      {props.title && (
        <div>
          "{props.title}" By: {props.owner}
        </div>
      )}
    </section>
  );
};
Board.propTypes = {
  title: PropTypes.string,
  owner: PropTypes.string,
};

export default Board;
