import React, { useState } from "react";
import SVGs from "./SVGs.jsx";
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

  const custGreen = "cust-green-sosmed";

  return (
    <div className="flex flex-col h-auto bg-cust-orange-normal font-Poppins text-white justify-center items-center px-32 pt-0 sm:pt-12 pb-5 drop-shadow-2xl z-30">
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
              <Button type={"button"} variation={"primary-round"} onClick={() => {window.open("https://www.facebook.com"), "_blank"}}>
                <SVGs.Facebook
                  fillColor={isFacebookHovered ? custGreen : "white"}
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
                  fillColor={isTwitterHovered ? custGreen : "white"}
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
                  fillColor={isInstagramHovered ? custGreen : "white"}
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
                  fillColor={isTiktokHovered ? custGreen : "white"}
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-3/4 justify-end items-start text-left ml-[calc(20%+7.5px)] mr-24 gap-28">
          <div className="flex flex-col font-normal gap-3 justify-start items-start">
            <div className="font-bold mb-6 justify-start items-start">
              Layanan
            </div>
            <a className="hover:underline" href="/dashboard/lacaknutrisi" >
              Lacak Nutrisi
            </a>
            <a className="hover:underline" href="/informasinutrisi">
              Informasi Nutrisi
            </a>
            <a className="hover:underline" href="/dashboard/rencanamakan">
              Rencana Makan
            </a>
            <a className="hover:underline" href="/">
              Komunitas Sehat
            </a>
            <a className="hover:underline" href="/">
              Premium
            </a>
          </div>
          <div className="flex flex-col font-normal gap-3 justify-start items-start">
            <div className="font-bold mb-6">Social Media</div>
            <a className="hover:underline" href="tiktok.com" target="_blank">
              Tiktok
            </a>
            <a className="hover:underline" href="instagram.com/fittmeall" target="_blank">
              Instagram
            </a>
            <a className="hover:underline" href="twitter.com" target="_blank">
              X
            </a>
            <a className="hover:underline" href="facebook.com" target="_blank">
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
            Kebijakan Privasi
          </a>
          <a className="hover:underline" href="#" target="_blank">
            Syarat dan Ketentuan
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
