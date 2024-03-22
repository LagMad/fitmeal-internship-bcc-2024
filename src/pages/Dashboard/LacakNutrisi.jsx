import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SVGs from "../../components/shared/SVGs";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { getUserData } from "../../api/services/profile";
import {
  getMealData,
  getDailyNutritionData,
  tambahNutrisi,
} from "../../api/services/meal";
import DashboardLayout from "../../components/layout/DashboardLayout";
import NutrisiCard from "../../components/ui/NutrisiCard";
import DashboardMenu from "../../components/shared/DashboardMenu";
import SearchBar from "../../components/ui/SearchBar";
import Salad from "../../assets/Salad.png";
import LacakNutrisiResult from "../../components/shared/LacakNutrisiResult";
import Dialogue from "../../components/ui/Dialogue";
import Foods from "../../assets/Foods1.png";
import { payPremium } from "../../api/services/payment";
import DagingPict from "../../assets/DagingPict.png";
import NasiPict from "../../assets/NasiPict.png";
import SayurPict from "../../assets/SayurPict.png";
import FoodsOnTop from "../../assets/Foods2.png";

const LacakNutrisi = () => {
  const navigate = useNavigate();
  const [isTambahNutrisiPopUp, setTambahNutrisiPopUpVisible] = useState(false);
  const [isTambahNutrisiOptionPopUp, setTambahNutrisiOptionPopUp] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    kalori: 0,
    lemak: 0,
    protein: 0,
    karbohidrat: 0,
  });
  const [mealFormData, setMealFormData] = useState({
    kalori: 0,
    lemak: 0,
    protein: 0,
    karbohidrat: 0,
  });

  const [paymentAmount, setPaymentAmount] = useState({
    amount: 20000,
  });

  const [userData, setUserData] = useState([]);
  const [mealData, setMealData] = useState([]);
  const [dailyNutritionData, setDailyNutritionData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMealData, setFilteredMealData] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isLanjutClicked, setIsLanjutClicked] = useState(false);
  const [isStatusDialogue, setIsStatusDialogue] = useState(false);
  const [isPremiumPopUp, setIsPremiumPopUp] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [timeDataPagi, setTimeDataPagi] = useState({
    time: "",
  });
  const [timeDataSiang, setTimeDataSiang] = useState({
    time: "",
  });
  const [timeDataMalam, setTimeDataMalam] = useState({
    time: "",
  });

  const getUser = async () => {
    try {
      const response = await getUserData();
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMeal = async () => {
    try {
      const response = await getMealData();
      setMealData(response.data);
      setFilteredMealData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDailyNutrition = async () => {
    try {
      const response = await getDailyNutritionData();
      setDailyNutritionData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTambahNutrisi = async () => {
    try {
      console.log("Performing tambah nutrisi...");
      const response = await tambahNutrisi(mealFormData);
      toggleStatusDialoguePopUp();
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayPremium = async () => {
    try {
      console.log("Performing premium...");
      const response = await payPremium(paymentAmount);
      console.log(response.data.snapUrl);
      console.log("handlePayPremium Success");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    getMeal();
    getDailyNutrition();
  }, []);

  useEffect(() => {
    setFormData({
      kalori: userData.kalori,
      lemak: userData.lemak,
      protein: userData.protein,
      karbohidrat: userData.karbohidrat,
    });
  }, [userData]);

  useEffect(() => {
    setMealFormData({
      kalori: selectedMeal?.kalori || 0,
      lemak: selectedMeal?.lemak || 0,
      protein: selectedMeal?.protein || 0,
      karbohidrat: selectedMeal?.karbohidrat || 0,
    });
  }, [selectedMeal]);

  const toggleTambahNutrisiPopUp = () => {
    setTambahNutrisiPopUpVisible(!isTambahNutrisiPopUp);
  };

  const toggleTambahNutrisiOptionPopUp = () => {
    setTambahNutrisiOptionPopUp(!isTambahNutrisiOptionPopUp);
  };

  const toggleStatusDialoguePopUp = () => {
    setTambahNutrisiPopUpVisible(!isTambahNutrisiPopUp);
    setIsStatusDialogue(!isStatusDialogue);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    const filteredData = mealData.filter((meal) =>
      meal.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMealData(filteredData);
  };

  const handleSelectMeal = (meal) => {
    setSelectedMeal(meal);
  };

  const handleLanjutClick = () => {
    console.log("Selected Meal:", selectedMeal);
    console.log("Meal Form Data:", mealFormData);
    setIsLanjutClicked(true);
  };

  const timeOptionsPagi = [
    { value: "07.00", label: "07.00" },
    { value: "07.30", label: "07.30" },
    { value: "08.00", label: "08.00" },
  ];

  const timeOptionsSiang = [
    { value: "11.00", label: "11.00" },
    { value: "11.30", label: "11.30" },
    { value: "12.00", label: "12.00" },
  ];

  const timeOptionsMalam = [
    { value: "18.00", label: "18.00" },
    { value: "18.30", label: "18.30" },
    { value: "19.00", label: "19.00" },
  ];

  return (
    <div>
      <DashboardLayout>
        <div className="flex flex-col h-full mx-32 gap-5 mb-10 z-0 font-Poppins">
          <div className="ml-[88px] font-normal text-cust-orange-normal text-xl">
            Lacak Nutrisi
          </div>
          <div className="flex flex-row h-full gap-5">
            <DashboardMenu />
            <div className="flex flex-row w-full h-full gap-8 justify-center items-start">
              <div className="flex flex-col w-1/4 h-full gap-10">
                <div className="flex flex-col w-full h-1/2 justify-center bg-white drop-shadow-xl rounded-lg px-8 py-8 gap-8">
                  <div className="flex flex-row justify-between items-center">
                    <SVGs.Kalori />
                    <div className="font-normal text-cust-orange-normal text-6xl">
                      Kalori
                    </div>
                  </div>
                  <div className="flex font-bold text-cust-orange-normal text-5xl justify-center items-center text-center">
                    {Math.round(userData.kalori)} KKal
                  </div>
                  {Math.round(dailyNutritionData.kalori) >=
                  Math.round(userData.kalori) ? (
                    <div className="flex flex-row justify-start items-center gap-2">
                      <SVGs.CheckCircle />
                      <div className="font-bold text-xs text-cust-green-normal">
                        Completed
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-full font-normal text-cust-orange-normal text-2xl">
                      {Math.round(dailyNutritionData.kalori)}/
                      {Math.round(userData.kalori)}
                    </div>
                  )}

                  <Button
                    type={"button"}
                    variation={"primary-rectangle"}
                    onClick={() => toggleTambahNutrisiOptionPopUp()}
                  >
                    Tambah
                  </Button>
                </div>
                <div className="flex flex-col w-full h-1/2 justify-center items-center bg-white border-2 border-cust-black-light rounded-lg p-3 gap-2">
                  <div className="flex flex-row w-full justify-center items-center gap-3">
                    <SVGs.Lock
                      fillColor={"#FA6815"}
                      width={"20"}
                      height={"20"}
                    />
                    <div className="text-cust-orange-normal text-sm font-normal">
                      Konten Premium
                    </div>
                  </div>
                  <div className=" font-RammettoOne text-2xl text-cust-orange-normal">
                    FitMeal
                  </div>
                  <img className="" src={Foods} alt="foods" />
                  <div className="font-bold text-cust-orange-normal">
                    Paket Makan Pribadi
                  </div>
                  <div className="text-[13px] text-center">
                    Buat paket makan pribadi sesuai keinginan untuk permudah
                    kamu Lacak Nutrisi
                  </div>
                  <Button
                    className={"w-full"}
                    type={"button"}
                    variation={"primary-rectangle"}
                  >
                    Buat
                  </Button>
                </div>
              </div>
              <div className="flex flex-col w-3/4 gap-12">
                <div className="flex flex-row w-full gap-12">
                  <NutrisiCard
                    icon={"lemak"}
                    title={"Lemak"}
                    goals={Math.round(userData.lemak)}
                    current={Math.round(dailyNutritionData.lemak)}
                  />
                  <NutrisiCard
                    icon={"karbohidrat"}
                    title={"Karbohidrat"}
                    goals={Math.round(userData.karbohidrat)}
                    current={Math.round(dailyNutritionData.karbohidrat)}
                  />
                  <NutrisiCard
                    icon={"protein"}
                    title={"Protein"}
                    goals={Math.round(userData.protein)}
                    current={Math.round(dailyNutritionData.protein)}
                  />
                </div>
                <div className="flex relative w-full h-full">
                  <div className="flex absolute w-[calc(100%+50px)] h-[calc(100%+50px)] bg-opacity-20 backdrop-blur-md -top-[25px] -left-[25px] justify-center items-center">
                    <div
                      className="flex flex-col bg-white rounded-lg py-3 px-7 justify-center items-center gap-5 drop-shadow-2xl"
                      onClick={() => setIsPremiumPopUp(true)}
                    >
                      <div className="flex flex-row gap-5 justify-center items-center">
                        <SVGs.Lock fillColor={"#FA6815"} width={"30"} />
                        <div className="font-bold text-cust-orange-normal text-3xl">
                          Konten Premium
                        </div>
                      </div>
                      <Button
                        className={"w-full text-xl"}
                        type={"button"}
                        variation={"primary-rectangle"}
                      >
                        Daftar Premium
                      </Button>
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
                <div className="flex flex-col">
                  <div className="flex flex-col w-full h-fit p-5 justify-center items-center bg-cust-orange-normal rounded-t-xl gap-4">
                    <div className="flex flex-row w-full justify-start items-center gap-3">
                      <SVGs.Lock
                        fillColor={"white"}
                        width={"25"}
                        height={"25"}
                      />
                      <div className="text-white text-lg font-normal">
                        Konten Premium
                      </div>
                    </div>
                    <div className="flex flex-row w-full justify-between items-center">
                      <div className="flex flex-row w-1/2 justify-start items-center gap-5">
                        <SVGs.TimeFilled width={"32"} height={"32"} />
                        <div className="text-white font-bold text-2xl">
                          Atur Pengingat Makan
                        </div>
                      </div>
                      <div className="flex w-1/2 justify-end items-center">
                        <SVGs.RightArrow
                          fillColor={"white"}
                          width={"20"}
                          height={"20"}
                        />
                      </div>
                    </div>
                    <div className="flex text-white text-left self-start">
                      Pengingat makan sesuai dengan jadwal yang kamu tentukan
                    </div>
                  </div>
                  <div className="flex flex-row w-full h-fit justify-center items-center p-5 gap-5 bg-white rounded-xl border-l-[1.5px] border-r-[1.5px] border-b-[1.5px]">
                    <div className="flex flex-col w-1/3 gap-3">
                      <div className="text-cust-orange-normal text-2xl font-bold">
                        Makan Pagi
                      </div>
                      <Input
                        type={"select"}
                        name={"time"}
                        placeholder={"Pilih jam"}
                        options={timeOptionsPagi}
                        onChange={(e) =>
                          setTimeDataPagi({
                            ...timeDataPagi,
                            time: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex flex-col w-1/3 gap-3">
                      <div className="text-cust-orange-normal text-2xl font-bold">
                        Makan Siang
                      </div>
                      <Input
                        type={"select"}
                        name={"time"}
                        placeholder={"Pilih jam"}
                        options={timeOptionsSiang}
                        onChange={(e) =>
                          setTimeDataSiang({
                            ...timeDataSiang,
                            time: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex flex-col w-1/3 gap-3">
                      <div className="text-cust-orange-normal text-2xl font-bold">
                        Makan Malam
                      </div>
                      <Input
                        type={"select"}
                        name={"time"}
                        placeholder={"Pilih jam"}
                        options={timeOptionsMalam}
                        onChange={(e) =>
                          setTimeDataMalam({
                            ...timeDataMalam,
                            time: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
      {isTambahNutrisiOptionPopUp && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm font-Poppins">
          <div className="flex flex-col w-[675px] bg-white drop-shadow-2xl rounded-xl justify-center items-center p-8 gap-3">
            <div className="font-bold text-3xl text-cust-orange-normal self-start">
              Tambah Nutrisi
            </div>
            <div className="flex flex-row text-left justify-start self-start">
              Tambah capaian nutrisi harian kamu sesuai dengan makananmu
            </div>
            <div className="flex flex-row justify-center items-center w-full gap-5">
              <button
                className="flex flex-col justify-center items-center gap-5 w-1/2 h-72 border-[1.5px] border-cust-black-light p-5 rounded-xl"
                onClick={() => {
                  toggleTambahNutrisiOptionPopUp();
                  toggleTambahNutrisiPopUp();
                }}
              >
                <div className="font-semibold text-xl text-cust-orange-normal">
                  Tambah Makanan
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                  <img src={DagingPict} />
                  <img src={NasiPict} />
                  <img src={SayurPict} />
                </div>
                <div className="text-center">
                  Tambah makanan secara manual untuk Lacak Nutrismu
                </div>
              </button>
              <button className="flex flex-col justify-center items-center text-center gap-5 w-1/2 h-72 bg-cust-orange-normal rounded-xl p-5">
                <div className="flex flex-row w-full justify-center items-center gap-3">
                  <SVGs.Lock fillColor={"white"} width={"20"} height={"20"} />
                  <div className="text-white text-sm font-normal">
                    Konten Premium
                  </div>
                </div>
                <div className="font-semibold text-white text-xl">
                  Tambah Paket Makanan Pribadi
                </div>
                <img src={FoodsOnTop} />
                <div className="text-white">
                  Tambahkan paket pribadimu untuk Lacak Nutrisi secara otomatis
                </div>
              </button>
            </div>
            <Button
              className={"w-full"}
              type={"button"}
              variation={"secondary-rectangle"}
              onClick={() => toggleTambahNutrisiOptionPopUp()}
            >
              Batal
            </Button>
          </div>
        </div>
      )}
      {isTambahNutrisiPopUp && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm font-Poppins">
          <div className="flex flex-col w-1/4 bg-white drop-shadow-2xl rounded-xl justify-center items-center p-8 gap-8">
            <div className="text-cust-orange-normal font-bold text-3xl text-left justify-end w-full">
              Tambah Nutrisi
            </div>
            <div className="font-Poppins text-black">
              Tambah capaian nutrisi harian kamu sesuai dengan makananmu
            </div>
            <SearchBar
              className={"w-full rounded-xl"}
              placeholder={"Cari makananmu"}
              fillColor={"#B0B0B0"}
              onSearch={handleSearchQueryChange}
            />
            {!isLanjutClicked && (
              <>
                <div className="flex flex-col gap-3 w-full justify-start items-start">
                  <div className="text-cust-black-light-active">
                    Pilih makanan
                  </div>
                  <div className="flex flex-col gap-5 w-full max-h-44 overflow-y-scroll">
                    {filteredMealData.map((meal, index) => (
                      <LacakNutrisiResult
                        key={index}
                        data={meal}
                        selectedMeal={selectedMeal}
                        onSelectMeal={handleSelectMeal}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col w-full justify-center items-center gap-5">
                  <Button
                    className={"w-full"}
                    type={"button"}
                    variation={"primary-rectangle"}
                    onClick={handleLanjutClick}
                    disabled={!selectedMeal} // Disable Lanjut button if no meal is selected
                  >
                    Lanjut
                  </Button>
                  <Button
                    className={
                      "border-2 border-cust-orange-normal hover:border-transparent w-full"
                    }
                    type={"button"}
                    variation={"secondary-rectangle"}
                    onClick={() => {
                      toggleTambahNutrisiPopUp();
                      setFilteredMealData(mealData);
                    }}
                  >
                    Batal
                  </Button>
                </div>
              </>
            )}
            {isLanjutClicked && (
              <>
                <div className="flex flex-col w-full justify-center items-center gap-3">
                  <div className="flex relative w-full bg-red-400 h-40 rounded-xl overflow-hidden">
                    <img
                      className="absolute w-[50%] left-[25%]"
                      src={Salad}
                      alt="salad"
                    />
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-cust-orange-normal font-bold my-5">
                    <div className="text-3xl">{selectedMeal.name}</div>
                    <div className="">{selectedMeal.kalori} Kkal</div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-1/2 justify-start items-center gap-3">
                      <SVGs.Protein />
                      <div className="text-lg">Protein</div>
                    </div>
                    <div className="flex text-sm w-1/2 justify-end items-end">
                      {selectedMeal.protein} gram
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-1/2 justify-start items-center gap-3">
                      <SVGs.Karbohidrat />
                      <div className="text-lg">Karbohidrat</div>
                    </div>
                    <div className="flex text-sm w-1/2 justify-end items-end">
                      {selectedMeal.karbohidrat} gram
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-1/2 justify-start items-center gap-3">
                      <SVGs.Lemak />
                      <div className="text-lg">Lemak</div>
                    </div>
                    <div className="flex text-sm w-1/2 justify-end items-end">
                      {selectedMeal.lemak} gram
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full justify-center items-center gap-5">
                  <Button
                    className={
                      "border-2 border-cust-orange-normal hover:border-transparent w-full"
                    }
                    type={"button"}
                    variation={"secondary-rectangle"}
                    onClick={() => {
                      toggleTambahNutrisiPopUp();
                      setIsLanjutClicked(false);
                      setFilteredMealData(mealData);
                    }}
                  >
                    Batal
                  </Button>
                  <Button
                    className={"w-full"}
                    type={"button"}
                    variation={"primary-rectangle"}
                    onClick={() => {
                      handleTambahNutrisi();
                    }}
                    disabled={!selectedMeal}
                  >
                    Tambah
                  </Button>
                </div>
              </>
            )}
            <div className="text-red-500 text-sm font-Poppins font-bold text-center">
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          </div>
        </div>
      )}
      {isStatusDialogue && (
        <Dialogue
          type={"success"}
          title={"Berhasil"}
          message={"Makanan kamu berhasil ditambahkan ke dalam nutrisi harian"}
          onClick={() => window.location.reload()}
          buttonLabel={"Lihat Nutrisi"}
        />
      )}
      {isPremiumPopUp && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm font-Poppins">
          <div className="flex relative flex-row w-2/4 bg-white drop-shadow-2xl rounded-2xl justify-center items-center overflow-hidden">
            <button
              className="absolute right-10 top-6"
              onClick={() => setIsPremiumPopUp(false)}
            >
              <SVGs.Cross />
            </button>
            <div className="flex flex-col w-1/2 bg-white justify-start items-center py- px-10 gap-8">
              <div className="flex flex-row w-full justify-start items-center gap-5">
                <SVGs.Premium />
                <div className="flex flex-col justify-start items-start">
                  <div className="text-lg text-cust-black-light-active">
                    Pribadi
                  </div>
                  <div className="text-3xl text-cust-green-normal font-bold">
                    Premium
                  </div>
                </div>
              </div>
              <div className="text-2xl">
                Beragam keuntungan untuk mendukung hidup sehatmu
              </div>
              <div className="flex flex-row justify-center items-center">
                <span className="text-5xl text-cust-orange-normal font-bold">
                  Rp 20.000
                </span>{" "}
                <span className="text-2xl text-cust-black-light-active">
                  /bulan
                </span>
              </div>
              <Button
                className={"w-full"}
                type={"button"}
                variation={"primary-rectangle"}
                onClick={() => handlePayPremium()}
              >
                Mulai Premium
              </Button>
            </div>
            <div
              className="flex flex-col w-1/2 bg-cust-green-light justify-start items-start py-28 px-10 gap-2"
              style={{ height: "100%" }}
            >
              <div className="font-bold text-cust-orange-normal text-xl">
                Keuntungan untukmu
              </div>
              <div className="flex flex-row w-full justify-start items-center gap-3 h-10">
                <SVGs.CheckCircle />
                Nutrisi lebih beragam
              </div>
              <div className="flex flex-row w-full justify-start items-center gap-3 h-10">
                <SVGs.CheckCircle className={"w-max"} />
                Buat paket makanan sesuai keinginan
              </div>
              <div className="flex flex-row w-full justify-start items-center gap-3 h-10">
                <SVGs.CheckCircle />
                Pengingat makan
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LacakNutrisi;
