import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import User from "@/assets/user.png";

const NavBar = () => {
  return (
    <div className="shadow-bottom p-3 flex items-center justify-between sm:p-5">
      <div className="flex items-center gap-1 sm:gap-2">
        <Image src={Logo} alt="app logo" width={50} height={50} />
        <h1 className=" text-2xl font-semibold sm:text-3xl">WhatBytes</h1>
      </div>
      <div className="flex items-center gap-2 p-2 shadow-custom rounded-md">
        <Image
          src={User}
          alt="user image"
          width={20}
          height={20}
          className="rounded-full"
        />
        <h3 className="sm:text-lg font-semibold text-base">Vasanth Raman</h3>
      </div>
    </div>
  );
};

export default NavBar;
