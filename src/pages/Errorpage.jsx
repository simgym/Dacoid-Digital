import React from "react";
import Statusbar from "../components/Statusbar";

const Errorpage = () => {
  return (
    <>
      <main>
        <Statusbar />
        <h1>Error</h1>
        <p>Error Loading the page</p>
      </main>
    </>
  );
};

export default Errorpage;
