import React from "react";
import FooterALT from "../components/shared/FooterALT";

const LacakNutrisi = () => {
  return (
    <div className="">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 w-screen h-20 flex justify-between items-center px-36 bg-white font-Poppins">
        <div className=" flex justify-between w-full items-center">
          <a
            className="flex w-1/6 font-RammettoOne text-cust-orange-normal items-center text-3xl"
            href="/"
          >
            FitMeal
          </a>
        </div>
      </nav>

      {/* CONTENT */}

      {/* FOOTER */}
      <FooterALT position={"left"} />
    </div>
  );
};

export default LacakNutrisi;
