import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-white pt-16 text-black font-Poppins">
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
};

export default MainLayout;
