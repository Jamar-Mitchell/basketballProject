import React from "react";
import PlayerCard from "./PlayerCard";
import "./PlayerRow.css";
import { Player } from "../types/player";
import { players } from "../data/players";
import {
  removeComparedPlayers,
  selectRandomPlayers,
  submitResults,
} from "../data/helper";
import { useNavigate } from "react-router-dom";

export default function PlayerRow() {
  const navigate = useNavigate();

  const playerSet = players;

  const [player, setPlayers] = React.useState<Player[]>(
    selectRandomPlayers(playerSet)
  );

  const [results, setResults] = React.useState<string[]>([]);

  console.log(playerSet);

  const player1Selected = () => {
    console.log("player 1 selected");
    results.push(
      `${player[0]?.firstName} selected over ${player[1]?.firstName}`
    );
    setResults(results);

    if (playerSet.length <= 2) {
      submitResults(results);
      navigate("/results");
    } else {
      removeComparedPlayers(player[0], player[1], playerSet);
      setPlayers(selectRandomPlayers(playerSet));
    }
  };

  const player2Selected = () => {
    console.log("player 2 selected");

    results.push(
      `${player[1]?.firstName} selected over ${player[0]?.firstName}`
    );
    setResults(results);

    if (playerSet.length <= 2) {
      submitResults(results);
      navigate("/results");
    } else {
      removeComparedPlayers(player[0], player[1], playerSet);
      setPlayers(selectRandomPlayers(playerSet));
    }
  };

  return (
    <div className="playersContainer">
      <PlayerCard onClick={() => player1Selected()} playerData={player[0]} />
      <h1 style={{ alignSelf: "center" }}>OR</h1>
      <PlayerCard onClick={() => player2Selected()} playerData={player[1]} />
    </div>
  );
}
