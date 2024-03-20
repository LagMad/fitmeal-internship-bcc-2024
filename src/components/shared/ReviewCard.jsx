import React from "react";
import PhotoProfile from "../../assets/PhotoProfile.png"
import SVGs from "./SVGs";

const ReviewCard = () => {
  return (
    <div className="flex bg-PeoplePict bg-cover bg-no-repeat min-h-[700px] min-w-[550px] items-end justify-end overflow-hidden rounded-xl text-xl">
      <div className="flex flex-col bg-cust-orange-normal w-auto h-auto px-8 py-5 rounded-xl text-white font-bold gap-5 mx-16 mb-8">
        <div className="font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </div>
        <div className="flex flex-row w-full">
          <div className="flex flex-row w-1/2 gap-3">
            <img className="w-8 h-8" src={PhotoProfile} alt="profile" />
            <div className="justify-start items-center flex">Suryanto</div>
          </div>
          <div className="flex flex-row w-1/2 justify-self-end justify-end items-center gap-2">
            <SVGs.StarReview />
            <div>4.6</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
