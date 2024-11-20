import React from "react";

interface ProgressBarProps {
  title: string;
  percentage: number;
  progressColor: string;
  progressBg: string;
}

const PercentCard = ({
  title,
  percentage,
  progressColor,
  progressBg,
}: ProgressBarProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-gray-500 text-normal font-medium">{title}</h3>
      <div className="flex items-center justify-between">
        <div
          className={`w-[80%] h-2 rounded-full`}
          style={{ backgroundColor: progressBg }}
        >
          <div
            className={`h-full rounded-full`}
            style={{ backgroundColor: progressColor, width: `${percentage}%` }}
          ></div>
        </div>
        <h3 className={`text-base font-bold`} style={{ color: progressColor }}>
          {percentage}%
        </h3>
      </div>
    </div>
  );
};

export default PercentCard;
