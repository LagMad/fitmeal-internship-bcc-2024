import React from "react";
import Salad from "../../assets/Salad.png";

const LacakNutrisiResult = ({ data, selectedMeal, onSelectMeal }) => {
  const { name } = data;

  const handleChange = () => {
    onSelectMeal(data);
  };

  return (
    <label
      className={`group flex flex-row py-2 px-4 bg-cust-orange-normal rounded-xl justify-start items-center gap-2 text-white text-xl ${
        selectedMeal === data ? "bg-cust-orange-normal" : "bg-white"
      }`}
      style={{ cursor: "pointer" }}
    >
      <input
        type="radio"
        name="aktivitas"
        value={name}
        checked={selectedMeal === data}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <img className="" src={Salad} alt={name} />
      <div className={`${selectedMeal === data ? "text-white" : "text-cust-orange-normal"}`}>
        {name}
      </div>
    </label>
  );
};

export default LacakNutrisiResult;
