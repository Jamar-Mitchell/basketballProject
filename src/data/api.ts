import { Player } from "../types/player";
import { playerResults } from "../types/playerResults";

export const getPlayerData = async (): Promise<Player[]> => {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbx88dzmTV9WSmJNCAt9cQo61aDSO2wpf3Y1zxgZlOOuBe43RmiLYGqaouLBPlCM4aZyeA/exec"
  );

  const { data } = await res.json();

  return data;
};

export const postResults = async (resultsData: playerResults) => {
  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbwJAOeRHeqA2Es0VWpsW3mW3dD9_-E2nqiGbgteEcpKa67JSHSp58TZjN5RjCJNZ2rw/exec",
      {
        method: "POST",

        body: JSON.stringify(resultsData), // Convert data to JSON string
      }
    );

    if (!res.ok) {
      throw new Error("Failed to post results");
    }

    const responseData = await res.json();
    return responseData; // Optionally return data received from the server
  } catch (error) {
    console.error("Error posting results:", error);
    throw error;
  }
};
