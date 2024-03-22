import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SVGs from "../../components/shared/SVGs";
import Dialogue from "../../components/ui/Dialogue";
import PhotoProfileDummy from "../../assets/PhotoProfileDummy.png";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import {
  changePassword,
  editUserData,
  getUserData,
  postPhotoProfile,
} from "../../api/services/profile";
import DashboardLayout from "../../components/layout/DashboardLayout";
import DashboardMenu from "../../components/shared/DashboardMenu";

const Dashboard = () => {
  const navigate = useNavigate();

  const [isUploading, setIsUploading] = useState(false);
  const [isPasswordPopupVisible, setPasswordPopupVisible] = useState(false);
  const [isPasswordSuccessPopupVisible, setPasswordSuccessPopupVisible] =
    useState(false);
  const [isUbahPopupVisible, setUbahPopupVisible] = useState(false);
  const [isUbahStatusPopupVisible, setUbahStatusPopupVisible] = useState(false);
  const [changePhotoPopUp, setChangePhotoPopUp] = useState(false);
  const [changePhotoStatus, setChangePhotoStatus] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [userData, setUserData] = useState({
    userName: "",
    umur: 0,
    alamat: "",
    beratBadan: 0,
    tinggiBadan: 0,
    password: "",
    updatedAt: "",
    photoLink: "",
  });
  const alamatOptions = [
    { value: "Sigura-gura", label: "Sigura-gura" },
    { value: "Sumbersari", label: "Sumbersari" },
    { value: "Dewandaru", label: "Dewandaru" },
  ];
  const [formData, setFormData] = useState({
    userName: "",
    umur: 0,
    alamat: "",
    beratBadan: 0,
    tinggiBadan: 0,
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const togglePasswordPopup = () => {
    setPasswordPopupVisible(!isPasswordPopupVisible);
  };

  const togglePasswordVisibility = (inputName) => {
    switch (inputName) {
      case "oldPassword":
        setShowOldPassword(!showOldPassword);
        break;
      case "newPassword":
        setShowNewPassword(!showNewPassword);
        break;
      case "confirmPassword":
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
  };

  const togglePasswordSuccessPopup = () => {
    setPasswordSuccessPopupVisible(!isPasswordSuccessPopupVisible);
  };

  const toggleUbahPopup = () => {
    setUbahPopupVisible(!isUbahPopupVisible);
  };

  const toggleUbahStatusPopup = () => {
    setUbahStatusPopupVisible(!isUbahStatusPopupVisible);
  };

  const toggleChangePhoto = () => {
    setChangePhotoPopUp(!changePhotoPopUp);
  };

  const toggleChangePhotoStatus = () => {
    setChangePhotoStatus(!changePhotoStatus);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("userId");
    navigate("/");
  };

  const getUser = async () => {
    try {
      const response = await getUserData();
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    setFormData({
      userName: userData.userName,
      umur: userData.umur,
      alamat: userData.alamat,
      beratBadan: userData.beratBadan,
      tinggiBadan: userData.tinggiBadan,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  }, [userData]);

  const handleAction = async (actionType) => {
    try {
      if (actionType === "edit") {
        console.log("Performing user data edit...");
        const editedUserData = {
          ...formData,
          umur: parseInt(formData.umur),
          beratBadan: parseInt(formData.beratBadan),
          tinggiBadan: parseInt(formData.tinggiBadan),
        };
        const response = await editUserData(editedUserData);
        toggleUbahPopup();
        setTimeout(() => {
          toggleUbahStatusPopup();
        }, 500);
      } else if (actionType === "passwordChange") {
        console.log("Performing password change...");
        const response = await changePassword(
          formData.oldPassword,
          formData.newPassword,
          formData.confirmPassword
        );
        setTimeout(() => {
          togglePasswordSuccessPopup();
        }, 1000);
      } else if (actionType === "photoUpload") {
        console.log("Uploading photo...");
        setIsUploading(true);
        const response = await postPhotoProfile(selectedPhoto);
        setChangePhotoPopUp(!changePhotoPopUp);
        console.log("Photo changed successfully");
      } else {
        console.log("Invalid action type.");
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { status } = error.response;
        if (actionType === "edit") {
          if (status === 400) {
            setErrorMessage(
              "Terdapat kesalahan pada input. Cek dan coba lagi!"
            );
          } else {
            setErrorMessage("An error occurred. Please try again.");
          }
        } else if (actionType == "passwordChange") {
          if (status === 500) {
            setErrorMessage("Password lama salah. Silakan coba lagi!");
          } else {
            setErrorMessage("An error occurred. Please try again.");
          }
        } else if (actionType === "photoUpload") {
          setErrorMessage(
            "Error uploading photo. Please try again or contact developers!"
          );
        } else {
          setErrorMessage("Network error. Please try again.");
        }
      } else {
        console.log("Invalid action type.");
      }
    } finally {
      setIsUploading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [errorMessage]);

  const formatDate = (dateString) => {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", options);
  };

  return (
    <div>
      <DashboardLayout>
        <div className="flex flex-col mx-32 gap-5 mb-10 z-0">
          <div className="ml-[88px] font-normal text-cust-orange-normal text-xl">
            Profil
          </div>
          <div className="flex flex-row gap-5">
            <DashboardMenu />
            <div className="flex flex-col w-full h-fit">
              <div className="flex w-full h-40 bg-ProfileHeader bg-top bg-no-repeat bg-cover" />
              <div className="flex flex-row w-full -mt-10 px-20 gap-8 justify-start items-center">
                <div className="flex w-fit relative">
                  <div className="flex w-40 h-40 bg-cust-orange-normal rounded-full justify-center items-center overflow-hidden">
                    <img
                      className="max-w-40 min-h-40 rounded-full"
                      src={userData.photoLink}
                      alt="profile picture"
                    />
                  </div>
                  <button
                    className="absolute right-1 bottom-2"
                    onClick={() => {
                      toggleChangePhoto();
                    }}
                  >
                    <SVGs.ChangePhoto />
                  </button>
                </div>
                <div className="flex flex-col w-3/4 gap-1">
                  <div className="font-bold text-cust-orange-normal text-3xl">
                    {userData.userName}
                  </div>
                  <div>{userData.email}</div>
                </div>
              </div>
              <div className="flex flex-row w-full justify-between mt-16 mb-10">
                <div className="font-bold text-cust-orange-normal text-2xl">
                  Informasi Pribadi
                </div>
                <div className="flex text-cust-black-light-active justify-center items-center">
                  Terakhir diperbarui {formatDate(userData.updatedAt)}
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
                          value={userData.userName}
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
                          value={userData.email}
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
                          value={userData.alamat}
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
                          value={userData.umur}
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
                          value={userData.beratBadan}
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
                          name="tinggiBadan"
                          value={userData.tinggiBadan}
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
                        value={formData.userName}
                        onChange={(e) =>
                          setFormData({ ...formData, userName: e.target.value })
                        }
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
                        value={formData.umur}
                        onChange={(e) =>
                          setFormData({ ...formData, umur: e.target.value })
                        }
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
                        value={formData.beratBadan}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            beratBadan: e.target.value,
                          })
                        }
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
                        name="tinggiBadan"
                        value={formData.tinggiBadan}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            tinggiBadan: e.target.value,
                          })
                        }
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
                  setTimeout(() => {
                    handleAction("edit");
                  }, 500);
                }}
              >
                Simpan
              </Button>
            </div>
            <div className="text-red-500 text-sm font-Poppins font-bold text-center">
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          </div>
        </div>
      )}
      {isUbahStatusPopupVisible && (
        <Dialogue
          type={"success"}
          title={"Berhasil"}
          message={"Informasi pribadi baru kamu telah berhasil disimpan"}
          buttonLabel={"Kembali"}
          onClick={() => {
            toggleUbahStatusPopup;
            window.location.reload();
          }}
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
              type={showOldPassword ? "text" : "password"}
              name={"oldPassword"}
              placeholder={"Masukkan password sebelumnya"}
              onChange={(e) =>
                setFormData({ ...formData, oldPassword: e.target.value })
              }
              required={true}
            >
              <button
                className={
                  "absolute right-5 top-2 text-cust-orange-normal font-bold"
                }
                onClick={() => togglePasswordVisibility("oldPassword")}
              >
                {showOldPassword ? "hide" : "show"}
              </button>
            </Input>
            <Input
              className={"relative font-normal"}
              type={showNewPassword ? "text" : "password"}
              name={"newPassword"}
              placeholder={"Masukkan password baru"}
              onChange={(e) =>
                setFormData({ ...formData, newPassword: e.target.value })
              }
              required={true}
            >
              <button
                className={
                  "absolute right-5 top-2 text-cust-orange-normal font-bold"
                }
                onClick={() => togglePasswordVisibility("newPassword")}
              >
                {showNewPassword ? "hide" : "show"}
              </button>
            </Input>
            <Input
              className={"relative font-normal"}
              type={showConfirmPassword ? "text" : "password"}
              name={"confirmPassword"}
              placeholder={"Konfirmasi password kamu"}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required={true}
            >
              <button
                className={
                  "absolute right-5 top-2 text-cust-orange-normal font-bold"
                }
                onClick={() => togglePasswordVisibility("confirmPassword")}
              >
                {showConfirmPassword ? "hide" : "show"}
              </button>
            </Input>
            {formData.newPassword !== formData.confirmPassword && (
              <div className="text-red-500 text-sm font-Poppins font-bold">
                Password tidak cocok.
              </div>
            )}
            <div className="text-red-500 text-sm font-Poppins font-bold text-center">
              {errorMessage && <p>{errorMessage}</p>}
            </div>
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
                  if (formData.newPassword === formData.confirmPassword) {
                    handleAction("passwordChange");
                  }
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
          }}
        />
      )}

      {changePhotoPopUp && (
        <div className="fixed font-Poppins top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm">
          <div className="flex flex-col w-1/3 bg-white drop-shadow-2xl rounded-xl justify-center items-center p-8 gap-4">
            <div className="font-bold text-cust-orange-normal text-3xl">
              Ganti Foto Profil
            </div>
            <div>Pilih foto yang ingin kamu gunakan</div>
            <div className="flex justify-center items-center border-2 border-cust-orange-normal py-3 px-5 rounded-xl">
              <input
                className="w-full text-center"
                type="file"
                accept="image/*"
                onChange={(e) => setSelectedPhoto(e.target.files[0])}
              />
            </div>
            {errorMessage && (
              <div className="text-red-500 text-sm font-Poppins font-bold">
                {errorMessage}
              </div>
            )}
            <div className="flex flex-row justify-center items-center w-1/2 gap-3">
              <Button
                className={"w-1/2"}
                type={"button"}
                variation={"secondary-rectangle"}
                onClick={() => toggleChangePhoto()}
              >
                Kembali
              </Button>
              <Button
                className={"w-1/2"}
                type={"submit"}
                variation={"primary-rectangle"}
                onClick={() => handleAction("photoUpload")}
              >
                Ubah
              </Button>
            </div>
          </div>
        </div>
      )}

      {changePhotoStatus && (
        <Dialogue
          type={"success"}
          title={"Berhasil"}
          message={"Foto profil berhasil diubah"}
          buttonLabel={"Kembali"}
          onClick={() => window.location.reload()}
        />
      )}
    </div>
  );
};

export default Dashboard;
