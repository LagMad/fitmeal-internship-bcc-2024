import React, { useState } from "react";
// import Facebook from "./../../assets/Facebook.svg"
// import Instagram from "./../../assets/Instagram.svg"
// import Twitter from "./../../assets/Twitter.svg"
// import Tiktok from "./../../assets/Tiktok.svg"
import SVGs from "./../../assets/SVGs.jsx";
import Button from "../ui/Button";

const Footer = () => {
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

  const custOrange = "cust-orange-sosmed";

  return (
    <div className="flex flex-col h-auto bg-cust-orange-normal font-Poppins text-white justify-center items-center px-16 pt-0 sm:pt-12 pb-5 drop-shadow-2xl">
      <div className="flex flex-row w-full">
        <div className="flex w-1/4 flex-col justify-start items-start gap-5">
          <div className="font-RammettoOne text-3xl">FitMeal</div>
          <div className="">
            Menjaga pola makan sehat dan memastikan kebutuhan nutrisi kamu
            terpenuhi
          </div>
          <div className="flex flex-row gap-4">
            <div
              className="group"
              onMouseEnter={() => handleHover("facebook", true)}
              onMouseLeave={() => handleHover("facebook", false)}
            >
              <Button type={"button"} variation={"primary-round"}>
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
              <Button type={"button"} variation={"primary-round"}>
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
              <Button type={"button"} variation={"primary-round"}>
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
              <Button type={"button"} variation={"primary-round"}>
                <SVGs.TikTok
                  fillColor={isTiktokHovered ? custOrange : "white"}
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-3/4 justify-between items-start text-left ml-[calc(20%+7.5px)] mr-24">
          <div className="flex flex-col font-normal gap-3 justify-start items-start">
            <div className="font-bold mb-6">About</div>
            <a className="hover:underline" href="#" target="_blank">
              How it works
            </a>
            <a className="hover:underline" href="#" target="_blank">
              Featured
            </a>
            <a className="hover:underline" href="#" target="_blank">
              Partnership
            </a>
            <a className="hover:underline" href="#" target="_blank">
              Business Relation
            </a>
          </div>
          <div className="flex flex-col font-normal gap-3 justify-start items-start">
            <div className="font-bold mb-6 justify-start items-start">
              Community
            </div>
            <a className="hover:underline" href="#" target="_blank">
              Events
            </a>
            <a className="hover:underline" href="#" target="_blank">
              Blog
            </a>
            <a className="hover:underline" href="#" target="_blank">
              Promo
            </a>
          </div>
          <div className="flex flex-col font-normal gap-3 justify-start items-start">
            <div className="font-bold mb-6">Socials</div>
            <a className="hover:underline" href="#" target="_blank">
              Tiktok
            </a>
            <a className="hover:underline" href="#" target="_blank">
              Instagram
            </a>
            <a className="hover:underline" href="#" target="_blank">
              Twitter
            </a>
            <a className="hover:underline" href="#" target="_blank">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <hr className="flex justify-center items-center border-black opacity-15 w-full border-2 rounded-lg my-10" />
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

export default Footer;