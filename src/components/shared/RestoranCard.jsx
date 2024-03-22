import React from "react";
import Restaurant1 from "../../assets/Restaurant1.png";
import SVGs from "./SVGs";

const RestoranCard = ({ name, alamat, review, totalReview }) => {
  return (
    <div className="flex flex-col rounded-2xl bg-white border-[1.5px] border-cust-black-light min-w-[390px]">
      <img className="" src={Restaurant1} alt="resto" />
      <div className="flex flex-col py-4 px-6">
        <div className="text-cust-orange-normal text-2xl font-bold">{name}</div>
        <div className="text-lg">{alamat}</div>
        <div className="flex flex-row w-full justify-start items-center gap-7">
          <div className="flex flex-row justify-start items-center gap-3">
            <SVGs.Star />
            <div className="text-[14px]">
              {review}/5 ({totalReview} reviews)
            </div>
          </div>
          <div className="text-cust-green-normal font-bold">Buka</div>
        </div>
      </div>
    </div>
  );
};

export default RestoranCard;
