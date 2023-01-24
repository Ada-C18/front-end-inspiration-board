import PropTypes from "prop-types";

const BoardInfo = (props) => {
  const boardInfoString = props.selectedBoard;

  return (
    <div>
      <h2>Selected Board</h2>
      <p>{boardInfoString}</p>
    </div>
  );
};

BoardInfo.propTypes = {
  selectedBoard: PropTypes.string.isRequired,
};

export default BoardInfo;
