import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import SVGs from "../components/shared/SVGs";
import Platter1 from "../assets/Platter1.png";
import Platter2 from "../assets/Platter2.png";
import Platter3 from "../assets/Platter3.png";
import PhotoProfile from "../assets/PhotoProfile.png";

const Home = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="flex flex-col w-full min-h-screen pt-10 font-Poppins bg-HeroSection bg-no-repeat overflow-auto">
        <div className="w-1/2 ml-16 mt-16 px-16">
          <div className="text-cust-orange-normal font-semibold mb-6">
            Solusi Terbaik untuk Kamu
          </div>
          <div className="text-cust-green-normal font-bold text-7xl">
            Penuhi Nutrisi Harianmu Bersama
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
              <Button type={"button"} variation={"primary-rectangle"}>
                Atur Rencana Makan
              </Button>
            ) : (
              <>
                <Button
                  className="group"
                  type={"button"}
                  variation={"primary-rectangle"}
                >
                  Ayo Mulai
                </Button>
                <SVGs.RightArrow width={20} height={18} className="group" />
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
                  <div className="font-normal text-[16px]">2000 Kal</div>
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
                <Button
                  className={"bg-cust-orange-normal hover:bg-cust-green-normal my-custom-class"}
                  type={"button"}
                  variation={"primary-rectangle"}
                >
                  Detail
                </Button>
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
          <Button type={"button"} variation={"primary-rectangle"}>
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
            <div className="absolute-wrapper flex flex-row gap-5 top-[40%] left-16 z-10">
              <div className="bg-Partnership1 w-72 h-72 rounded-2xl bg-no-repeat overflow-hidden" />
              <div className="bg-Partnership2 w-72 h-72 rounded-2xl bg-no-repeat overflow-hidden" />
            </div>
            <div className="absolute bg-Partnership3 w-96 h-96 rounded-2xl bg-no-repeat overflow-hidden z-20 right-[75px] top-[105px]">
              <div className="absolute flex bg-cust-green-normal-hover w-52 h-5 rotate-[40deg] text-white text-center justify-center items-center py-4 -right-12 top-8 font-bold">
                Top Rated
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center w-full gap-4">
            <hr className="bg-cust-black-light-active border h-5 w-5 rounded-full" />
            <hr className="bg-cust-orange-normal border h-5 w-12 rounded-full" />
            <hr className="bg-cust-black-light-active border h-5 w-5 rounded-full" />
          </div>
        </div>
        <div className="flex flex-col w-1/2 justify-center items-start gap-10 pl-32 pr-64">
          <div className="font-bold text-cust-orange-normal text-5xl">
            Sabila Catering
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-start items-center gap-7">
              <SVGs.Location />
              <div className="">Jl Veteran no 7, Malang</div>
            </div>
            <div className="flex flex-row justify-start items-center gap-7">
              <SVGs.Time />
              <div className="">07.00 - 21.00 WIB</div>
            </div>
            <div className="flex flex-row justify-start items-center gap-7">
              <SVGs.StarReview />
              <div className="">4.9/5 (320 reviews)</div>
            </div>
          </div>
          <div className="flex flex-row w-full justify-start items-center">
            <div className="w-1/2">
              <Button type={"button"} variation={"primary-rectangle"}>
                Lihat Menu
              </Button>
            </div>
            <div className="flex flex-row w-1/2 justify-end items-center gap-16">
              <SVGs.LeftArrow width={20} height={18} />
              <SVGs.RightArrow width={20} height={18} />
            </div>
          </div>
        </div>
      </div>

      {/* FORUM KOMUNITAS */}
      <div className="flex flex-col justify-center items-center w-full px-36 gap-10">
        <div className="flex flex-row justify-center items-center gap-20 w-full">
          <div className="text-5xl text-cust-orange-normal font-bold text-left">
            Forum Komunitas
          </div>
          <hr className="border-cust-green-normal border-2 w-52 rounded-full"></hr>
          <div className="flex-row flex justify-center items-center gap-20">
            <img className="w-48 h-48" src={Platter1} alt="platter1" />
            <img className="w-40 h-40" src={Platter2} alt="platter2" />
            <img className="w-32 h-32" src={Platter3} alt="platter3" />
          </div>
        </div>

        {/* CARDS */}
        <div className="flex flex-row w-full justify-center items-start gap-5">
          <div className="flex flex-col bg-cust-orange-normal w-1/4 h-auto p-5 rounded-xl text-white font-bold gap-5">
            <div className="font-bold">
              Ada yang tahu makanan sehat khas daerah kita?
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-row w-1/2 gap-3">
                <img className="w-8 h-8" src={PhotoProfile} alt="profile" />
                <div className="justify-start items-center flex">Suryanto</div>
              </div>
              <div className="flex flex-row w-1/2 justify-self-end justify-end items-center gap-2">
                <SVGs.Heart />
                <div>156</div>
                <hr className="h-1 w-1 border-2 rounded-full border-white" />
                <div>15.30</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-cust-orange-normal w-1/4 h-auto p-5 rounded-xl text-white font-bold gap-5">
            <div className="font-bold">
              Saya ingin tahu lebih banyak tentang manfaat kacang-kacangan bagi
              kesehatan. Apakah ada yang punya informasi atau pengalaman
              pribadi?
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-row w-1/2 gap-3">
                <img className="w-8 h-8" src={PhotoProfile} alt="profile" />
                <div className="justify-start items-center flex">Suryanto</div>
              </div>
              <div className="flex flex-row w-1/2 justify-self-end justify-end items-center gap-2">
                <SVGs.Heart />
                <div>156</div>
                <hr className="h-1 w-1 border-2 rounded-full border-white" />
                <div>15.30</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-cust-orange-normal w-1/4 h-auto p-5 rounded-xl text-white font-bold gap-5">
            <div className="font-bold">
              Apakah ada yang memiliki saran untuk makanan rendah karbohidrat
              yang cocok untuk diet keto?
            </div>
            <div className="flex flex-row w-full">
              <div className="flex flex-row w-1/2 gap-3">
                <img className="w-8 h-8" src={PhotoProfile} alt="profile" />
                <div className="justify-start items-center flex">Suryanto</div>
              </div>
              <div className="flex flex-row w-1/2 justify-self-end justify-end items-center gap-2">
                <SVGs.Heart />
                <div>156</div>
                <hr className="h-1 w-1 border-2 rounded-full border-white" />
                <div>15.30</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row justify-center items-center gap-4">
            <hr className="bg-cust-orange-normal border h-5 w-12 rounded-full" />
            <hr className="bg-cust-black-light-active border h-5 w-5 rounded-full" />
            <hr className="bg-cust-black-light-active border h-5 w-5 rounded-full" />
          </div>

          <Button type={"button"} variation={"primary-rectangle"}>
            Buat Pesan
          </Button>

          <div className="flex flex-row justify-end items-center gap-16">
            <SVGs.LeftArrow width={20} height={18} />
            <SVGs.RightArrow width={20} height={18} />
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
            className={"w-1/3"}
            type={"button"}
            variation={"secondary-rectangle"}
          >
            Dapatkan Sekarang
          </Button>
        </div>
      </div>

      {/* USER REVIEW */}
      <div className="flex flex-row w-auto mx-32 mb-16">
        <div className="flex flex-col h-auto w-1/2 mr-16">
          <div className="h-1/2 text-cust-orange-normal font-bold text-7xl">
            Terpercaya oleh{" "}
            <span className="text-cust-green-normal">Ratusan</span> Pengguna
          </div>

          <div className="flex flex-row h-1/2 justify-start items-start gap-20">
            <SVGs.LeftArrow width={36} height={32} />
            <SVGs.RightArrow width={36} height={32} />
          </div>
        </div>
        <div className="flex w-1/2">
          <div className="flex bg-PeoplePict bg-cover bg-no-repeat h-[700px] w-max items-end justify-end ml-32 overflow-hidden rounded-xl">
            <div className="flex flex-col bg-cust-orange-normal w-auto h-auto p-5 rounded-xl text-white font-bold gap-5 mx-8 mb-8">
              <div className="font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </div>
              <div className="flex flex-row w-full">
                <div className="flex flex-row w-1/2 gap-3">
                  <img className="w-8 h-8" src={PhotoProfile} alt="profile" />
                  <div className="justify-start items-center flex">
                    Suryanto
                  </div>
                </div>
                <div className="flex flex-row w-1/2 justify-self-end justify-end items-center gap-2">
                  <SVGs.StarReview />
                  <div>4.6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
