"use client";

import { StatType } from "@/components/UpdateStatModal";
import { GraphData, graphInitialData } from "@/utils/constants";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AppContextType {
  stat: StatType;
  UpdateStat: (statData: StatType) => void;
  graphData: GraphData[];
  screenWidth: number;
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
    rank: 3,
    percentile: 23,
    currentScore: 4,
  };
  const [stat, setStat] = useState<StatType>(initialData);
  const [graphData, setGraphData] = useState<GraphData[]>(graphInitialData);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => updateGraphData(Number(stat.percentile)), [stat.percentile]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });

    console.log("screenWidth", screenWidth);

    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }, [screenWidth]);

  const UpdateStat = (statData: Partial<StatType>) => {
    setStat((prev) => ({ ...prev, ...statData }));
  };

  const updateGraphData = (percentile: number) => {
    const isPresent = graphData.some((item) => item.marks === percentile);

    if (isPresent) {
      const itemToUpdate = graphInitialData.find(
        (item) => item.marks === percentile
      );
      if (itemToUpdate) {
        itemToUpdate.numberOfStudents += 1;
      }
    } else {
      const newGraphData = [
        ...graphData,
        { marks: Number(percentile), numberOfStudents: 1 },
      ].sort((a, b) => a.marks - b.marks);

      setGraphData(newGraphData);
    }
  };

  const values = { stat, UpdateStat, graphData, screenWidth };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
