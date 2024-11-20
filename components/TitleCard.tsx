import React from "react";
import Card from "./Card";
import Image from "next/image";
import { titleCardData } from "@/utils/constants";

const TitleCard = () => {
  const { image, title, questions, duration, submittedOn } = titleCardData;
  return (
    <Card>
      <div className="flex justify-between items-center">
        <Image src={image} alt={title} width={60} height={60} />
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-extrabold">{title}</h2>
          <div className="flex text-gray-500 font-medium">
            <div className="pr-2 border-r-2">Questions: {questions}</div>
            <div className="px-2 border-r-2">Duration: {duration}</div>
            <div className="px-2 ">Submitted on {submittedOn}</div>
          </div>
        </div>
        <button className="bg-[#00008b] text-white text-lg font-semibold px-6 py-2 rounded-md">
          Update
        </button>
      </div>
    </Card>
  );
};

export default TitleCard;
