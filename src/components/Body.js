import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  return (
    <div className="bg-primary">
      <Header />
      <div className="grid grid-flow-col  text-textPrimary w-[90vw] m-auto">
        {isMenuOpen && <SideBar />}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Body;
