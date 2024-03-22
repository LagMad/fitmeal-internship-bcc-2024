import React from "react";
import Foods from "../../assets/Foods.png";
import SVGs from "./SVGs";

const PaketMenuCardSelected = ({
  index,
  title,
  price,
  onDeleteSelectedPackage,
}) => {
  const handleDeleteClick = () => {
    onDeleteSelectedPackage(index);
  };

  return (
    <div className="flex flex-col w-full h-fit border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-cust-black-light p-3 gap-8">
      <div className="text-sm text-cust-black-light-active">
        Paket {index + 1}
      </div>
      <div className="flex flex-row w-full h-fit gap-8 justify-between items-center">
        <div className="flex flex-row gap-8">
          <img className="w-16" src={Foods} alt="foods" />
          <div className="flex flex-col w-full gap-1">
            <div className="text-cust-black-normal font-bold">Rp {price}</div>
            <div className="font-normal text-lg text-cust-black-normal">
              {title}
            </div>
          </div>
        </div>
        <button onClick={handleDeleteClick}>
          <SVGs.Delete />
        </button>
      </div>
    </div>
  );
};

export default PaketMenuCardSelected;
