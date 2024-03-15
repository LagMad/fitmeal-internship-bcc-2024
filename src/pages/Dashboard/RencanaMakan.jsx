import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SVGs from "../../components/shared/SVGs";
import Dialogue from "../../components/ui/Dialogue";
import PhotoProfileDummy from "../../assets/PhotoProfileDummy.png";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { getUserData } from "../../api/services/profile";
import DashboardLayout from "../../components/layout/DashboardLayout";
import DashboardMenu from "../../components/shared/DashboardMenu";
import NotFound from "../../components/shared/NotFound";
import ComingSoon from "../../assets/ComingSoon.svg"

const RencanaMakan = () => {
  const navigate = useNavigate();

  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);
  const [isPasswordPopupVisible, setPasswordPopupVisible] = useState(false);
  const [isPasswordSuccessPopupVisible, setPasswordSuccessPopupVisible] =
    useState(false);
  const [isUbahPopupVisible, setUbahPopupVisible] = useState(false);
  const [isUbahSuccessPopupVisible, setUbahSuccessPopupVisible] =
    useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState([]);

  const toggleLogOutPopup = () => {
    setLogoutPopupVisible(!isLogoutPopupVisible);
  };

  const togglePasswordPopup = () => {
    setPasswordPopupVisible(!isPasswordPopupVisible);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordSuccessPopup = () => {
    setPasswordSuccessPopupVisible(!isPasswordSuccessPopupVisible);
  };

  const toggleUbahPopup = () => {
    setUbahPopupVisible(!isUbahPopupVisible);
  };

  const toggleUbahSuccessPopup = () => {
    setUbahSuccessPopupVisible(!isUbahSuccessPopupVisible);
  };

  const handleLogout = (e) => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
    navigate("/");
  };

  const getUser = async () => {
    try {
      const response = await getUserData();
      console.log("ini data :", response.data);  
      setUserData(response.data);
    } catch (error) {
      throw error
    }
  };

  useEffect(() => {
    getUser();
  });

  useEffect(() => {
    console.log();
  });

  return (
    <div>
      <DashboardLayout>
        <div className="flex flex-col mx-32 gap-5 mb-10 z-0">
          <div className="ml-[88px] font-bold text-cust-orange-normal text-xl">
            Rencana Makan
          </div>
          <div className="flex flex-row gap-5">
            <DashboardMenu />
            <div className="flex flex-col w-full h-96 font-RammettoOne text-cust-orange-normal justify-center items-center text-9xl">
                Coming Soon!
            </div>
          </div>
        </div>
      </DashboardLayout>

      {/* POPUPS */}
      {isUbahPopupVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm">
          <div className="flex flex-col w-1/2 bg-white drop-shadow-2xl rounded-xl justify-center items-center p-8 gap-5">
            <div className="text-cust-orange-normal font-bold text-3xl">
              Ubah Informasi Pribadi
            </div>
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-col w-1/2 justify-start items-start gap-10">
                <div className="flex flex-col w-full gap-5 justify-start">
                  <div className="font-bold text-lg text-cust-orange-normal">
                    Username
                  </div>
                  <Input
                    className="w-10/12"
                    type="text"
                    name="username"
                    value=""
                  />
                </div>
                <div className="flex flex-col w-full gap-5 justify-start">
                  <div className="font-bold text-lg text-cust-orange-normal">
                    Email
                  </div>
                  <Input
                    className="w-10/12"
                    type="text"
                    name="email"
                    value=""
                  />
                </div>
                <div className="flex flex-col w-full gap-5 justify-start">
                  <div className="font-bold text-lg text-cust-orange-normal">
                    Kota
                  </div>
                  <Input className="w-10/12" type="text" name="kota" value="" />
                </div>
              </div>
              <div className="flex flex-col w-1/2 gap-10">
                <div className="flex flex-col gap-5 justify-end items-end">
                  <div className="font-bold text-lg text-cust-orange-normal w-10/12">
                    Umur
                  </div>
                  <div className="flex justify-end w-full">
                    <div className="w-10/12">
                      <Input
                        className="w-full"
                        type="text"
                        name="umur"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 justify-end items-end">
                  <div className="font-bold text-lg text-cust-orange-normal w-10/12">
                    Berat Badan
                  </div>
                  <div className="flex justify-end w-full">
                    <div className="w-10/12">
                      <Input
                        className="w-full"
                        type="text"
                        name="beratBadan"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 justify-end items-end">
                  <div className="font-bold text-lg text-cust-orange-normal w-10/12">
                    Tinggi Badan
                  </div>
                  <div className="flex justify-end w-full">
                    <div className="w-10/12">
                      <Input
                        className="w-full"
                        type="text"
                        name="username"
                        value=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full justify-end items-end gap-10 mt-10">
              <Button
                className={
                  "border-2 border-cust-orange-normal hover:border-transparent"
                }
                type={"button"}
                variation={"secondary-rectangle"}
                onClick={toggleUbahPopup}
              >
                Batal
              </Button>
              <Button
                type={"button"}
                variation={"primary-rectangle"}
                onClick={() => {
                  toggleUbahPopup();
                  setTimeout(() => {
                    toggleUbahSuccessPopup();
                  }, 500);
                }}
              >
                Simpan
              </Button>
            </div>
          </div>
        </div>
      )}
      {isUbahSuccessPopupVisible && (
        <Dialogue
          type={"success"}
          title={"Berhasil"}
          message={"Informasi pribadi baru kamu telah berhasil disimpan"}
          buttonLabel={"Kembali"}
          onClick={toggleUbahSuccessPopup}
        />
      )}
      {isPasswordPopupVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm">
          <div className="flex flex-col w-1/4 bg-white drop-shadow-2xl rounded-xl justify-center items-center p-8 gap-5">
            <div className="text-cust-orange-normal font-bold text-3xl">
              Ganti Password
            </div>
            <Input
              className={"relative font-normal"}
              type={showPassword ? "text" : "password"}
              name={"password"}
              placeholder={"Masukkan password sebelumnya"}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required={true}
            >
              <button
                className={
                  "absolute right-5 top-2 text-cust-orange-normal font-bold"
                }
                onClick={togglePasswordVisibility}
              >
                show
              </button>
            </Input>
            <Input
              className={"relative font-normal"}
              type={showPassword ? "text" : "password"}
              name={"password"}
              placeholder={"Masukkan password baru"}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required={true}
            >
              <button
                className={
                  "absolute right-5 top-2 text-cust-orange-normal font-bold"
                }
                onClick={togglePasswordVisibility}
              >
                show
              </button>
            </Input>
            <Input
              className={"relative font-normal"}
              type={showPassword ? "text" : "password"}
              name={"password"}
              placeholder={"Konfirmasi password kamu"}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required={true}
            >
              <button
                className={
                  "absolute right-5 top-2 text-cust-orange-normal font-bold"
                }
                onClick={togglePasswordVisibility}
              >
                show
              </button>
            </Input>
            <div className="flex flex-row gap-5 w-full justify-center items-center">
              <Button
                className={
                  "w-1/2 border-2 border-cust-orange-normal hover:border-transparent"
                }
                type={"button"}
                variation={"secondary-rectangle"}
                onClick={togglePasswordPopup}
              >
                Batal
              </Button>
              <Button
                className={"w-1/2"}
                type={"button"}
                variation={"primary-rectangle"}
                onClick={() => {
                  togglePasswordPopup();
                  setTimeout(() => {
                    togglePasswordSuccessPopup();
                  }, 500);
                }}
              >
                Simpan
              </Button>
            </div>
          </div>
        </div>
      )}
      {isPasswordSuccessPopupVisible && (
        <Dialogue
          type={"success"}
          title={"Berhasil"}
          message={
            <>
              Password baru kamu telah berhasil disimpan, silahkan{" "}
              <span className="font-bold text-cust-orange-normal">Masuk</span>{" "}
              kembali
            </>
          }
          buttonLabel={"Konfirmasi"}
          onClick={() => {
            togglePasswordSuccessPopup;
            handleLogout();
            // navigate("/login");
          }}
        />
      )}
    </div>
  );
};

export default RencanaMakan;
