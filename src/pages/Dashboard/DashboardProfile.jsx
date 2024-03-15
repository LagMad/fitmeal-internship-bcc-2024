import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SVGs from "../../components/shared/SVGs";
import Dialogue from "../../components/ui/Dialogue";
import PhotoProfileDummy from "../../assets/PhotoProfileDummy.png";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { editUserData, getUserData } from "../../api/services/profile";
import DashboardLayout from "../../components/layout/DashboardLayout";
import DashboardMenu from "../../components/shared/DashboardMenu";

const Dashboard = () => {
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
  const alamatOptions = [
    { value: "sigura-gura", label: "Sigura-gura" },
    { value: "sumbersari", label: "Sumbersari" },
    { value: "dewandaru", label: "Dewandaru" },
  ];
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    aktivitas: "",
    gender: "",
    umur: 0,
    alamat: "",
    beratBadan: 0,
    tinggiBadan: 0,
  });

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
      throw error;
    }
  };

  useEffect(() => {
    getUser();
  });

  // const { userName, umur, alamat, beratBadan, tinggiBadan } = data;

  // const [form, setForm] = useState({
  //   userName,
  //   umur,
  //   alamat,
  //   beratBadan,
  //   tinggiBadan,
  // });

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await editUserData(form);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log();
  });

  return (
    <div>
      <DashboardLayout>
        <div className="flex flex-col mx-32 gap-5 mb-10 z-0">
          <div className="ml-[88px] font-bold text-cust-orange-normal text-xl">
            Profil
          </div>
          <div className="flex flex-row gap-5">
            <DashboardMenu />
            <div className="flex flex-col w-full h-fit">
              <div className="flex w-full h-40 bg-ProfileHeader bg-top bg-no-repeat bg-cover" />
              <div className="flex flex-row w-full mt-3 px-20">
                <div className="flex flex-row w-1/2 gap-8">
                  <div className="relative">
                    <img
                      className="-mt-16"
                      src={PhotoProfileDummy}
                      alt="profile picture"
                    />
                    <div className="absolute right-1 bottom-2">
                      <SVGs.ChangePhoto />
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-1">
                    <div className="font-bold text-cust-orange-normal text-3xl">
                      Suryanto Bahari
                      {/* {form.userName} */}
                    </div>
                    <div>
                      suryanto1234@gmail.com
                      {/* {form.email} */}
                    </div>
                  </div>
                </div>
                <div className="flex w-1/2 justify-end items-center">
                  <button>
                    <SVGs.Share />
                  </button>
                </div>
              </div>
              <div className="flex flex-row w-full justify-between mt-16 mb-10">
                <div className="font-bold text-cust-orange-normal text-2xl">
                  Informasi Pribadi
                </div>
                <div className="flex text-cust-black-light-active justify-center items-center">
                  Terakhir diperbarui 12 Maret 2024
                </div>
              </div>
              <div className="flex flex-row w-full justify-between">
                <div className="flex flex-col w-1/2 justify-start items-start gap-10">
                  <div className="flex flex-col gap-5 justify-start items-start w-full">
                    <div className="font-bold text-lg text-cust-orange-normal w-10/12">
                      Username
                    </div>
                    <div className="flex justify-start w-full">
                      <div className="w-10/12">
                        <Input
                          className="w-full"
                          type="text"
                          name="userName"
                          value=""
                          readOnly={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 justify-start items-start w-full">
                    <div className="font-bold text-lg text-cust-orange-normal w-10/12">
                      Email
                    </div>
                    <div className="flex justify-start w-full">
                      <div className="w-10/12">
                        <Input
                          className="w-full"
                          type="text"
                          name="email"
                          value=""
                          readOnly={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 justify-start items-start w-full">
                    <div className="font-bold text-lg text-cust-orange-normal w-10/12">
                      Tempat Tinggal
                    </div>
                    <div className="flex justify-start w-full">
                      <div className="w-10/12">
                        <Input
                          className="w-full"
                          type="text"
                          name="alamat"
                          value=""
                          readOnly={true}
                        />
                      </div>
                    </div>
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
                          readOnly={true}
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
                          readOnly={true}
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
                          readOnly={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full justify-start items-start mt-12 gap-10">
                <Button
                  className={
                    "border-2 border-cust-orange-normal hover:border-transparent"
                  }
                  type="button"
                  variation={"secondary-rectangle"}
                  onClick={togglePasswordPopup}
                >
                  Ganti Password
                </Button>
                <Button
                  type="button"
                  variation={"primary-rectangle"}
                  onClick={toggleUbahPopup}
                >
                  Ubah
                </Button>
              </div>
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
                <div className="flex flex-col gap-5 justify-start items-start w-full">
                  <div className="font-bold text-lg text-cust-orange-normal w-10/12">
                    Username
                  </div>
                  <div className="flex justify-start w-full">
                    <div className="w-10/12">
                      <Input
                        className="w-full"
                        type="text"
                        name="userName"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 justify-start items-start w-full">
                  <div className="font-bold text-lg text-cust-orange-normal w-10/12">
                    Email
                  </div>
                  <div className="flex justify-start w-full">
                    <div className="w-10/12">
                      <Input
                        className="w-full"
                        type="text"
                        name="email"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 justify-start items-start w-full">
                  <div className="font-bold text-lg text-cust-orange-normal w-10/12">
                    Tempat Tinggal
                  </div>
                  <div className="flex justify-start w-full">
                    <div className="w-10/12">
                      <Input
                        className="w-10/12"
                        type="select"
                        name="alamat"
                        value={formData.alamat}
                        placeholder="Pilih daerah kamu"
                        options={alamatOptions}
                        onChange={(e) =>
                          setFormData({ ...formData, alamat: e.target.value })
                        }
                      />
                    </div>
                  </div>
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

export default Dashboard;
