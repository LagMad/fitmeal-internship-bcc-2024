import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FooterALT from "../../components/shared/FooterALT";
import PhotoProfile from "../../assets/PhotoProfile.png";
import SVGs from "../../components/shared/SVGs";
import SearchBar from "../../components/ui/SearchBar";
import Dialogue from "../../components/ui/Dialogue";
import PhotoProfileDummy from "../../assets/PhotoProfileDummy.png";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { getUserData } from "../../api/services/profile";
import DashboardLayout from "../../components/layout/DashboardLayout";
import NutrisiCard from "../../components/ui/NutrisiCard";

const LacakNutrisi = ({ data = {} }) => {
  const navigate = useNavigate();
  const { userName, email, alamat, umur, beratBadan, tinggiBadan } = data;

  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);
  const [isPasswordPopupVisible, setPasswordPopupVisible] = useState(false);
  const [isPasswordSuccessPopupVisible, setPasswordSuccessPopupVisible] =
    useState(false);
  const [isUbahPopupVisible, setUbahPopupVisible] = useState(false);
  const [isUbahSuccessPopupVisible, setUbahSuccessPopupVisible] =
    useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    userName,
    email,
    alamat,
    umur,
    beratBadan,
    tinggiBadan,
  });
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
    // e.preventDefault();
    window.localStorage.removeItem("token");
    // setTimeout(() => {
    navigate("/");
    // }, 1000);
  };

  // const handleEdit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await editUserData(form);

  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 1000);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getUserDatas = async () => {
    try {
      const response = await getUserData();
      const loggedInUser = response.data.find((user) => user.email === email); // Assuming email is the logged-in user's email
      if (loggedInUser) {
        setForm({
          userName: loggedInUser.userName,
          email: loggedInUser.email,
          alamat: loggedInUser.alamat,
          umur: loggedInUser.umur,
          beratBadan: loggedInUser.beratBadan,
          tinggiBadan: loggedInUser.tinggiBadan,
        });
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDatas();
  }, []);

  return (
    <div>
      <DashboardLayout>
        <div className="flex flex-col mx-32 gap-5 mb-10 z-0">
          <div className="ml-[88px] font-bold text-cust-orange-normal text-xl">
            Lacak Nutrisi
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col bg-white drop-shadow-xl h-fit rounded-lg px-5 py-7 gap-10">
              <button>
                <SVGs.Menu />
              </button>
              <button>
                <SVGs.RencanaMakan />
              </button>
              <button>
                <SVGs.ProfileDashboard />
              </button>
            </div>
            <div className="flex flex-row w-full h-fit gap-8 justify-center items-start">
              <div className="flex flex-col w-1/4 bg-white drop-shadow-xl rounded-lg h-fit px-8 py-8 gap-8">
                <div className="flex flex-row justify-between items-center">
                  <SVGs.Kalori />
                  <div className="font-bold text-cust-orange-normal text-6xl">
                    Kalori
                  </div>
                </div>
                <div className="flex font-normal text-cust-orange-normal text-5xl justify-center items-center">
                  2200 KKal
                </div>
                <div className="flex w-fullfont-normal text-cust-orange-normal text-2xl">
                  0/2200
                </div>

                <Button type={"button"} variation={"primary-rectangle"}>
                  Tambah
                </Button>
              </div>
              <div className="flex flex-col w-3/4 gap-12">
                <div className="flex flex-row w-full gap-12">
                  <NutrisiCard
                    icon={"lemak"}
                    title={"Lemak"}
                    goals={400}
                    current={0}
                  />
                  <NutrisiCard
                    icon={"karbohidrat"}
                    title={"Karbohidrat"}
                    goals={325}
                    current={0}
                  />
                  <NutrisiCard
                    icon={"protein"}
                    title={"Protein"}
                    goals={48}
                    current={0}
                  />
                </div>
                <div className="flex relative w-full h-full">
                  <div className="flex absolute w-[calc(100%+50px)] h-[calc(100%+50px)] bg-opacity-20 backdrop-blur-md -top-[25px] -left-[25px] justify-center items-center">
                    <div className="flex flex-row bg-white rounded-lg py-2 px-7 justify-center items-center gap-5 drop-shadow-2xl">
                      <SVGs.Lock/>
                      <div className="font-bold text-cust-orange-normal text-3xl">
                        Konten Premium
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 w-full gap-12">
                    <NutrisiCard
                      icon={"protein"}
                      title={"Protein"}
                      goals={48}
                      current={0}
                    />
                    <NutrisiCard
                      icon={"protein"}
                      title={"Protein"}
                      goals={48}
                      current={0}
                    />
                    <NutrisiCard
                      icon={"protein"}
                      title={"Protein"}
                      goals={48}
                      current={0}
                    />
                    <NutrisiCard
                      icon={"protein"}
                      title={"Protein"}
                      goals={48}
                      current={0}
                    />
                    <NutrisiCard
                      icon={"protein"}
                      title={"Protein"}
                      goals={48}
                      current={0}
                    />
                    <NutrisiCard
                      icon={"protein"}
                      title={"Protein"}
                      goals={48}
                      current={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default LacakNutrisi;
