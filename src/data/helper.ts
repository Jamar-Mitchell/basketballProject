import { Player } from "../types/player";

export const selectRandomPlayers = (players: Player[]): [Player, Player] => {
  const index1 = Math.floor(Math.random() * players.length);
  let index2 = Math.floor(Math.random() * players.length);
  while (index2 === index1) {
    index2 = Math.floor(Math.random() * players.length); // Ensure index2 is different from index1
  }
  return [players[index1], players[index2]];
};

// Function to remove compared players from the list
export const removeComparedPlayers = (
  player1: Player,
  player2: Player,
  players: Player[]
): void => {
  const index1 = players.indexOf(player1);
  if (index1 !== -1) {
    players.splice(index1, 1);
  }
  const index2 = players.indexOf(player2);
  if (index2 !== -1) {
    players.splice(index2, 1);
  }
};

export const submitResults = (results: string[]) => {
  console.log(results);

  if (process.env.NODE_ENV === "development") {
    // Code to run when app is running locally , send data somewhere else
  } else {
    //send results to google sheets
  }
};
