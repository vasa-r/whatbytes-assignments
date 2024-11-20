import React from "react";
import Card from "../Card";
import PercentCard from "./PercentCard";
import { syllabusData } from "@/utils/constants";

const Syllabus = () => {
  return (
    <Card>
      <div>
        <h2 className="text-lg font-extrabold">Syllabus Wise Analysis</h2>
        <div className="mt-5 flex flex-col gap-8">
          {syllabusData.map(
            ({ id, title, percentage, progressBg, progressColor }) => (
              <PercentCard
                key={id}
                title={title}
                percentage={percentage}
                progressBg={progressBg}
                progressColor={progressColor}
              />
            )
          )}
        </div>
      </div>
    </Card>
  );
};

export default Syllabus;
