import './SortSelector.css';

const SortSelector = (props) => {
  return (
    <div id="sort-selector">
      {"Sort by: "}
      <select name="sortBy" onChange={() => null}>
        <option value="id">Time created</option>
        <option value="likes">Likes</option>
        <option value="message">Alphabetically</option>
      </select>
      <select name="sortDirection" onChange={() => null}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortSelector;
