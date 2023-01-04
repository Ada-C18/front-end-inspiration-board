import React, {useState} from "react";
const boardObj = {
  title: '',
  owner: '',
};
const BoardForm = (props) => {
  const [formData, setFormData] = useState(boardObj)
  return(<div>
    <form>
      <h2>Board Form</h2>
      <input></input>
      <input></input>
      
      <input>Submit</input>
      <input></input>
    </form>
  </div>)
}

export default BoardForm