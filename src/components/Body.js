import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  return (
    <>
      <Header />
      <div className="grid grid-flow-col">
        {isMenuOpen && <SideBar />}
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Body;
