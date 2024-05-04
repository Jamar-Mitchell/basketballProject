import MediaCard from "../PlayerCard";
import "./Main.css";
import PlayerRow from "../PlayerRow";
import ProgressBar from "../components/ProgressBar";

export default function Main() {
  return (
    <div className="mainContainer">
      <ProgressBar />
      <PlayerRow />
    </div>
  );
}
