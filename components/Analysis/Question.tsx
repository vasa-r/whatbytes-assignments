import React from "react";
import Card from "../Card";
import CircularProgressBar from "./CircleProgress";

const Question = () => {
  return (
    <Card>
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-extrabold">Question Analysis</h2>
          <h2 className="text-normal font-extrabold text-[#00258bd5]">10/15</h2>
        </div>
        <h2 className="mt-3 text-base font-bold text-slate-700">
          You Scored 10 question correct out of 15.{" "}
          <span className="font-normal">
            However it is still need some improvements.
          </span>
        </h2>
        <div className="flex items-center justify-center mt-10">
          <CircularProgressBar percentage={50} />
        </div>
      </div>
    </Card>
  );
};

export default Question;
