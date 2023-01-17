// connect to back-end and be able to delete board etc.
// Lisa
const NewBoardForm = () => {
  return(
  <form>
    <label>Title:</label>
    <input type="text" name="name" />
    <label>Owner:</label>
    <input type="text" name="name" />
    <input type="submit" value="Submit" />
  </form>
)};

export default NewBoardForm;
