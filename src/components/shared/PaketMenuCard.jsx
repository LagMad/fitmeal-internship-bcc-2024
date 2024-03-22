import React from "react";
import Foods from "../../assets/Foods.png";
import SVGs from "./SVGs";

const PaketMenuCard = ({
  title,
  review,
  description1,
  description2,
  description3,
  price,
  onAddToSelected,
}) => {
  const handleAddClick = () => {
    onAddToSelected({
      title,
      review,
      description1,
      description2,
      description3,
      price,
    });
  };

  return (
    <div className="flex flex-row w-full h-fit border-[1.5px] border-cust-black-light rounded-xl p-3 gap-8">
      <div className="w-1/3">
        <img className="" src={Foods} alt="foods" />
      </div>
      <div className="flex flex-col w-2/3 gap-4">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="font-bold text-2xl text-cust-orange-normal">
            {title}
          </div>
          <div className="bg-cust-green-normal p-2 rounded-full text-white font-bold">
            {review}
          </div>
        </div>
        <div className="flex flex-col text-cust-black-light-active text-sm gap-2">
          {description1} <br />
          {description2} <br />
          {description3} <br />
        </div>
        <div className="flex flex-row w-full justify-between items-center">
          <div className="text-cust-black-normal font-bold">Rp {price}</div>
          <button onClick={handleAddClick}>
            <SVGs.PlusCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaketMenuCard;
