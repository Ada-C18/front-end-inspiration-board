import "./SortSelector.css";

const SortSelector = (props) => {
  const onChangeMethod = (event) => {
    props.changeSortedBy(event.target.value, props.sortedBy.direction);
  };
  const onChangeDirection = (event) => {
    props.changeSortedBy(props.sortedBy.method, event.target.value);
  };

  return (
    <div id="sort-selector">
      {"Sort by: "}
      <select
        name="sortBy"
        value={props.sortedBy.method}
        onChange={onChangeMethod}
      >
        <option value="id">Time created</option>
        <option value="likes">Likes</option>
        <option value="message">Alphabetically</option>
      </select>
      <select
        name="sortDirection"
        value={props.sortedBy.direction}
        onChange={onChangeDirection}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortSelector;
