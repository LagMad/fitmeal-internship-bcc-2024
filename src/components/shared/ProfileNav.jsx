import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "../ui/Button";
import PhotoProfile from "../../assets/PhotoProfile.png";
import SVGs from "./SVGs";
import Dialogue from "../ui/Dialogue";

const ProfileNav = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = (e) => {
    // e.preventDefault();
    window.localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="relative z-50">
      <button
        className="flex flex-row justify-center items-center gap-5 text-xl text-cust-orange-normal font-bold"
        onClick={toggleDropdown}
      >
        <img className="" src={PhotoProfile} alt="profile" />
        Suryanto
      </button>
      {isOpen && (
        <div className="absolute -bottom-[56px] w-full left-0 mt-1 bg-transparent text-center">
          <ul className="w-full">
            <li
              className="w-full py-2 md:py-2.5 px-3 md:px-8 bg-cust-orange-normal hover:bg-white rounded-xl text-white hover:text-cust-orange-normal border-transparent border-2 hover:border-2 hover:border-cust-orange-normal font-semibold text-sm md:text-sm transition-colors duration-300"
              onClick={togglePopup}
              style={{ cursor: "pointer" }}
            >
              Log Out
            </li>
          </ul>
        </div>
      )}
      {isPopupVisible && (
        <Dialogue
          type={"warning"}
          title={"Keluar"}
          message={"Apa kamu yakin ingin keluar?"}
          subMessage={
            <>
              Datamu akan tetap tersimpan dan aman ketika{" "}
              <span className={"font-bold text-cust-orange-normal"}>Masuk</span> kembali
            </>
          }
          buttonWarning1={"Batal"}
          buttonWarning2={"Konfirmasi"}
          onClickWarning1={togglePopup}
          onClickWarning2={handleLogout}
        />
      )}
    </div>
  );
};

export default ProfileNav;
