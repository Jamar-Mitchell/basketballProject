import { Results } from "../context/ResultContext";
import { Player } from "../types/player";

export const getPlayerData = async (): Promise<Player[]> => {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbxDoafpsuCYyrRmm_bNfCykuspKNQVRefFSRCcdVfviixv4brKuT1b30oBJWG6O3GRBnw/exec"
  );

  const { data } = await res.json();

  return data;
};

export const postPlayerResults = async (resultsData: Results) => {
  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbzQ7A_l_WBFTBcSjkPD-dnHDL5bHxK6cl0TXwltDuysU01I75RPr8G2AheEdbf-5lqu3g/exec",
      {
        method: "POST",

        body: JSON.stringify(resultsData.playerResults), // Convert data to JSON string
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

export const postUserAndDemographics = async (resultsData: Results) => {
  try {
    const res = await fetch("url", {
      method: "POST",

      body: JSON.stringify(resultsData), // Convert data to JSON string
    });

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

export const postData = async (resultsData: Results) => {
  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbz6PuQ5v1OaoUFbAmjxdhigAF2cz2JwbUwynj_vOCUF_NTmKzUrf4sgnrkcnzr08sBnxQ/exec",
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
