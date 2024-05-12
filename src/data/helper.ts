import { Player } from "../types/player";

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

export const generatePlayerComparisons = (players: Player[]) => {
  const comparisons: [player1: Player, player2: Player][] = [];

  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      comparisons.push([players[i], players[j]]);
    }
  }

  console.log("comparisons", comparisons);
  return comparisons;
};

export const removeComparedPlayers = (
  players: Player[],
  comparisons: Player[][]
): void => {
  const index = comparisons.indexOf(players);
  comparisons.splice(index, 1);
  console.log("comparisons", comparisons);
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

export const submitResults = (results: string[]) => {
  console.log(results);

  if (process.env.NODE_ENV === "development") {
    // Code to run when app is running locally , send data somewhere else
  } else {
    //send results to google sheets
  }
};
