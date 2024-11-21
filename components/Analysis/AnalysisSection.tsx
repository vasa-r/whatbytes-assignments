import React from "react";
import Syllabus from "./Syllabus";
import Question from "./Question";

const AnalysisSection = () => {
  return (
    <div className="sm:w-[40%] w-full h-full flex flex-col gap-5">
      <Syllabus />
      <Question />
    </div>
  );
};

export default AnalysisSection;
