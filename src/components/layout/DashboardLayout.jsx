import React from "react";
import NavbarDashboard from "../shared/NavbarDashboard";
import Footer from "../shared/Footer";
import FooterALT from "../shared/FooterALT";

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-white text-black font-Poppins z-0">
      <NavbarDashboard className="z-10" />
      {children}
      <FooterALT position={"left"} />
    </div>
  );
};

export default DashboardLayout;
