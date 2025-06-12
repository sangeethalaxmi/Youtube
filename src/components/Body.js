import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";

const Body = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  // const location = useLocation();
  // // when we have search header all timem when search in same result page the scroll remains unchanged
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.search, location.pathname]);
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
