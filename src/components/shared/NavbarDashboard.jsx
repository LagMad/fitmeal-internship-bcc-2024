import React, { useState, useEffect } from "react";
import SVGs from "./SVGs";
import Dialogue from "../ui/Dialogue";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../api/services/profile";

const NavbarDashboard = () => {
  const navigate = useNavigate();
  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);
  const [userData, setUserData] = useState([]);

  const getUser = async () => {
    try {
      const response = await getUserData();
      setUserData(response.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const toggleLogOutPopup = () => {
    setLogoutPopupVisible(!isLogoutPopupVisible);
  };

  const handleLogout = (e) => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-row w-full justify-center items-center py-5">
          <div className="flex flex-row w-full mx-32 drop-shadow-xl bg-white py-3 px-5 rounded-lg justify-between items-center">
            <a
              className="flex w-1/2 font-RammettoOne text-cust-orange-normal text-4xl text-center"
              href="/"
            >
              FitMeal
            </a>
            <div className="flex flex-row w-1/2 justify-end items-center gap-10">
              <div className="flex flex-row justify-center items-center gap-5 text-xl text-cust-orange-normal font-bold w-fit h-full overflow-hidden whitespace-nowrap">
                <div className="flex w-12 h-12 bg-cust-orange-normal rounded-full justify-center items-center overflow-hidden">
                  <img
                    className="max-w-12"
                    src={userData.photoLink}
                    alt="profile"
                  />
                </div>
                <span className="truncate">{userData.userName}</span>
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
