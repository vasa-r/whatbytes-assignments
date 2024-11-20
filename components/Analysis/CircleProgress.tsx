import Image from "next/image";
import React from "react";
import Target from "@/assets/target.png";

const CircularProgressBar = ({ percentage }: { percentage: number }) => {
  const radius = 50; // Radius of the circle
  const strokeWidth = 10; // Thickness of the stroke
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 200, height: 200 }}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="transform rotate-90"
      >
        {/* Background Circle (Track) */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#d6ebff"
          strokeWidth={strokeWidth}
        />

        {/* Progress Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#2590f7"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 1s ease-in-out",
          }}
        />

        {/* Center Circle */}
        <circle cx="60" cy="60" r={radius - strokeWidth} fill="#fff" />
      </svg>

      {/* Center Content */}
      <div
        className="absolute flex justify-center items-center"
        style={{
          width: 200 * 0.7,
          height: 200 * 0.7,
        }}
      >
        <Image src={Target} alt="target" width={60} height={60} />
      </div>
    </div>
  );
};

export default CircularProgressBar;
