import React, { createContext, useState, ReactNode } from "react";
import { PlayerResults } from "../types/playerResults";
import { User } from "../types/user";
import { Demographics } from "../types/demographics";

export interface Results {
  user: User;
  demographics: Demographics;
  playerResults: PlayerResults; // Use the PlayerResults type here
}

interface ContextValue {
  results: Results;
  updateResults: (newResults: Results) => void;
}

interface ResultProviderProps {
  children: ReactNode;
}

export const ResultContext = createContext<ContextValue>({
  results: {
    user: {
      ageChecked: false,
      consentChecked: false,
      emailValue: "",
    },
    demographics: {
      gender: "",
      age: "",
      current_position: "",
      current_position_other: "",
      decision_making: "",
      experience_years: "",
      current_level: "",
      highest_level_played: "",
      professional_organization: "",
    },
    playerResults: {},
  },
  updateResults: () => {},
});

export const ResultProvider: React.FC<ResultProviderProps> = ({ children }) => {
  const [results, setResults] = useState<Results>({
    user: {
      ageChecked: false,
      consentChecked: false,
      emailValue: "",
    },
    demographics: {
      gender: "",
      age: "",
      current_position: "",
      current_position_other: "",
      decision_making: "",
      experience_years: "",
      current_level: "",
      highest_level_played: "",
      professional_organization: "",
    },
    playerResults: {},
  });

  const updateResults = (newResults: Results) => {
    setResults(() => newResults);
  };

  const contextValue: ContextValue = {
    results,
    updateResults,
  };

  return (
    <ResultContext.Provider value={contextValue}>
      {children}
    </ResultContext.Provider>
  );
};
