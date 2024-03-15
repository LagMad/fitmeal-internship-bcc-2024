import React, { useState } from "react";
import SearchBar from "../ui/SearchBar";
import SVGs from "./SVGs";
import PhotoProfile from "../../assets/PhotoProfile.png";
import Dialogue from "../ui/Dialogue";
import { useNavigate } from "react-router-dom";

const NavbarDashboard = () => {
    const navigate = useNavigate();
  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);

  const toggleLogOutPopup = () => {
    setLogoutPopupVisible(!isLogoutPopupVisible);
  };

  const handleLogout = (e) => {
    // e.preventDefault();
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div>
      <div className="flex flex-col w-full justify-center items-center">
        {/* NAVBAR */}
        <div className="flex flex-row w-full justify-center items-center py-5">
          <div className="flex flex-row w-full mx-32 drop-shadow-xl bg-white py-3 px-5 rounded-lg justify-between items-center">
            <a className="flex w-1/2 font-RammettoOne text-cust-orange-normal text-4xl text-center" href="/">
              FitMeal
            </a>
            <div className="flex flex-row w-1/2 justify-center items-center gap-10">
              <SearchBar />
              <hr className="border-[1.5px] border-cust-orange-normal h-10" />
              <img className="" src={PhotoProfile} alt="profile" />
              <div className="font-bold text-cust-orange-normal text-2xl">
                Suryanto
              </div>
              <button onClick={toggleLogOutPopup}>
                <SVGs.LogOut />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isLogoutPopupVisible && (
        <Dialogue
        className={"z-50"}
          type={"warning"}
          title={"Keluar"}
          message={"Apa kamu yakin ingin keluar?"}
          subMessage={
            <>
              Datamu akan tetap tersimpan dan aman ketika{" "}
              <span className={"font-bold text-cust-orange-normal"}>Masuk</span>{" "}
              kembali
            </>
          }
          buttonWarning1={"Batal"}
          buttonWarning2={"Konfirmasi"}
          onClickWarning1={toggleLogOutPopup}
          onClickWarning2={handleLogout}
        />
      )}
    </div>
  );
};

export default NavbarDashboard;