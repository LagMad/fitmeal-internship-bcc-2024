import React from "react";
import Navbar from "../shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-white py-20 text-black">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
