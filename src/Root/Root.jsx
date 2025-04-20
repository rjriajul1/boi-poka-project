import React from "react";

import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";
import Navbar from "../components/Header/Navbar";



const Root = () => {
  return (
    <div className="max-w-[1400px] mx-auto ">
     <Navbar></Navbar>
    <div className=" min-h-[calc(100vh-284px)]">
    <Outlet>
       
       </Outlet>
    </div>
  
      <Footer></Footer>
      
    </div>
  );
};

export default Root;
