import "./CardForm.css";

const CardForm = (props) => {
  return props.visible ? (
    <form>
      <div
        id="new-card-close"
        onClick={() => props.setVisible(props.visible ? false : true)}
      >
        x
      </div>
    </form>
  ) : (
    <div
      className="card-form-invisible"
      onClick={() => props.setVisible(props.visible ? false : true)}
    ></div>
  );
};

export default CardForm;
