import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import SVGs from "../components/shared/SVGs";
import Platter1 from "../assets/Platter1.png";
import Platter2 from "../assets/Platter2.png";
import Platter3 from "../assets/Platter3.png";
import PhotoProfile from "../assets/PhotoProfile.png";
import ForumKomunitasCard from "../components/shared/ForumKomunitasCard";
import dataDummy from "../utils/dummy.json";
import { getUserData } from "../api/services/profile";
import ReviewCard from "../components/shared/ReviewCard";

const Home = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  const [userData, setUserData] = useState([]);

  const [currentIndexPartner, setCurrentIndexPartner] = useState(1);
  const [currentIndexCard, setCurrentIndexCard] = useState(0);
  const [currentIndexReview, setCurrentIndexReview] = useState(0);
  const [cards, setCards] = useState([]);

  const goToPreviousCards = () => {
    setCurrentIndexCard((currentIndexCard - 1 + 3) % 3);
  };

  const goToNextCards = () => {
    setCurrentIndexCard((currentIndexCard + 1) % 3);
  };

  const goToPreviousReview = () => {
    setCurrentIndexReview((currentIndexReview - 1 + 3) % 3);
  };

  const goToNextReview = () => {
    setCurrentIndexReview((currentIndexReview + 1) % 3);
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
    setCards(dataDummy);
  }, [dataDummy]);

  const goToPreviousSlide = () => {
    setCurrentIndexPartner((currentIndexPartner - 1 + 3) % 3);
  };

  const goToNextSlide = () => {
    setCurrentIndexPartner((currentIndexPartner + 1) % 3);
  };

  const getName = (currentIndexPartner) => {
    switch (currentIndexPartner) {
      case 0:
        return "Susi Catering";
      case 1:
        return "Sabila Catering";
      case 2:
        return "Sarinah Catering";
      default:
        return "not found";
    }
  };

  const getLocation = (currentIndexPartner) => {
    switch (currentIndexPartner) {
      case 0:
        return "Jl Mayjend Panjaitan No 12, Malang";
      case 1:
        return "Jl Veteran No 7, Malang";
      case 2:
        return "Jl Sumbersari No 7, Malang";
      default:
        return "not found";
    }
  };

  const getTime = (currentIndexPartner) => {
    switch (currentIndexPartner) {
      case 0:
        return "07.00 - 21.00 WIB";
      case 1:
        return "07.00 - 21.00 WIB";
      case 2:
        return "10.00 - 21.00 WIB";
      default:
        return "not found";
    }
  };

  const getReview = (currentIndexPartner) => {
    switch (currentIndexPartner) {
      case 0:
        return "4.8/5 (220 Reviews)";
      case 1:
        return "4.9/5 (320 Reviews)";
      case 2:
        return "4.7/5 (300 Reviews)";
      default:
        return "not found";
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="flex flex-col w-full min-h-screen pt-10 bg-HeroSection bg-no-repeat overflow-auto">
        <div className="w-2/3 ml-16 mt-16 px-16">
          <div className="text-cust-orange-normal font-semibold mb-6 text-lg w-full">
            Solusi Terbaik untuk Kamu
          </div>
          <div className="text-cust-green-normal font-bold text-7xl">
            Penuhi Nutrisi <br/> Harianmu Bersama
          </div>
          <div className="text-cust-orange-normal font-RammettoOne text-7xl mt-4">
            FitMeal
          </div>
          <div className="text-black mt-10">
            <p>FitMeal membantu kamu menjaga pola makan yang kurang teratur</p>
            <p>dan memastikan kebutuhan nutrisi harian kamu terpenuhi dengan</p>
            <p>baik supaya kamu dapat menjalani aktivitas sehari-hari dengan</p>
            <p>maksimal</p>
          </div>
          <button className="group flex flex-row justify-start items-center gap-7 mt-10">
            {isAuthenticated ? (
              <Button
                type={"button"}
                variation={"primary-rectangle"}
                onClick={() => navigate("/dashboard/lacaknutrisi")}
              >
                Lacak Nutrisi
              </Button>
            ) : (
              <>
                <Button
                  className="group"
                  type={"button"}
                  variation={"primary-rectangle"}
                  onClick={() => navigate("/register")}
                >
                  Ayo Mulai
                </Button>
              </>
            )}
          </button>
        </div>
        {isAuthenticated ? (
          <div className="flex relative w-full h-32 mt-48 bg-cust-orange-normal justify-center items-center mb-16">
            <div className="flex flex-col absolute w-9/12 -top-20 bg-cust-green-normal text-white justify-center items-center py-5 rounded-xl gap-5">
              <div className="font-bold text-4xl">Nutrisi Harian Kamu</div>
              <div className="flex flex-row justify-between items-center gap-10">
                <div className="flex flex-row font-bold text-xl justify-between gap-5">
                  Kalori
                  <div className="font-normal text-[16px]">
                    {Math.round(userData.kalori)} Kal
                  </div>
                </div>
                <hr className="border-[1px] border-white h-16" />
                <div className="flex flex-row font-bold text-xl justify-between gap-5">
                  Protein
                  <div className="font-normal text-[16px]">49 gram</div>
                </div>
                <hr className="border-[1px] border-white h-16" />
                <div className="flex flex-row font-bold text-xl justify-between gap-5">
                  Karbohidrat
                  <div className="font-normal text-[16px]">325 gram</div>
                </div>
                <hr className="border-[1px] border-white h-16" />
                <div className="flex flex-row font-bold text-xl justify-between gap-5">
                  Lemak
                  <div className="font-normal text-[16px]">44 gram</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* INFORMASI NUTRISI */}
      <div className="flex flex-col gap-4 px-36 mb-16 justify-center">
        <div className="text-center font-bold text-5xl text-cust-orange-normal">
          Informasi Nutrisi
        </div>
        <div className="flex flex-col text-center text-xl gap-2">
          <p>Informasi nutrisi dari setiap makanan</p>
          <p>dengan riset mendalam</p>
        </div>
        <div className="flex flex-col w-full gap-8 justify-center items-end font-bold text-3xl text-white mx-auto">
          <Button type={"button"} variation={"primary-rectangle"} onClick={() => navigate("/informasinutrisi")}>
            Lihat Lebih Banyak
          </Button>
          <div className="flex flex-row w-full gap-8 justify-center items-center">
            <div className="flex relative bg-FruitCard bg-no-repea bg-cover w-80 h-80 justify-start items-end rounded-2xl overflow-hidden z-0">
              <div className="absolute w-full h-full bg-gradient-to-t from-[#52D812] from-10% to-transparent to-40% z-10" />
              <p className="pl-7 pb-7 z-20">Fruit</p>
            </div>
            <div className="flex relative bg-VegetablesCard bg-no-repeat bg-cover w-80 h-80 justify-start items-end rounded-2xl overflow-hidden">
              <div className="absolute w-full h-full bg-gradient-to-t from-[#52D812] from-10% to-transparent to-40% z-10 rounded-xl" />
              <p className="pl-7 pb-7 z-20">Vegetables</p>
            </div>
            <div className="flex relative bg-MeatCard bg-no-repea bg-cover w-80 h-80 justify-start items-end rounded-2xl overflow-hidden">
              <div className="absolute w-full h-full bg-gradient-to-t from-[#52D812] from-10% to-transparent to-40% z-10 rounded-xl" />
              <p className="pl-7 pb-7 z-20">Meat</p>
            </div>
            <div className="flex relative bg-SeafoodCard bg-no-repea bg-cover w-80 h-80 justify-start items-end rounded-2xl overflow-hidden">
              <div className="absolute w-full h-full bg-gradient-to-t from-[#52D812] from-10% to-transparent to-40% z-10 rounded-xl" />
              <p className="pl-7 pb-7 z-20">Seafood</p>
            </div>
          </div>
        </div>
      </div>

      {/* PARTNERSHIP */}
      <div className="flex flex-row w-full my-28">
        <div className="flex flex-col w-1/2 gap-36">
          <div className="flex relative bg-cust-orange-normal w-[calc(100%-180px)] h-96 mr-48 rounded-r-[44px]">
            <p className="text-3xl font-bold text-white pt-7 pl-5">
              Partner Terpercaya!
            </p>
            <div className="absolute-wrapper flex flex-row top-[40%] left-16 z-0">
              <div
                className={`carousel-item bg-Partnership1 w-72 h-72 rounded-2xl bg-no-repeat overflow-hidden ${
                  currentIndexPartner === 0
                    ? "z-20"
                    : currentIndexPartner === 1
                    ? "z-10"
                    : "z-0"
                }`}
                style={{
                  transform: `translateX(${
                    currentIndexPartner === 0
                      ? "75%"
                      : currentIndexPartner === 1
                      ? "0%"
                      : "150%"
                  }) scale(${currentIndexPartner === 0 ? 1.5 : 1})`,
                }}
              />
              <div
                className={`carousel-item bg-Partnership2 w-72 h-72 rounded-2xl bg-no-repeat overflow-hidden ${
                  currentIndexPartner === 1
                    ? "z-20"
                    : currentIndexPartner === 2
                    ? "z-10"
                    : "z-0"
                }`}
                style={{
                  transform: `translateX(${
                    currentIndexPartner === 1
                      ? "-60%"
                      : currentIndexPartner === 2
                      ? "-135%"
                      : "20%"
                  }) scale(${currentIndexPartner === 1 ? 1.5 : 1})`,
                }}
              />
              <div
                className={`carousel-item bg-Partnership3 w-72 h-72 rounded-2xl bg-no-repeat overflow-hidden ${
                  currentIndexPartner === 2
                    ? "z-20"
                    : currentIndexPartner === 0
                    ? "z-10"
                    : "z-0"
                }`}
                style={{
                  transform: `translateX(${
                    currentIndexPartner === 2
                      ? "-195%"
                      : currentIndexPartner === 0
                      ? "-275%"
                      : "-115%"
                  }) scale(${currentIndexPartner === 2 ? 1.5 : 1})`,
                }}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center w-full gap-4">
            <hr
              className={`${
                currentIndexPartner === 0
                  ? `bg-cust-orange-normal border h-5 w-12 rounded-full`
                  : "bg-cust-black-light-active border h-5 w-5 rounded-full"
              } transition duration-500`}
            />
            <hr
              className={`${
                currentIndexPartner === 1
                  ? `bg-cust-orange-normal border h-5 w-12 rounded-full`
                  : "bg-cust-black-light-active border h-5 w-5 rounded-full"
              } transition duration-500`}
            />
            <hr
              className={`${
                currentIndexPartner === 2
                  ? `bg-cust-orange-normal border h-5 w-12 rounded-full`
                  : "bg-cust-black-light-active border h-5 w-5 rounded-full"
              } transition duration-500`}
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 justify-center items-start gap-10 pl-32 pr-64">
          <div className="font-bold text-cust-orange-normal text-5xl">
            {getName(currentIndexPartner)}
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-start items-center gap-7">
              <SVGs.Location />
              <div>{getLocation(currentIndexPartner)}</div>
            </div>
            <div className="flex flex-row justify-start items-center gap-7">
              <SVGs.Time />
              <div>{getTime(currentIndexPartner)}</div>
            </div>
            <div className="flex flex-row justify-start items-center gap-7">
              <SVGs.StarReview />
              <div>{getReview(currentIndexPartner)}</div>
            </div>
          </div>
          <div className="flex flex-row w-full justify-start items-center">
            <div className="flex w-1/2 z-30">
              <Button
                type={"button"}
                variation={"primary-rectangle"}
                onClick={() => navigate("/rencanamakan")}
              >
                Lihat Menu
              </Button>
            </div>
            <div className="flex flex-row w-1/2 justify-end items-center gap-16">
              <button onClick={goToPreviousSlide}>
                <SVGs.LeftArrowCircle
                  width={45}
                  height={45}
                  fillColor={"#FA6815"}
                />
              </button>
              <button onClick={goToNextSlide}>
                <SVGs.RightArrowCircle
                  width={45}
                  height={45}
                  fillColor={"#FA6815"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FORUM KOMUNITAS */}
      <div className="flex flex-col justify-center items-center w-full gap-10">
        <div className="flex flex-row justify-center items-center gap-20 w-full px-36">
          <div className="text-5xl text-cust-orange-normal font-bold text-left">
            Forum Komunitas
          </div>
          <hr className="border-cust-green-normal border-2 w-52 rounded-full" />
          <div className="flex-row flex justify-center items-center gap-20">
            <img className="w-48 h-48" src={Platter1} alt="platter1" />
            <img className="w-40 h-40" src={Platter2} alt="platter2" />
            <img className="w-32 h-32" src={Platter3} alt="platter3" />
          </div>
        </div>

        {/* CARDS */}
        <div className="flex flex-row justify-start items-start overflow-hidden max-w-full">
          <div
            className="flex flex-row justify-start items-start gap-5 pl-[152px] transition-all duration-500 transform ease-in-out"
            style={{
              transform: `translateX(${
                currentIndexCard === 0
                  ? "0%"
                  : currentIndexCard === 1
                  ? "-32.375%"
                  : "-64.75%"
              })`,
            }}
          >
            {dataDummy.map((card, index) => (
              <ForumKomunitasCard
                key={index}
                message={card.message}
                name={card.name}
                likes={card.likes}
                time={card.time}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-row justify-between items-center w-full px-36">
          <div className="flex flex-row justify-center items-center gap-4">
            <hr
              className={`${
                currentIndexCard === 0
                  ? `bg-cust-orange-normal border h-5 w-12 rounded-full`
                  : "bg-cust-black-light-active border h-5 w-5 rounded-full"
              } transition duration-500`}
            />
            <hr
              className={`${
                currentIndexCard === 1
                  ? `bg-cust-orange-normal border h-5 w-12 rounded-full`
                  : "bg-cust-black-light-active border h-5 w-5 rounded-full"
              } transition duration-500`}
            />
            <hr
              className={`${
                currentIndexCard === 2
                  ? `bg-cust-orange-normal border h-5 w-12 rounded-full`
                  : "bg-cust-black-light-active border h-5 w-5 rounded-full"
              } transition duration-500`}
            />
          </div>

          <Button type="button" variation="primary-rectangle">
            Buat Pesan
          </Button>

          <div className="flex flex-row justify-end items-center gap-16">
            <button onClick={goToPreviousCards}>
              <SVGs.LeftArrowCircle
                width={45}
                height={45}
                fillColor="#FA6815"
              />
            </button>
            <button onClick={goToNextCards}>
              <SVGs.RightArrowCircle
                width={45}
                height={45}
                fillColor="#FA6815"
              />
            </button>
          </div>
        </div>
      </div>

      {/* PROMO */}
      <div className="flex flex-row bg-cust-orange-normal bg-PromoBG bg-no-repeat bg-right w-auto h-auto rounded-xl text-white px-12 py-8 mx-36 my-16 gap-16">
        <div className="w-1/3 flex flex-col gap-8 my-3">
          <div className="font-normal text-7xl flex-row justify-end items-end  ">
            <span className="font-bold text-8xl">50%</span> off
          </div>
          <div className=" text-cust-black-light-hover">
            Berlaku s/d 19 Maret 2024
          </div>
        </div>
        <div className="w-1 flex items-center justify-center">
          <hr className="border-2 border-white h-full rounded-full" />
        </div>
        <div className="w-2/3 flex flex-col gap-5">
          <div className="w-3/5 font-bold text-3xl">
            Promo Pengguna Baru! Segera Ambil Paket Makanan Favoritmu!
          </div>
          <Button
            className={"w-1/3 hover:border-white"}
            type={"button"}
            variation={"secondary-rectangle"}
            onClick={() => navigate("/rencanamakan")}
          >
            Dapatkan Sekarang
          </Button>
        </div>
      </div>

      {/* USER REVIEW */}
      <div className="flex flex-row w-auto ml-32 mb-16">
        <div className="flex flex-col h-auto w-1/2 pr-32 gap-16">
          <div className="h-fit text-cust-orange-normal font-bold text-7xl">
            Terpercaya oleh{" "}
            <span className="text-cust-green-normal">Ratusan</span> Pengguna
          </div>
          <div className="flex flex-row h-fit justify-start items-start gap-10">
            <button onClick={goToPreviousReview}>
              <SVGs.LeftArrowCircle
                width={50}
                height={50}
                fillColor="#FA6815"
              />
            </button>
            <button onClick={goToNextReview}>
              <SVGs.RightArrowCircle
                width={50}
                height={50}
                fillColor="#FA6815"
              />
            </button>
          </div>
        </div>
        <div className="flex w-1/2 overflow-hidden ml-32">
          <div
            className="flex flex-row gap-6 transition-all duration-500 transform ease-in-out"
            style={{
              transform: `translateX(${
                currentIndexReview === 0
                  ? "0%"
                  : currentIndexReview === 1
                  ? "-33.7%"
                  : "-67.4%"
              })`,
            }}
          >
            <ReviewCard message={"Terima kasih atas fitur-fitur yang membantu saya menjaga kesehatan secara lebih efektif!"} name={"Kamal"} review={"4.6"}/>
            <ReviewCard message={"Website yang menakjubkan, dengan ini pola makan saya bisa terjaga dengan baik"} name={"Lewis"} review={"4.6"} />
            <ReviewCard message={"Ide cemerlang untuk menggabungkan fitur utama Lacak Nutrisi dan Rencana Makan"} name={"Ellie"} review={"4.6"}/>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
