"use client";

import React from "react";
import { statCard } from "@/utils/constants";
import Card from "../Card";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const StatCard = () => {
  const { title, trophy, tick, note } = statCard;
  const { stat } = useAppContext();
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-extrabold">{title}</h2>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="sm:border-r-2 border-0 flex gap-3 p-5 flex-1">
            <div className="bg-gray-100 flex justify-center items-center size-12 rounded-full">
              <Image src={trophy} alt="trophy" width={20} height={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold">{stat.rank}</h1>
              <p className="text-gray-500 font-medium text-xs">YOUR RANK</p>
            </div>
          </div>
          <div className="sm:border-r-2 border-0 flex gap-3 p-5 flex-1">
            <div className="bg-gray-100 flex justify-center items-center size-12 rounded-full">
              <Image src={note} alt="trophy" width={20} height={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold">{stat.percentile}%</h1>
              <p className="text-gray-500 font-medium text-xs">PERCENTILE</p>
            </div>
          </div>
          <div className="flex gap-3 p-5 flex-1">
            <div className="bg-gray-100 flex justify-center items-center size-12 rounded-full">
              <Image src={tick} alt="trophy" width={25} height={25} />
            </div>
            <div>
              <h1 className="text-xl font-bold">{stat.currentScore} / 15</h1>
              <p className="text-gray-500 font-medium text-xs">
                CORRECT ANSWERS
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
