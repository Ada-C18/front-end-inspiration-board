import "./CardForm.css";

const CardForm = (props) => {
  return props.visible ? (
    <form></form>
  ) : (
    <div
      className="card-form-invisible"
      onClick={() => props.setVisible(props.visible ? false : true)}
    ></div>
  );
};

export default CardForm;
