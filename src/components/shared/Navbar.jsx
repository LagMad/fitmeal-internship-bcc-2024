import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-20 w-full h-20 flex justify-center items-center p-4 bg-white   font-Poppins">
      <div className=" flex justify-between items-center w-screen px-3 md:px-5 2xl:w-[1440px] mx-5">
        <div className="flex w-1/6 font-RammettoOne text-cust-orange-normal items-center text-3xl">
          FitMeal
        </div>
        <div className="flex flex-row w-4/6 justify-center items-center gap-16">
          <Button
            type={"button"}
            variation={"tertiary-white"}
            onClick={console.log("Klik!")}
          >
            Beranda
          </Button>

          <Button
            type={"button"}
            variation={"tertiary-white"}
            onClick={console.log("Klik!")}
          >
            Informasi Nutrisi
          </Button>

          <Button
            type={"button"}
            variation={"tertiary-white"}
            onClick={console.log("Klik!")}
          >
            Rencana Makan
          </Button>

          <Button
            type={"button"}
            variation={"tertiary-white"}
            onClick={console.log("Klik!")}
          >
            Forum Komunitas
          </Button>

          <Button
            type={"button"}
            variation={"tertiary-white"}
            onClick={console.log("Klik!")}
          >
            Testimonial
          </Button>
        </div>

        <div className="flex flex-row w-1/6 justify-end gap-4">
          <Button
            type={"button"}
            variation={"secondary-rectangle"}
            onClick={console.log("Klik!")}
          >
            Daftar
          </Button>
          <Button
            type={"button"}
            variation={"primary-rectangle"}
            onClick={console.log("Klik!")}
          >
            Masuk
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
