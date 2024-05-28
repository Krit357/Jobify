import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";

const HomeLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
