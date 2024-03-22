import React, { useState, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";

import Restaurant1 from "../assets/Restaurant1.png";
import SVGs from "../components/shared/SVGs";
import Foods from "../assets/Foods.png";
import SearchBar from "../components/ui/SearchBar";
import PaketMenuCard from "../components/shared/PaketMenuCard";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import RestoranCard from "../components/shared/RestoranCard";
import BlankSpacePlaceholder from "../components/shared/BlankSpaceHolder";
import PaketMenuCardSelected from "../components/shared/PaketMenuCardSelected";

const RencanaMakan = () => {
  const [currentIndexCard, setCurrentIndexCard] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMealData, setFilteredMealData] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [numberOfBlankSpaces, setNumberOfBlankSpaces] = useState(0);
  const [formData, setFormData] = useState({
    paket: "",
  });
  const paketOptions = [
    { value: "Paket 1 Hari", label: "Paket 1 Hari" },
    { value: "Paket 3 Hari", label: "Paket 3 Hari" },
    { value: "Paket 7 Hari", label: "Paket 7 Hari" },
  ];

  const menuDataSets = [
    [
      {
        title: "Paket A",
        review: 4.8,
        description1: "1x Roti Lapis (telur, tomat, selada, daging ayam)",
        description2:
          "1x Nasi campur (nasi, ikan, sayur pak coy rebus, mix fruit)",
        description3: "1x Nasi campur (nasi, ayam bakar, sayur kangkung)",
        price: "40.000,00",
      },
      {
        title: "Paket B",
        review: 4.5,
        description1: "1x Buah-buahan (semangka dan pepaya)",
        description2:
          "1x Nasi campur (nasi, ayam panggang, selada, timun, tomat)",
        description3: "1x Ketoprak (bihun, telur, kentang, sayur tauge, tahu)",
        price: "45.000,00",
      },
      {
        title: "Paket C",
        review: 4.2,
        description1:
          "1x Salad sayur (telur rebus, wortel, jagung, tomat, selada, timun)",
        description2: "1x Soto ayam (nasi, ayam, telur, kol, seledri, soun)",
        description3:
          "1x Nasi ayam teriyaki (nasi, ayam, telur, timun, tomat, selada) + mix fruit",
        price: "50.000,00",
      },
    ],
    [
      // Add more menu data sets for other indices as needed
      {
        title: "Paket D",
        review: 4.8,
        description1: "Description 1",
        description2: "Description 2",
        description3: "Description 3",
        price: "60.000,00",
      },
      {
        title: "Paket E",
        review: 4.5,
        description1: "Description 1",
        description2: "Description 2",
        description3: "Description 3",
        price: "65.000,00",
      },
      {
        title: "Paket F",
        review: 4.2,
        description1: "Description 1",
        description2: "Description 2",
        description3: "Description 3",
        price: "70.000,00",
      },
    ],
    [
      // Add more menu data sets for other indices as needed
      {
        title: "Paket G",
        review: 4.8,
        description1: "Description 1",
        description2: "Description 2",
        description3: "Description 3",
        price: "60.000,00",
      },
      {
        title: "Paket H",
        review: 4.5,
        description1: "Description 1",
        description2: "Description 2",
        description3: "Description 3",
        price: "65.000,00",
      },
      {
        title: "Paket I",
        review: 4.2,
        description1: "Description 1",
        description2: "Description 2",
        description3: "Description 3",
        price: "70.000,00",
      },
    ],
    // Add more sets for other indices
  ];

  useEffect(() => {
    setFilteredMealData(menuDataSets[currentIndexCard] || []);
  }, [currentIndexCard]);

  useEffect(() => {
    if (formData.paket === "Paket 1 Hari") {
      setNumberOfBlankSpaces(1);
    } else if (formData.paket === "Paket 3 Hari") {
      setNumberOfBlankSpaces(3);
    } else if (formData.paket === "Paket 7 Hari") {
      setNumberOfBlankSpaces(7);
    } else {
      setNumberOfBlankSpaces(0);
    }
  }, [formData.paket]);

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    const currentMenuDataSet = menuDataSets[currentIndexCard];
    const filteredData = currentMenuDataSet.filter(
      (meal) =>
        meal.title.toLowerCase().includes(query.toLowerCase()) ||
        meal.description1.toLowerCase().includes(query.toLowerCase()) ||
        meal.description2.toLowerCase().includes(query.toLowerCase()) ||
        meal.description3.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMealData(filteredData);
  };

  const handleAddToSelected = (packageToAdd) => {
    const newSelectedPackages = [...selectedPackages];
    newSelectedPackages.push(packageToAdd);
    setSelectedPackages(newSelectedPackages);
  };

  const handleDeleteSelectedPackage = (index) => {
    const updatedSelectedPackages = selectedPackages.filter(
      (_, i) => i !== index
    );
    setSelectedPackages(updatedSelectedPackages);
  };

  const goToPreviousCards = () => {
    setCurrentIndexCard((currentIndexCard - 1 + 3) % 3);
  };

  const goToNextCards = () => {
    setCurrentIndexCard((currentIndexCard + 1) % 3);
  };

  const orange = "#FA6815";
  const grey = "#B0B0B0";
  const white = "#FFFFFF";

  return (
    <MainLayout>
      <div className="flex flex-row w-full py-24 px-16 gap-8">
        <div className="flex flex-col w-3/12 h-fit gap-16">
          <div className="flex flex-col gap-5">
            <div className="text-cust-orange-normal text-3xl font-bold">
              Daftar Restoran
            </div>
            <div className="flex max-w-full overflow-hidden">
              <div
                className="flex flex-row gap-1 justify-center items-center transition-all duration-500 transform ease-in-out"
                style={{
                  transform: `translateX(${
                    currentIndexCard === 0
                      ? "0%"
                      : currentIndexCard === 1
                      ? "-33.45%"
                      : "-66.85%"
                  })`,
                }}
              >
                <RestoranCard
                  name={"Sarinah Catering"}
                  alamat={"Jl Mayjend Panjaitan No 8, Malang"}
                  review={"4.9"}
                  totalReview={"320"}
                />
                <RestoranCard
                  name={"Sarinah Catering"}
                  alamat={"Jl Mayjend Panjaitan No 8, Malang"}
                  review={"4.9"}
                  totalReview={"320"}
                />
                <RestoranCard
                  name={"Sarinah Catering"}
                  alamat={"Jl Mayjend Panjaitan No 8, Malang"}
                  review={"4.9"}
                  totalReview={"320"}
                />
              </div>
            </div>
            <div className="flex flex-row w-full justify-between items-center">
              <div className="flex flex-row justify-start items-center w-full gap-4">
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
              <div className="flex flex-row w-1/2 justify-end items-center gap-5">
                <button onClick={() => goToPreviousCards()}>
                  <SVGs.LeftArrowCircle fillColor={orange} width={50} />
                </button>
                <button onClick={() => goToNextCards()}>
                  <SVGs.RightArrowCircle fillColor={orange} width={50} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div className="text-cust-orange-normal text-3xl font-bold">
              Rekomendasi Program Makanan
            </div>
            <div className="flex flex-col gap-5 w-full bg-cust-orange-normal text-white py-5 px-6 rounded-2xl">
              <div className="flex flex-row justify-start items-center w-full gap-4">
                <SVGs.Lock fillColor={white} width={23} height={23} />
                <div className="font-normal">Konten Premium</div>
              </div>
              <img className="" src={Foods} alt="foods" />
              <div className="flex flex-row justify-start items-center gap-4">
                <SVGs.Date width={23} height={23} />
                30 Hari Paket Makanan
              </div>
              <div className="text-3xl font-bold">Program Diet</div>
              <div className="text-[14px] font-normal">
                Program makan diet 30 hari membantu pengguna merencanakan dan
                melacak pola makan sehat selama periode 30 hari untuk mencapai
                tujuan penurunan berat badan dan perubahan gaya hidup yang lebih
                sehat
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-5/12 h-fit gap-5">
          <div className="font-bold text-cust-orange-normal text-3xl">
            Daftar Menu
          </div>
          <div className="w-7/12">
            <SearchBar
              className={" border-cust-black-light-active"}
              placeholder={"Cari makananmu"}
              fillColor={grey}
              onSearch={handleSearchQueryChange}
            />
          </div>
          {filteredMealData.map((item, index) => (
            <PaketMenuCard
              key={index}
              title={item.title}
              review={item.review}
              description1={item.description1}
              description2={item.description2}
              description3={item.description3}
              price={item.price}
              onAddToSelected={handleAddToSelected}
              onDelete
            />
          ))}
        </div>
        <div className="flex flex-col w-4/12 h-fit gap-5">
          <Input
            type="select"
            className={"w-full"}
            name={"paket"}
            value={formData.paket}
            onChange={(e) =>
              setFormData({ ...formData, paket: e.target.value })
            }
            required={true}
            placeholder="Pilih jenis paket kamu"
            options={paketOptions}
          />
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-row w-full bg-cust-orange-normal text-white py-3 justify-center items-center rounded-t-xl gap-5 font-bold text-lg">
              <SVGs.Daftar />
              Daftar Paket Rencana Makanan
            </div>
            {numberOfBlankSpaces > 0 ? (
              selectedPackages.length === 0 ? (
                Array.from({ length: numberOfBlankSpaces }).map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-full justify-start items-start text-cust-black-light-active border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-cust-black-light py-5 px-5 gap-3"
                  >
                    <div className="text-sm">Paket {index + 1}</div>
                    <div className="text-2xl">Tambahkan paket makan</div>
                  </div>
                ))
              ) : (
                selectedPackages.map((packageItem, index) => (
                  <PaketMenuCardSelected
                    key={index}
                    index={index}
                    title={packageItem.title}
                    price={packageItem.price}
                    onDeleteSelectedPackage={handleDeleteSelectedPackage}
                  />
                ))
              )
            ) : (
              <div className="flex flex-col w-full justify-center items-center text-cust-black-light-active border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-cust-black-light py-5 px-4 gap-3">
                <div className="text-2xl">Paket Makan Belum Tersedia</div>
                <div className="text-lg">
                  Harap pilih jenis paket terlebih dahulu
                </div>
              </div>
            )}
            <div className="flex flex-col border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-cust-black-light w-full py-5 px-4 text-center gap-3 text-sm">
              <div className="flex flex-row w-full justify-between items-center">
                <div className="text-cust-black-light-active">Subtotal</div>
                <div className="text-cust-black-normal">Rp 0</div>
              </div>
              <div className="flex flex-row w-full justify-between items-center">
                <div className="text-cust-black-light-active">
                  Biaya Pengiriman
                </div>
                <div className="text-cust-black-normal">Rp 0</div>
              </div>
              <div className="flex flex-row w-full justify-between items-center">
                <div className="text-cust-black-light-active">
                  Biaya Layanan
                </div>
                <div className="text-cust-black-normal">Rp 0</div>
              </div>
              <div className="flex flex-row w-full justify-between items-center">
                <div className="text-cust-black-light-active">Promo Diskon</div>
                <div className="text-cust-black-normal">Rp 0</div>
              </div>
              <div className="flex flex-row w-full justify-between items-center">
                <div className="text-cust-black-light-active">Promo Diskon</div>
                <div className="text-cust-black-normal">Rp 0</div>
              </div>
            </div>
            <div className="flex flex-col border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-cust-black-light w-full py-5 px-4 text-center gap-3 text-sm rounded-b-xl">
              <div className="flex flex-row bg-cust-green-normal justify-between items-center text-3xl font-bold text-white rounded-xl px-3 py-2">
                <div>Total</div>
                <div>Rp 0</div>
              </div>
              <Input
                type={"text"}
                name={"alamat"}
                placeholder={"Masukkan alamat lengkap kamu"}
              />
              <Button type={"button"} variation={"primary-rectangle"}>
                Bayar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RencanaMakan;
