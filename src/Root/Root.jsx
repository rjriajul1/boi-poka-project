import React from "react";

import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";
import Navbar from "../components/Header/Navbar";
import Banner from "../components/Banner/Banner";


const Root = () => {
  return (
    <div className="md:max-w-10/12 p-2 mx-auto">
     <Navbar></Navbar>
      <Banner></Banner>
      <Outlet>
       
      </Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default Root;
