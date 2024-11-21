"use client";

import dynamic from "next/dynamic";
import Card from "../Card";
import Image from "next/image";
import Graph from "@/assets/graph.png";
import { useAppContext } from "@/context/AppContext";
// import GraphChart from "./Graph";

const GraphChart = dynamic(() => import("./Graph"), { ssr: false });

const Chart = () => {
  const { stat, screenWidth } = useAppContext();
  return (
    <Card>
      <div>
        <h2 className="text-lg font-extrabold">Comparison Graph</h2>
        <div className="flex justify-between mb-5">
          <h2 className="mt-3 text-base font-bold text-slate-700">
            You Scored {stat.percentile}% percentile.{" "}
            <span className="font-normal">
              which is lower than {screenWidth > 768 && <br />} the average
              percentile 72% of all the engineers who took this assignment.
            </span>
          </h2>
          <div className="bg-gray-100 flex justify-center items-center size-10 sm:size-12 rounded-full">
            <Image src={Graph} alt="trophy" width={25} height={25} />
          </div>
        </div>
        <GraphChart />
      </div>
    </Card>
  );
};

export default Chart;
