import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const Root = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;