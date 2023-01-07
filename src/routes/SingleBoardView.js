import "./SingleBoardView.css";
import AddCard from "../components/AddCard";
import SelectedBoard from "../components/SelectedBoard";

const SingleBoardView = () => {
  return (
    <div className="SingleBoardView">
      <SelectedBoard></SelectedBoard>
      <AddCard></AddCard>
    </div>
  );
};

export default SingleBoardView;
