import React, { useState } from "react";
import SVGs from "./SVGs";
import Button from "../ui/Button";


const Register1 = ({ nextStep, Form, setForm }) => {
  const [isChecked, setIsChecked] = useState("");

  const handleChange = (value) => {
    setIsChecked((prevValue) => (prevValue === value ? "" : value));
    setForm({ ...Form, aktivitas: value });
  };

  const handleNextStep = () => {
    nextStep();
  };

  return (
    <div className="flex flex-col w-full justify-center items-center self-center gap-20 mb-16">
      <SVGs.Progress1 />
      <div className="text-cust-orange-normal font-bold w-1/3 text-center text-4xl">
        Seberapa sibuk aktivitas kamu dalam sehari?
      </div>
      <form className="flex flex-col text-cust-orange-normal font-bold w-1/3 text-center text-4xl gap-8">
        <label className="w-full" style={{ cursor: "pointer" }}>
          <div
            className={`text-left rounded-xl border-2 border-cust-orange-normal p-3 ${
              isChecked === "tidak_terlalu_sibuk"
                ? "bg-cust-orange-normal"
                : "bg-white"
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="aktivitas"
              value="tidak_terlalu_sibuk"
              checked={isChecked === "tidak_terlalu_sibuk"}
              onChange={() => handleChange("tidak_terlalu_sibuk")}
              required
            />
            <div
              className={`z-10 relative text-xl ${
                isChecked === "tidak_terlalu_sibuk"
                  ? "text-white"
                  : "text-cust-orange-normal"
              }`}
            >
              Tidak Terlalu Sibuk
            </div>
            <div
              className={`text-[16px] font-normal ${
                isChecked === "tidak_terlalu_sibuk"
                  ? "text-white"
                  : "text-cust-black-light-active"
              }`}
            >
              Menghabiskan banyak waktu untuk bersantai
            </div>
          </div>
        </label>

        <label className="w-full" style={{ cursor: "pointer" }}>
          <div
            className={`text-left rounded-xl border-2 border-cust-orange-normal p-3 ${
              isChecked === "lumayan_sibuk"
                ? "bg-cust-orange-normal"
                : "bg-white"
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="aktivitas"
              value="lumayan_sibuk"
              checked={isChecked === "lumayan_sibuk"}
              onChange={() => handleChange("lumayan_sibuk")}
              required
            />
            <div
              className={`z-10 relative text-xl ${
                isChecked === "lumayan_sibuk"
                  ? "text-white"
                  : "text-cust-orange-normal"
              }`}
            >
              Lumayan Sibuk
            </div>
            <div
              className={`text-[16px] font-normal ${
                isChecked === "lumayan_sibuk"
                  ? "text-white"
                  : "text-cust-black-light-active"
              }`}
            >
              Dapat bersantai di beberapa waktu
            </div>
          </div>
        </label>

        <label className="w-full" style={{ cursor: "pointer" }}>
          <div
            className={`text-left rounded-xl border-2 border-cust-orange-normal p-3 ${
              isChecked === "sibuk" ? "bg-cust-orange-normal" : "bg-white"
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="aktivitas"
              value="sibuk"
              checked={isChecked === "sibuk"}
              onChange={() => handleChange("sibuk")}
              required
            />
            <div
              className={`z-10 relative text-xl ${
                isChecked === "sibuk" ? "text-white" : "text-cust-orange-normal"
              }`}
            >
              Sibuk
            </div>
            <div
              className={`text-[16px] font-normal ${
                isChecked === "sibuk"
                  ? "text-white"
                  : "text-cust-black-light-active"
              }`}
            >
              Pekerjaan yang terjadwal dalam rentang waktu tertentu
            </div>
          </div>
        </label>

        <label className="w-full" style={{ cursor: "pointer" }}>
          <div
            className={`text-left rounded-xl border-2 border-cust-orange-normal p-3 ${
              isChecked === "sangat_sibuk"
                ? "bg-cust-orange-normal"
                : "bg-white"
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="aktivitas"
              value="sangat_sibuk"
              checked={isChecked === "sangat_sibuk"}
              onChange={() => handleChange("sangat_sibuk")}
              required
            />
            <div
              className={`z-10 relative text-xl ${
                isChecked === "sangat_sibuk"
                  ? "text-white"
                  : "text-cust-orange-normal"
              }`}
            >
              Sangat Sibuk
            </div>
            <div
              className={`text-[16px] font-normal ${
                isChecked === "sangat_sibuk"
                  ? "text-white"
                  : "text-cust-black-light-active"
              }`}
            >
              Pekerjaan yang terjadwal dalam rentang waktu yang lama
            </div>
          </div>
        </label>

        <Button
          type={"button"}
          variation={"primary-rectangle"}
          onClick={() => {
            handleNextStep();
            console.log(Form);
          }}
        >
          Lanjut
        </Button>
      </form>
    </div>
  );
};

export default Register1;
