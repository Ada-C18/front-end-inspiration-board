import { useState } from 'react';

const NewBoardForm = (props) => {




  return (
    <form>
    <label>
      Title:
      <input type="text" name="name" />
    </label>
    <label>
      Owner:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
  </form>


  )
  }



export default NewBoardForm;