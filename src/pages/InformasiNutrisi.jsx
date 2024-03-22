import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SVGs from "../components/shared/SVGs";
import { getMealData } from "../api/services/meal";
import Navbar from "../components/shared/Navbar";
import FooterALT from "../components/shared/FooterALT";
import SearchBar from "../components/ui/SearchBar";
import InformasiNutrisiTable from "../components/shared/InformasiNutrisiTable";

const InformasiNutrisi = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("Buah & Sayur");
  const [activeCategory, setActiveCategory] = useState("Buah & Sayur");
  const [isHovered, setIsHovered] = useState("Buah & Sayur");
  const [searchBarFillColor, setSearchBarFillColor] = useState("#B0B0B0");
  const [searchQuery, setSearchQuery] = useState("");
  const [mealData, setMealData] = useState([]);
  const [filteredMealData, setFilteredMealData] = useState([]);

  const getMeal = async () => {
    try {
      const response = await getMealData();
      setMealData(response.data);
      setFilteredMealData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    const filteredData = mealData.filter((meal) =>
      meal.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMealData(filteredData);
  };

  useEffect(() => {
    getMeal();
  }, []);

  useEffect(() => {
    filterDataByCategory(activeCategory);
  }, [activeCategory]);

  const filterDataByCategory = (category) => {
    const filteredData = mealData.filter(
      (meal) => meal.jenis === category.toLowerCase()
    );
    setFilteredMealData(filteredData);
  };

  const categories = [
    "Buah & Sayur",
    "Nasi, Mie, & Roti",
    "Daging",
    "Makanan Laut",
  ];

  const jenis = ["buah_sayur", "nasi_mie_roti", "daging", "makanan_laut"];

  const custOrange = "#FA6815";
  const white = "#FFFFFF";

  return (
    <div>
      <Navbar />
      <div className="flex flex-row w-full min-h-screen mt-32 px-32 pb-24 font-Poppins gap-16">
        <div className="flex flex-col w-1/4 h-fit  bg-white border-cust-black-light border-[1.5px] justify-start items-start px-5 py-6 rounded-lg gap-4">
          <div className="text-cust-orange-normal text-3xl font-bold">
            Kategori
          </div>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`${
                activeCategory === category
                  ? "bg-cust-orange-normal text-white"
                  : "bg-white text-cust-orange-normal"
              } flex flex-row group justify-start items-center px-3 py-1 rounded-lg gap-4`}
              onClick={() => setActiveCategory(jenis[index])}
              onMouseEnter={() => setIsHovered(jenis[index])}
              onMouseLeave={() => setIsHovered(activeCategory)}
              style={{
                backgroundColor:
                  isHovered === jenis[index] || activeCategory === jenis[index]
                    ? custOrange
                    : "#FFFFFF",
                color:
                  isHovered === jenis[index] || activeCategory === jenis[index]
                    ? "#FFFFFF"
                    : custOrange,
              }}
            >
              {category === "Buah & Sayur" && (
                <SVGs.Buah
                  fillColor={
                    isHovered === jenis[index] ||
                    activeCategory === jenis[index]
                      ? "#FFFFFF"
                      : custOrange
                  }
                />
              )}
              {category === "Nasi, Mie, & Roti" && (
                <SVGs.Nasi
                  fillColor={
                    isHovered === jenis[index] ||
                    activeCategory === jenis[index]
                      ? "#FFFFFF"
                      : custOrange
                  }
                  width={"23"}
                />
              )}
              {category === "Daging" && (
                <SVGs.Daging
                  fillColor={
                    isHovered === jenis[index] ||
                    activeCategory === jenis[index]
                      ? "#FFFFFF"
                      : custOrange
                  }
                />
              )}
              {category === "Makanan Laut" && (
                <SVGs.MakananLaut
                  fillColor={
                    isHovered === jenis[index] ||
                    activeCategory === jenis[index]
                      ? "#FFFFFF"
                      : custOrange
                  }
                />
              )}
              <div className="text-xl">{category}</div>
            </button>
          ))}
        </div>
        <div className="flex flex-col w-full justify-start items-start gap-6">
          <div className="w-1/3">
            <SearchBar
              className={
                "border-cust-black-light-active focus:border-cust-orange-normal"
              }
              onSearch={handleSearchQueryChange}
              fillColor={searchBarFillColor}
              onFocus={() => setSearchBarFillColor("#FA6815")}
              onBlur={() => setSearchBarFillColor("#B0B0B0")}
            />
          </div>
          <table className="flex flex-col w-full border-[1.5px] border-collapse rounded-lg">
            <thead className="flex w-full">
              <tr className="flex text-cust-orange-normal py-3 w-full items-center">
                <th className=" w-2/6 text-left py-5 pl-6">
                  Nama Makanan{" "}
                  <span className="text-cust-black-light-active font-normal text-xs ml-2">
                    per 100 gram
                  </span>
                </th>
                <th className=" w-1/6 text-center">Kalori</th>
                <th className=" w-1/6 text-center">Karbohidrat</th>
                <th className=" w-1/6 text-center">Protein</th>
                <th className=" w-1/6 text-center">Lemak</th>
              </tr>
            </thead>
            <tbody>
              {filteredMealData.length > 0 ? (
                filteredMealData.map((meal, index) => {
                  return (
                    <InformasiNutrisiTable
                      data={meal}
                      index={index}
                      key={index}
                    />
                  );
                })
              ) : (
                <p className="p-5">Tidak ada data</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <FooterALT position={"left"} />
    </div>
  );
};

export default InformasiNutrisi;
