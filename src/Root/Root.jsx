import React from "react";

import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";
import Navbar from "../components/Header/Navbar";

const Root = () => {
  return (
    <div>
     <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
