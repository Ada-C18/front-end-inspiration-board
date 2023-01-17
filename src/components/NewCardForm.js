// connection to backend so new card shows up. Only place a new card can be created. There might be more
// Valentina
const NewCardForm = () => {
    return(
    <form>
      <label>Message:</label>
      <input type="text" name="name" />
      {/* No likes count input here, need to update backend for this part */}
      <input type="submit" value="Submit" />
    </form>
  )};
  
  export default NewCardForm;
  