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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNextStep();
    }
  };

  return (
    <div
      className="flex flex-col w-full h-screen justify-start items-center self-center gap-10 my-10 "
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <SVGs.Progress1 />
      <div className="text-cust-orange-normal font-bold w-1/3 text-center text-4xl">
        Seberapa sibuk aktivitas kamu dalam sehari?
      </div>
      <form
        className="flex flex-col text-cust-orange-normal font-bold w-1/3 text-center text-4xl gap-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="w-full" style={{ cursor: "pointer" }}>
          <div
            className={`text-left rounded-xl border-2 border-cust-orange-normal p-3 ${
              isChecked === "sangat jarang olahraga"
                ? "bg-cust-orange-normal"
                : "bg-white"
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="aktivitas"
              value="sangat jarang olahraga"
              checked={isChecked === "sangat jarang olahraga"}
              onChange={() => handleChange("sangat jarang olahraga")}
              required={true}
            />
            <div
              className={`z-10 relative text-xl ${
                isChecked === "sangat jarang olahraga"
                  ? "text-white"
                  : "text-cust-orange-normal"
              }`}
            >
              Sangat Jarang Olahraga
            </div>
            <div
              className={`text-[16px] font-normal ${
                isChecked === "sangat jarang olahraga"
                  ? "text-white"
                  : "text-cust-black-light-active"
              }`}
            >
              1 kali per minggu
            </div>
          </div>
        </label>

        <label className="w-full" style={{ cursor: "pointer" }}>
          <div
            className={`text-left rounded-xl border-2 border-cust-orange-normal p-3 ${
              isChecked === "jarang olahraga"
                ? "bg-cust-orange-normal"
                : "bg-white"
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="aktivitas"
              value="jarang olahraga"
              checked={isChecked === "jarang olahraga"}
              onChange={() => handleChange("jarang olahraga")}
              required={true}
            />
            <div
              className={`z-10 relative text-xl ${
                isChecked === "jarang olahraga"
                  ? "text-white"
                  : "text-cust-orange-normal"
              }`}
            >
              Jarang Olahraga
            </div>
            <div
              className={`text-[16px] font-normal ${
                isChecked === "jarang olahraga"
                  ? "text-white"
                  : "text-cust-black-light-active"
              }`}
            >
              1 - 3 kali per minggu
            </div>
          </div>
        </label>

        <label className="w-full" style={{ cursor: "pointer" }}>
          <div
            className={`text-left rounded-xl border-2 border-cust-orange-normal p-3 ${
              isChecked === "sering olahraga" ? "bg-cust-orange-normal" : "bg-white"
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="aktivitas"
              value="sering olahraga"
              checked={isChecked === "sering olahraga"}
              onChange={() => handleChange("sering olahraga")}
              required={true}
            />
            <div
              className={`z-10 relative text-xl ${
                isChecked === "sering olahraga" ? "text-white" : "text-cust-orange-normal"
              }`}
            >
              Sering Olahraga
            </div>
            <div
              className={`text-[16px] font-normal ${
                isChecked === "sering olahraga"
                  ? "text-white"
                  : "text-cust-black-light-active"
              }`}
            >
              4 - 5 kali per minggu
            </div>
          </div>
        </label>

        <label className="w-full" style={{ cursor: "pointer" }}>
          <div
            className={`text-left rounded-xl border-2 border-cust-orange-normal p-3 ${
              isChecked === "sangat sering olahraga"
                ? "bg-cust-orange-normal"
                : "bg-white"
            }`}
          >
            <input
              className="hidden"
              type="radio"
              name="aktivitas"
              value="sangat sering olahraga"
              checked={isChecked === "sangat sering olahraga"}
              onChange={() => handleChange("sangat sering olahraga")}
              required={true}
            />
            <div
              className={`z-10 relative text-xl ${
                isChecked === "sangat sering olahraga"
                  ? "text-white"
                  : "text-cust-orange-normal"
              }`}
            >
              Sangat Sering Olahraga
            </div>
            <div
              className={`text-[16px] font-normal ${
                isChecked === "sangat sering olahraga"
                  ? "text-white"
                  : "text-cust-black-light-active"
              }`}
            >
              6 - 7 kali per minggu
            </div>
          </div>
        </label>

        <Button
          type={"button"}
          variation={"primary-rectangle"}
          onClick={() => {
            handleNextStep();
          }}
        >
          Lanjut
        </Button>
      </form>
    </div>
  );
};

export default Register1;
