"use client";

import React from "react";
import MainSection from "./Main/MainSection";
import AnalysisSection from "./Analysis/AnalysisSection";

const MainBody = () => {
  return (
    <div className="p-4 sm:py-6 sm:pl-10 sm:pr-4 w-full h-full">
      <p className="text-gray-500 font-medium text-lg">Skill Test</p>
      <div className="flex gap-5 w-full h-full mt-5 flex-col sm:flex-row">
        <MainSection />
        <AnalysisSection />
      </div>
    </div>
  );
};

export default MainBody;
