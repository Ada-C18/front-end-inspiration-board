import "./SortSelector.css";

const SortSelector = (props) => {
  const onChangeMethod = (event) => {
    props.changeSortedBy(event.target.value, props.sortedBy.direction);
  };
  const onChangeDirection = (event) => {
    props.changeSortedBy(props.sortedBy.method, event.target.value);
  };

  return (
    <section id="container">
      <div id="sort-selector">
        {/* {"Sort by: "} */}
        <p id="sort-text">SORT BY</p>
        <div className="select-sort">
          <select
            id="sort-by"
            className="sort"
            name="sortBy"
            value={props.sortedBy.method}
            onChange={onChangeMethod}
          >
            <option value="id">Date</option>
            <option value="likes">Likes</option>
            <option value="message">Message</option>
          </select>
        </div>
        <div className="select-sort">
          <select
            id="sort-how"
            className="sort"
            name="sortDirection"
            value={props.sortedBy.direction}
            onChange={onChangeDirection}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SortSelector;
