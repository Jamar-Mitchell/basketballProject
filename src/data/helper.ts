import { playerResults } from "../types/playerResults";
import { Player } from "../types/player";
import { postResults } from "./api";

export const getPlayerPhoto = (player: Player) => {
  try {
    return require(`${player.playerName}.jpeg`);
  } catch (e) {
    console.warn("image does not exist");
    return require("../images/player.jpg");
  }
};

export const resetPlayerSet = (playerSet: Player[]): void => {};

export const selectRandomPlayers = (
  comparisons: [Player, Player][]
): [Player, Player] => {
  const index = Math.floor(Math.random() * comparisons.length);
  // let index2 = Math.floor(Math.random() * comparisons.length);
  // while (index2 === index1) {
  //   index2 = Math.floor(Math.random() * comparisons.length); // Ensure index2 is different from index1
  // }

  return comparisons[index];
};

// Function to shuffle an array in place
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const generatePlayerComparisons = (players: Player[]) => {
  // Shuffle the array of players to introduce randomness
  shuffleArray(players);

  const comparisons: [Player, Player][] = [];

  // Iterate over each player
  for (let i = 0; i < players.length; i++) {
    const player1 = players[i];

    // Compare player1 to players that come after it in the array
    for (let j = i + 1; j < players.length; j++) {
      const player2 = players[j];
      comparisons.push([player1, player2]);
    }
  }

  // console.log("comparisons", comparisons);
  return comparisons;
};

export const removeComparedPlayers = (
  players: Player[],
  comparisons: Player[][]
): void => {
  for (let i = 0; i < comparisons.length; i++) {
    const comparison = comparisons[i];
    if (
      comparison[0].playerName === players[0].playerName &&
      comparison[1].playerName === players[1].playerName
    ) {
      comparisons.splice(i, 1);
      break; // Exit loop once the comparison is removed
    }
  }
};

// Function to remove compared players from the list
// export const removeComparedPlayers = (
//   player1: Player,
//   player2: Player,
//   players: Player[]
// ): void => {
//   const index1 = players.indexOf(player1);
//   if (index1 !== -1) {
//     players.splice(index1, 1);
//   }
//   const index2 = players.indexOf(player2);
//   if (index2 !== -1) {
//     players.splice(index2, 1);
//   }
// };

export const submitResults = async (results: playerResults) => {
  if (process.env.NODE_ENV === "development") {
    // Code to run when app is running locally , log to console
    console.log(results);
    await postResults(results);
  } else {
    //send results to google sheets
    await postResults(results);
  }
};

export const addToResults = (
  winner: Player,
  loser: Player,
  results: playerResults
) => {
  // Check if the winner is already in the results
  if (!(winner.playerName in results)) {
    results[winner.playerName] = {};
  }

  // Increment the count for the winner over the loser
  if (!(loser.playerName in results[winner.playerName])) {
    results[winner.playerName][loser.playerName] = 1;
  } else {
    results[winner.playerName][loser.playerName]++;
  }

  // Update the loser's stats as well
  if (!(loser.playerName in results)) {
    results[loser.playerName] = {};
  }

  // Increment the count for the loser's losses to the winner
  if (!(winner.playerName in results[loser.playerName])) {
    results[loser.playerName][winner.playerName] = 0; // Initialize to 0 if it's the first loss
  }
};
