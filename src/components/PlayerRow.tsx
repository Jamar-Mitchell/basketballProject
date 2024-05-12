import React from "react";
import PlayerCard from "./PlayerCard";
import "./PlayerRow.css";
import { Player } from "../types/player";
import {
  removeComparedPlayers,
  selectRandomPlayers,
  submitResults,
  generatePlayerComparisons,
} from "../data/helper";
import { useNavigate } from "react-router-dom";
import { getPlayerData } from "../data/api";
import { players } from "../data/players";
import ProgressBar from "./ProgressBar";

export default function PlayerRow() {
  const navigate = useNavigate();

  const [playerSet, setPlayerSet] = React.useState<Player[]>(players);

  const [playerComparisons, setPlayerComparisons] = React.useState<
    [Player, Player][]
  >(generatePlayerComparisons(playerSet));

  const [totalComparisons, setTotalComparisons] = React.useState(0);

  const [currentPlayer, setCurrentPlayers] = React.useState<Player[]>(
    selectRandomPlayers(playerComparisons)
  );

  // const [currentPlayer, setCurrentPlayers] = React.useState<Player[]>([]);

  React.useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const playerSetData = await getPlayerData();
        setPlayerSet(playerSetData);
        setPlayerComparisons(generatePlayerComparisons(playerSetData));
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    };

    fetchPlayerData();
  }, []);

  React.useEffect(() => {
    setCurrentPlayers(selectRandomPlayers(playerComparisons));
    setTotalComparisons(playerComparisons.length);
  }, [playerComparisons]);

  const [results, setResults] = React.useState<string[]>([]);

  const player1Selected = () => {
    console.log("currentPlayer 1 selected");
    results.push(
      `${currentPlayer[0]?.playerName} selected over ${currentPlayer[1]?.playerName}`
    );
    setResults(results);

    if (playerComparisons.length <= 2) {
      submitResults(results);
      //todo: set currentPlayer set back to original
      // setPlayerSet(initialSet);
      navigate("/results");
    } else {
      removeComparedPlayers(
        [currentPlayer[0], currentPlayer[1]],
        playerComparisons
      );
      setCurrentPlayers(selectRandomPlayers(playerComparisons));
    }
  };

  const player2Selected = () => {
    console.log("currentPlayer 2 selected");

    results.push(
      `${currentPlayer[1]?.playerName} selected over ${currentPlayer[0]?.playerName}`
    );
    setResults(results);

    if (playerComparisons.length <= 2) {
      submitResults(results);
      //todo: set currentPlayer set back to original
      // setPlayerSet(initialSet);

      navigate("/results");
    } else {
      removeComparedPlayers(
        [currentPlayer[0], currentPlayer[1]],
        playerComparisons
      );
      setCurrentPlayers(selectRandomPlayers(playerComparisons));
    }
  };

  return (
    <>
      <ProgressBar
        comparisonsleft={playerComparisons.length}
        totalComparisons={totalComparisons}
      />
      <div className="playersContainer">
        <PlayerCard
          onClick={() => player1Selected()}
          playerData={currentPlayer[0]}
        />
        <h1 style={{ alignSelf: "center" }}>OR</h1>
        <PlayerCard
          onClick={() => player2Selected()}
          playerData={currentPlayer[1]}
        />
      </div>
    </>
  );
}
