import { Player } from "../types/player";

export const getPlayerData = async (): Promise<Player[]> => {
  const res = await fetch(
    "https://script.google.com/macros/s/AKfycbx88dzmTV9WSmJNCAt9cQo61aDSO2wpf3Y1zxgZlOOuBe43RmiLYGqaouLBPlCM4aZyeA/exec"
  );

  const { data } = await res.json();

  return data;
};
