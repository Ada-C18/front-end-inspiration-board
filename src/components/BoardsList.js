import PropTypes from "prop-types";
import Select from "react-select";

const BoardsList = (props) => {
  console.log('BoardsList props @BoardsList.js:');
  console.log(props.availableData);
  // console.log('mapped props.availableData:')
  // console.log(props.availableData.map((object) => object.id));

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: state.data.color,
      backgroundColor: state.data.bgColor,
      fontSize: state.selectProps.myFontSize,
    }),
  };
  const options = [
    {
      value: props.availableData.board_id,
      label: props.availableData.title,
    },
  ];

  // let options = props.availableData.map((boardData) => {
  //   value: boardData.id,
  //   label: `${boardData.title} by ${boardData.owner}`
  // });

  return (
    <div>
      <Select options={options} styles={styles} />
    </div>
  );
};

BoardsList.propTypes = {
  selectData: PropTypes.func.isRequired,
  availableData: PropTypes.array.isRequired,
};

export default BoardsList;
