"use client";

import MainBody from "@/components/MainBody";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { useAppContext } from "@/context/AppContext";

const Home = () => {
  const { screenWidth } = useAppContext();
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <div className="flex w-full">
        {screenWidth > 768 && <SideBar />}
        <MainBody />
      </div>
    </div>
  );
};

export default Home;
