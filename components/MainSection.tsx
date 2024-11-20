import React from "react";
import TitleCard from "./TitleCard";
import StatCard from "./StatCard";

const MainSection = () => {
  return (
    <div className="w-[60%] h-full flex flex-col gap-5">
      <TitleCard />
      <StatCard />
    </div>
  );
};

export default MainSection;
