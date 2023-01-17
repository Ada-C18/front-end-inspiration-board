import "./CardForm.css";

const CardForm = (props) => {
  return props.visible ? (
    <form>
      <div id="new-card-close" onClick={props.toggleVisible}>
        x
      </div>
    </form>
  ) : (
    <div className="card-form-invisible" onClick={props.toggleVisible}>
    </div>
  );
};

export default CardForm;
