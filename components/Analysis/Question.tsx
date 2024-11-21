"use client";

import React, { useMemo } from "react";
import Card from "../Card";
import CircularProgressBar from "./CircleProgress";
import { useAppContext } from "@/context/AppContext";

const Question = () => {
  const { stat } = useAppContext();
  const percentage = useMemo(() => {
    return (stat.currentScore * 100) / 15;
  }, [stat.currentScore]);
  return (
    <Card>
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-extrabold">Question Analysis</h2>
          <h2 className="text-normal font-extrabold text-[#00258bd5]">
            {stat.currentScore}/15
          </h2>
        </div>
        <h2 className="mt-3 text-base font-bold text-slate-700">
          You Scored {stat.currentScore} question correct out of 15.{" "}
          <span className="font-normal">
            However it is still need some improvements.
          </span>
        </h2>
        <div className="flex items-center justify-center mt-10">
          <CircularProgressBar percentage={percentage} />
        </div>
      </div>
    </Card>
  );
};

export default Question;
