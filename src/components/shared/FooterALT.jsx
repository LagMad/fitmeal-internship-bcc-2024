import React, { useState } from "react";
import SVGs from "./SVGs";
import Button from "../ui/Button";

const FooterALT = ({ position }) => {
  const [isFacebookHovered, setFacebookHovered] = useState(false);
  const [isTwitterHovered, setTwitterHovered] = useState(false);
  const [isInstagramHovered, setInstagramHovered] = useState(false);
  const [isTiktokHovered, setTiktokHovered] = useState(false);

  const handleHover = (socialMedia, hoverStatus) => {
    switch (socialMedia) {
      case "facebook":
        setFacebookHovered(hoverStatus);
        break;
      case "twitter":
        setTwitterHovered(hoverStatus);
        break;
      case "instagram":
        setInstagramHovered(hoverStatus);
        break;
      case "tiktok":
        setTiktokHovered(hoverStatus);
        break;
      default:
        break;
    }
  };

  const logoPosition = (position) => {
    switch (position) {
        case "left":
            return "justify-start items-start";
        case "right":
            return "justify-end items-end";
        default:
            return "";
    }
  }

  const custOrange = "cust-orange-sosmed";

  return (
    <div className="flex flex-col w-full h-auto bg-cust-orange-normal font-Poppins text-white justify-center items-center px-32 pt-0 sm:pt-12 pb-5 drop-shadow-2xl z-10">
      <div className="flex flex-row w-full">
        <div className={`flex w-full flex-col gap-5 ${logoPosition(position)}`}>
          <a className="font-RammettoOne text-3xl" href="/">FitMeal</a>
          <div className="flex flex-row gap-4">
            <div
              className="group"
              onMouseEnter={() => handleHover("facebook", true)}
              onMouseLeave={() => handleHover("facebook", false)}
            >
              <Button type={"button"} variation={"primary-round"} onClick={() => {window.open("https://www.facebook.com"), "_blank"}}>
                <SVGs.Facebook
                  fillColor={isFacebookHovered ? custOrange : "white"}
                />
              </Button>
            </div>
            <div
              className="group"
              onMouseEnter={() => handleHover("twitter", true)}
              onMouseLeave={() => handleHover("twitter", false)}
            >
              <Button type={"button"} variation={"primary-round"} onClick={() => {window.open("https://www.twitter.com"), "_blank"}}>
                <SVGs.Twitter
                  fillColor={isTwitterHovered ? custOrange : "white"}
                />
              </Button>
            </div>
            <div
              className="group"
              onMouseEnter={() => handleHover("instagram", true)}
              onMouseLeave={() => handleHover("instagram", false)}
            >
              <Button type={"button"} variation={"primary-round"} onClick={() => {window.open("https://www.instagram.com"), "_blank"}}>
                <SVGs.Instagram
                  fillColor={isInstagramHovered ? custOrange : "white"}
                />
              </Button>
            </div>
            <div
              className="group"
              onMouseEnter={() => handleHover("tiktok", true)}
              onMouseLeave={() => handleHover("tiktok", false)}
            >
              <Button type={"button"} variation={"primary-round"} onClick={() => {window.open("https://www.tiktok.com"), "_blank"}}>
                <SVGs.TikTok
                  fillColor={isTiktokHovered ? custOrange : "white"}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <hr className="flex justify-center items-center border-white w-full border-[1px] rounded-lg my-10" />
      <div className="flex flex-row w-full mb-10">
        <div className="relative group flex w-2/3 justify-start items-start text-left">
          <div className="relative group flex">
            ©2024 FitMeal. All rights reserved
            <div className="absolute -right-7 opacity-10 lg:group-hover:opacity-100 transition-all duration-500 ml-2">
              ❤️️
            </div>
          </div>
        </div>
        <div className="flex flex-row w-1/3 justify-end items-end gap-20">
          <a className="hover:underline" href="#" target="_blank">
            Privacy & Policy
          </a>
          <a className="hover:underline" href="#" target="_blank">
            Terms & Condition
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterALT;
