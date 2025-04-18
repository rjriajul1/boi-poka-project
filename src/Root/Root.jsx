import React from "react";

import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";
import Navbar from "../components/Header/Navbar";



const Root = () => {
  return (
    <div className="max-w-[1400px] mx-auto ">
     <Navbar></Navbar>
    <div className="p-3 md:p-0">
    <Outlet>
       
       </Outlet>
    </div>
  
      <Footer></Footer>
      
    </div>
  );
};

export default Root;
