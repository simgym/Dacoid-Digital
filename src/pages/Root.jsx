import { Outlet } from "react-router-dom";
import Statusbar from "../components/Statusbar";

const RootLayout = () => {
  return (
    <>
      <Statusbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
