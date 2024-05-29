import React, { useContext } from "react";
import PlayerCard from "./PlayerCard";
import "./PlayerRow.css";
import { Player } from "../types/player";
import {
  removeComparedPlayers,
  selectRandomPlayers,
  submitResults,
  generatePlayerComparisons,
  addToResults,
} from "../data/helper";
import { useNavigate } from "react-router-dom";
import { getPlayerData } from "../data/api";
import ProgressBar from "./ProgressBar";
import { PlayerResults } from "../types/playerResults";
import { ResultContext } from "../context/ResultContext";
import { Typography } from "@mui/material";

export default function PlayerRow() {
  const navigate = useNavigate();
  const { results, updateResults } = useContext(ResultContext);

  const [playerSet, setPlayerSet] = React.useState<Player[]>([]);

  const [playerComparisons, setPlayerComparisons] = React.useState<
    [Player, Player][]
  >(generatePlayerComparisons(playerSet));

  const [totalComparisons, setTotalComparisons] = React.useState(0);

  const [currentPlayer, setCurrentPlayers] = React.useState<Player[]>(
    selectRandomPlayers(playerComparisons)
  );

  const clearStates = () => {
    setPlayerResults({});
    setPlayerSet([]);
    setPlayerComparisons([]);
    setTotalComparisons(0);
    setCurrentPlayers([]);
  };
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

  const [playerResults, setPlayerResults] = React.useState<PlayerResults>({});

  const player1Selected = () => {
    const player1 = currentPlayer[0];
    const player2 = currentPlayer[1];

    // console.log("currentPlayer 1 selected");
    // playerResults.push(`${player1?.playerName} selected over ${player2?.playerName}`);
    addToResults(player1, player2, playerResults);
    setPlayerResults(playerResults);

    if (playerComparisons.length <= 2) {
      submitResults({
        user: results.user,
        demographics: results.demographics,
        playerResults,
      });
      clearStates();
      //todo: set currentPlayer set back to original
      // setPlayerSet(initialSet);
      navigate("/results");
    } else {
      removeComparedPlayers([player1, player2], playerComparisons);
      setCurrentPlayers(selectRandomPlayers(playerComparisons));
    }
  };

  const player2Selected = () => {
    const player1 = currentPlayer[0];
    const player2 = currentPlayer[1];

    // console.log("currentPlayer 2 selected");

    // playerResults.push(`${player2?.playerName} selected over ${player1?.playerName}`);
    addToResults(player2, player1, playerResults);
    setPlayerResults(playerResults);

    if (playerComparisons.length <= 2) {
      submitResults({
        user: results.user,
        demographics: results.demographics,
        playerResults,
      });
      clearStates();

      //todo: set currentPlayer set back to original
      // setPlayerSet(initialSet);

      navigate("/results");
    } else {
      removeComparedPlayers([player1, player2], playerComparisons);
      setCurrentPlayers(selectRandomPlayers(playerComparisons));
    }
  };

  return currentPlayer ? (
    <>
      <Typography gutterBottom variant="subtitle1" className="headerText">
        Ignoring any of your current (or other current) team needs or draft
        strategy, which of these two players do you think should be drafted
        higher?
      </Typography>
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
  ) : (
    <></>
  );
}
