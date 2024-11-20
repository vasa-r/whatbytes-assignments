import React from "react";
import { sidebarData } from "@/utils/constants";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="w-[16%] shadow-right pt-16 pr-2 ">
      {sidebarData.map(({ id, icon, label }) => {
        return (
          <div
            key={id}
            className={`flex items-center gap-3 p-5 cursor-pointer ${
              id === 2 ? "bg-slate-100 rounded-r-full" : ""
            }`}
          >
            <Image src={icon} alt={label} width={25} height={25} />
            <h3
              className={`text-lg font-semibold ${
                id === 2 ? "text-selected" : "text-slate-600"
              }`}
            >
              {label}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
