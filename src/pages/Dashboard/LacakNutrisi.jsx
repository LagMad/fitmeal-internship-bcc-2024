import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SVGs from "../../components/shared/SVGs";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { getUserData } from "../../api/services/profile";
import { getMealData } from "../../api/services/meal";
import DashboardLayout from "../../components/layout/DashboardLayout";
import NutrisiCard from "../../components/ui/NutrisiCard";
import DashboardMenu from "../../components/shared/DashboardMenu";
import SearchBar from "../../components/ui/SearchBar";
import Salad from "../../assets/Salad.png";
import LacakNutrisiResult from "../../components/shared/LacakNutrisiResult";
import Dialogue from "../../components/ui/Dialogue";

const LacakNutrisi = () => {
  const navigate = useNavigate();
  const [isTambahNutrisiPopUp, setTambahNutrisiPopUpVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    kalori: 0,
    lemak: 0,
    protein: 0,
    karbohidrat: 0,
  });
  const [mealFormData, setMealFormData] = useState({
    name: "",
    kalori: 0,
    lemak: 0,
    protein: 0,
    karbohidrat: 0,
  });

  const [userData, setUserData] = useState([]);
  const [mealData, setMealData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMealData, setFilteredMealData] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isLanjutClicked, setIsLanjutClicked] = useState(false);
  const [isStatusDialogue, setIsStatusDialogue] = useState(false);
  const [isPremiumPopUp, setIsPremiumPopUp] = useState(false);

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
      setFilteredMealData(response.data); // Set filtered meal data initially
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    getMeal();
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
      name: selectedMeal?.name || "", // Update mealFormData when selectedMeal changes
      kalori: selectedMeal?.kalori || 0,
      lemak: selectedMeal?.lemak || 0,
      protein: selectedMeal?.protein || 0,
      karbohidrat: selectedMeal?.karbohidrat || 0,
    });
  }, [selectedMeal]);

  const toggleTambahNutrisiPopUp = () => {
    setTambahNutrisiPopUpVisible(!isTambahNutrisiPopUp);
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
    // console.log("Selected Meal:", selectedMeal);
    // console.log("Meal Form Data:", mealFormData);
    setIsLanjutClicked(true);
  };

  return (
    <div>
      <DashboardLayout>
        <div className="flex flex-col mx-32 gap-5 mb-10 z-0 font-Poppins">
          <div className="ml-[88px] font-normal text-cust-orange-normal text-xl">
            Lacak Nutrisi
          </div>
          <div className="flex flex-row gap-5">
            <DashboardMenu />
            <div className="flex flex-row w-full h-fit gap-8 justify-center items-start">
              <div className="flex flex-col w-1/4 bg-white drop-shadow-xl rounded-lg h-fit px-8 py-8 gap-8">
                <div className="flex flex-row justify-between items-center">
                  <SVGs.Kalori />
                  <div className="font-normal text-cust-orange-normal text-6xl">
                    Kalori
                  </div>
                </div>
                <div className="flex font-bold text-cust-orange-normal text-5xl justify-center items-center">
                  {Math.round(userData.kalori)} KKal
                </div>
                <div className="flex w-full font-normal text-cust-orange-normal text-2xl">
                  0/{Math.round(userData.kalori)}
                </div>

                <Button
                  type={"button"}
                  variation={"primary-rectangle"}
                  onClick={toggleTambahNutrisiPopUp}
                >
                  Tambah
                </Button>
              </div>
              <div className="flex flex-col w-3/4 gap-12">
                <div className="flex flex-row w-full gap-12">
                  <NutrisiCard
                    icon={"lemak"}
                    title={"Lemak"}
                    goals={Math.round(userData.lemak)}
                    current={0}
                  />
                  <NutrisiCard
                    icon={"karbohidrat"}
                    title={"Karbohidrat"}
                    goals={Math.round(userData.karbohidrat)}
                    current={0}
                  />
                  <NutrisiCard
                    icon={"protein"}
                    title={"Protein"}
                    goals={Math.round(userData.protein)}
                    current={0}
                  />
                </div>
                <div className="flex relative w-full h-full">
                  <div className="flex absolute w-[calc(100%+50px)] h-[calc(100%+50px)] bg-opacity-20 backdrop-blur-md -top-[25px] -left-[25px] justify-center items-center">
                    <button className="flex flex-row bg-white rounded-lg py-2 px-7 justify-center items-center gap-5 drop-shadow-2xl" onClick={() => setIsPremiumPopUp(true)}>
                      <SVGs.Lock />
                      <div className="font-bold text-cust-orange-normal text-3xl">
                        Konten Premium
                      </div>
                    </button>
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
                  <div className="flex flex-col gap-5 w-full">
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
                      toggleStatusDialoguePopUp();
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
            <button className="absolute right-10 top-6" onClick={() => setIsPremiumPopUp(false)}>
              <SVGs.Cross />
            </button>
            <div className="flex flex-col w-1/2 bg-white justify-start items-center py- px-10 gap-8">
              <div className="flex flex-row w-full justify-start items-center gap-5">
                <SVGs.Premium/>
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
                <span className="text-5xl text-cust-orange-normal">Rp 20.000</span> <span className="text-2xl text-cust-black-light-active">/bulan</span>
              </div>
              <Button
                className={"w-full"}
                type={"button"}
                variation={"primary-rectangle"}
              >
                Mulai Premium
              </Button>
            </div>
            <div className="flex flex-col w-1/2 bg-cust-green-light justify-start items-start py-16 px-10 gap-5" style={{ height: '100%' }}>
              <div className="font-bold text-cust-orange-normal text-xl">
                Keuntungan untukmu
              </div>
              <div className="flex flex-row w-full justify-start items-center gap-3 h-10">
                <SVGs.CheckCircle />
                Ragam nutrisi lebih banyak
              </div>
              <div className="flex flex-row w-full justify-start items-center gap-3 h-10">
                <SVGs.CheckCircle className={"w-max"} />
                Program makan sesuai kalori dan nutrisi
              </div>
              <div className="flex flex-row w-full justify-start items-center gap-3 h-10">
                <SVGs.CheckCircle />
                Tambah makan dari catering
              </div>
              <div className="flex flex-row w-full justify-start items-center gap-3 h-10">
                <SVGs.CheckCircle />
                Catat air Anda
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LacakNutrisi;
