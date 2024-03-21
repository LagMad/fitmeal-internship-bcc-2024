import React from "react";
import PhotoProfile from "../../assets/PhotoProfile.png";
import SVGs from "./SVGs";

const KomunitasSehatCard = ({ message, name, likes, time }) => {
  return (
    <div className="flex flex-col bg-cust-orange-normal min-w-[450px] h-72 justify-between p-5 rounded-xl text-white font-bold gap-5">
      <div className="font-bold h-52 text-wrap overflow-y-scroll">
        {message}
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-row w-1/2 gap-3">
          <img className="w-8 h-8" src={PhotoProfile} alt="profile" />
          <div className="justify-start items-center flex">{name}</div>
        </div>
        <div className="flex flex-row w-1/2 justify-self-end justify-end items-center gap-2">
          <SVGs.Heart />
          <div>{likes}</div>
          <hr className="h-1 w-1 border-2 rounded-full border-white" />
          <div>{time}</div>
        </div>
      </div>
    </div>
  );
};

export default KomunitasSehatCard;
