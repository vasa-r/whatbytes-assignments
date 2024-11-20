import MainBody from "@/components/MainBody";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <div className="flex w-full">
        <SideBar />
        <MainBody />
      </div>
    </div>
  );
};

export default Home;
