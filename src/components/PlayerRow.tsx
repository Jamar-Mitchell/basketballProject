import PlayerCard from "./PlayerCard";
import "./PlayerRow.css";

export default function PlayerRow() {
  return (
    <div className="playersContainer">
      <PlayerCard />
      <h1 style={{ alignSelf: "center" }}>OR</h1>
      <PlayerCard />
    </div>
  );
}
