import Image from "next/image";
import React from "react";
import Target from "@/assets/target.png";

interface CircularProgressBarProps {
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
}) => {
  const rotation = (percentage / 100) * 360;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: 200,
        height: 200,
      }}
    >
      {/* Background Circle (Track) */}
      <div
        className="absolute inset-0 rounded-full border-[20px]"
        style={{
          borderColor: "#d6ebff",
        }}
      ></div>

      {/* Progress Circle */}
      <div
        className="absolute inset-0 rounded-full border-[20px] border-transparent"
        style={{
          borderTopColor: "#2590f7",
          borderRightColor: "#2590f7",
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "center",
        }}
      ></div>

      {/* Center Circle */}
      <div
        className="absolute rounded-full bg-white flex justify-center items-center"
        style={{
          width: 200 * 0.7,
          height: 200 * 0.7,
        }}
      >
        <Image src={Target} alt="target image" width={60} height={60} />
      </div>
    </div>
  );
};

export default CircularProgressBar;
