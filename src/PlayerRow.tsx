import MediaCard from "./PlayerCard";
import "./PlayerRow.css";

export default function PlayerRow() {
  return (
    <div className="playersContainer">
      <MediaCard />
      <h1 style={{ alignSelf: "center" }}>OR</h1>
      <MediaCard />
    </div>
  );
}
