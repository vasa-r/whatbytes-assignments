import React from "react";
import TitleCard from "./TitleCard";
import StatCard from "./StatCard";
import Chart from "./Chart";

const MainSection = () => {
  return (
    <div className="sm:w-[60%] w-full h-full flex flex-col gap-5">
      <TitleCard />
      <StatCard />
      <Chart />
    </div>
  );
};

export default MainSection;
