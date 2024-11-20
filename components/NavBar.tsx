import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import User from "@/assets/user.png";

const NavBar = () => {
  return (
    <div className="shadow-bottom-custom p-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src={Logo} alt="app logo" width={50} height={50} />
        <h1 className="text-3xl font-semibold">WhatBytes</h1>
      </div>
      <div className="flex items-center gap-2 p-2 shadow-custom rounded-md">
        <Image
          src={User}
          alt="user image"
          width={20}
          height={20}
          className="rounded-full"
        />
        <h3 className="text-lg font-semibold">Vasanth Raman</h3>
      </div>
    </div>
  );
};

export default NavBar;
