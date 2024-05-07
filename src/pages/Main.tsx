import "./Main.css";
import PlayerRow from "../components/PlayerRow";
import ProgressBar from "../components/ProgressBar";

export default function Main() {
  return (
    <div className="mainContainer">
      <ProgressBar />
      <PlayerRow />
    </div>
  );
}
