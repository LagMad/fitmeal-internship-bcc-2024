import React from "react";
import MainLayout from "../components/layout/MainLayout";
import Button from "../components/ui/Button";
import SVGs from "../assets/SVGs";

const Home = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="flex flex-col w-full min-h-screen pt-10 font-Poppins bg-HeroSection bg-no-repeat bg-right">
        <div className="w-1/2 ml-16 mt-16">
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
            <Button
              className="group"
              type={"button"}
              variation={"primary-rectangle"}
              onClick={console.log("Klik!")}
            >
              Ayo Mulai
            </Button>
            <SVGs.RightArrow className="group" />
          </button>
        </div>
      </div>

      {/* INFORMASI NUTRISI */}
      <div className="flex flex-col gap-4 mx-20 mb-16 justify-center">
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
            <div className="flex relative bg-FruitCard w-72 h-72 justify-start items-end rounded-2xl overflow-hidden">
              <div className="absolute w-full h-full bg-gradient-to-t from-[#52D812] from-10% to-transparent to-40% z-10" />
              <p className="pl-7 pb-7 z-20">Fruit</p>
            </div>
            <div className="flex relative bg-VegetablesCard w-72 h-72 justify-start items-end rounded-2xl overflow-hidden">
              <div className="absolute w-full h-full bg-gradient-to-t from-[#52D812] from-10% to-transparent to-40% z-10 rounded-xl" />
              <p className="pl-7 pb-7 z-20">Vegetables</p>
            </div>
            <div className="flex relative bg-MeatCard w-72 h-72 justify-start items-end rounded-2xl overflow-hidden">
              <div className="absolute w-full h-full bg-gradient-to-t from-[#52D812] from-10% to-transparent to-40% z-10 rounded-xl" />
              <p className="pl-7 pb-7 z-20">Meat</p>
            </div>
            <div className="flex relative bg-SeafoodCard w-72 h-72 justify-start items-end rounded-2xl overflow-hidden">
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
            <p className="text-3xl font-bold text-white pt-7 pl-5">Partner Terpercaya!</p>
            <div className="absolute-wrapper flex flex-row gap-5 top-[40%] left-16 z-10">
              <div className="bg-Partnership1 w-72 h-72 rounded-2xl bg-no-repeat overflow-hidden"/>
              <div className="bg-Partnership2 w-72 h-72 rounded-2xl bg-no-repeat overflow-hidden"/>
            </div>
            <div className="absolute bg-Partnership3 w-96 h-96 rounded-2xl bg-no-repeat overflow-hidden z-20 right-[75px] top-[105px]">
              <div className="absolute flex bg-cust-green-normal-hover w-52 h-5 rotate-[40deg] text-white text-center justify-center items-center py-4 -right-12 top-8 font-bold">
                Top Rated
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center w-full gap-4">
            <hr className="bg-cust-black-light-active border h-5 w-5 rounded-full"/>
            <hr className="bg-cust-orange-normal border h-5 w-12 rounded-full"/>
            <hr className="bg-cust-black-light-active border h-5 w-5 rounded-full"/>
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
              <SVGs.LeftArrow />
              <SVGs.RightArrow />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
