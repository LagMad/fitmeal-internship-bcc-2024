import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "../ui/Button";
import PhotoProfile from "../../assets/PhotoProfile.png";
import SVGs from "./SVGs";
import Dialogue from "../ui/Dialogue";
import { getUserData } from "../../api/services/profile";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
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

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = (e) => {
    // e.preventDefault();
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
    window.location.reload();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-screen h-20 flex justify-between items-center px-36 bg-white font-Poppins">
        <div className=" flex justify-between w-full items-center">
          <a
            className="flex w-1/6 font-RammettoOne text-cust-orange-normal items-center text-3xl"
            href="/"
          >
            FitMeal
          </a>
          <div className="flex flex-row w-4/6 justify-center items-center gap-16">
            <Button type={"button"} variation={"tertiary-white"}>
              Beranda
            </Button>

            <Button type={"button"} variation={"tertiary-white"}>
              Informasi Nutrisi
            </Button>

            <Button type={"button"} variation={"tertiary-white"}>
              Rencana Makan
            </Button>

            <Button type={"button"} variation={"tertiary-white"}>
              Forum Komunitas
            </Button>

            <Button type={"button"} variation={"tertiary-white"}>
              Testimonial
            </Button>
          </div>

          <div className="flex flex-row w-1/6 justify-end gap-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  className="flex flex-row justify-center items-center gap-5 text-xl text-cust-orange-normal font-bold w-40 h-full overflow-hidden whitespace-nowrap"
                  onClick={toggleDropdown}
                >
                  <img className="" src={PhotoProfile} alt="profile" />
                  <span className="truncate">{userData.userName}</span>
                </button>
                {isOpen && (
                  <div className="absolute top-10 w-full left-0 mt-1 bg-transparent text-center">
                    <ul className="flex flex-col w-full gap-1">
                      <li
                        className="w-full py-2 md:py-2.5 px-3 md:px-8 bg-cust-orange-normal hover:bg-white rounded-xl text-white hover:text-cust-orange-normal border-transparent border-2 hover:border-2 hover:border-cust-orange-normal font-semibold text-sm md:text-sm transition-colors duration-300"
                        onClick={() => navigate("/dashboard")}
                        style={{ cursor: "pointer" }}
                      >
                        Dashboard
                      </li>
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
              </div>
            ) : (
              <>
                <Button
                  type={"button"}
                  variation={"secondary-rectangle"}
                  onClick={() => navigate("/register")}
                >
                  Daftar
                </Button>
                <Button
                  type={"button"}
                  variation={"primary-rectangle"}
                  onClick={() => navigate("/login")}
                >
                  Masuk
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>
      {isPopupVisible && (
        <Dialogue
          className="z-50"
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
          onClickWarning1={togglePopup}
          onClickWarning2={handleLogout}
        />
      )}
    </>
  );
};

export default Navbar;
