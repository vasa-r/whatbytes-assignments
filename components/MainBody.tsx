import React from "react";
import MainSection from "./Main/MainSection";
import AnalysisSection from "./Analysis/AnalysisSection";

const MainBody = () => {
  return (
    <div className="py-6 pl-10 pr-4 w-full h-full">
      <p className="text-gray-500 font-medium text-lg">Skill Test</p>
      <div className="flex gap-5 w-full h-full mt-5">
        <MainSection />
        <AnalysisSection />
      </div>
    </div>
  );
};

export default MainBody;
