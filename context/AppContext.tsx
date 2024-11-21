"use client";

import { StatType } from "@/components/UpdateStatModal";
import {
  createContext,
  ReactNode,
  useContext,
  //   useEffect,
  useState,
} from "react";

interface AppContextType {
  stat: StatType;
  UpdateStat: (statData: StatType) => void;
}

interface AppContextProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

const AppProvider = ({ children }: AppContextProps) => {
  const initialData = {
    rank: 0,
    percentile: 0,
    currentScore: 0,
  };
  const [stat, setStat] = useState<StatType>(initialData);

  //   useEffect(() => console.log(stat), [stat]);

  const UpdateStat = (statData: Partial<StatType>) => {
    setStat((prev) => ({ ...prev, ...statData }));
  };

  const values = { stat, UpdateStat };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
