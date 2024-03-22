import React from "react";
import SVGs from "../shared/SVGs";

const NutrisiCard = ({ icon, title, current, goals, className }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case "lemak":
        return <SVGs.Lemak />;
      case "karbohidrat":
        return <SVGs.Karbohidrat />;
      case "protein":
        return <SVGs.Protein />;
      default:
        return null; // return null if no icon matches
    }
  };

  return (
    <div className={`flex flex-col w-full bg-cust-orange-normal text-white h-fit  rounded-lg p-5 gap-2 ${className}`}>
      <div className="flex flex-row justify-between items-center mb-5">
        <div className="font-bold text-4xl">{goals}</div>
        {getIcon(icon)}
      </div>
      <div className="font-normal text-lg">{title}</div>
      {Math.round(current) >= Math.round(goals) ? (
        <div className="flex flex-row justify-start items-center gap-2">
          <SVGs.CheckCircle/>
          <div className="font-bold text-xs">
            Completed
          </div>
        </div>
      ) : (
        <div className="font-normal text-sm">{current}/{goals}</div>
      )}
    </div>
  );
};

export default NutrisiCard;
