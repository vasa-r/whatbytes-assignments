import React from "react";
import Syllabus from "./Syllabus";
import Question from "./Question";

const AnalysisSection = () => {
  return (
    <div className="w-[40%] h-full flex flex-col gap-5">
      <Syllabus />
      <Question />
    </div>
  );
};

export default AnalysisSection;
