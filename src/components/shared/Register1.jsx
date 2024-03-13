import React, { useState } from "react";
import SVGs from "./SVGs";
import Button from "../ui/Button";

const Register1 = ({ nextStep }) => {
  const [isChecked, setIsChecked] = useState("");

  const handleChange = (value) => {
    setIsChecked(prevValue => prevValue === value ? "" : value);
  };

  return (
    <div className="flex flex-col w-full justify-center items-center self-center gap-20 mb-16">
      <SVGs.Progress1 />
      <div className="flex flex-col text-cust-orange-normal font-bold w-1/3 text-center text-4xl gap-8">
        <div>Seberapa sibuk aktivitas kamu dalam sehari?</div>
        <label className="w-full" style={{ cursor: "pointer" }}>
          <div className={`text-left rounded-xl border-2 border-cust-orange-normal p-3 ${isChecked === "not_busy" ? "bg-cust-orange-normal" : "bg-white"}`}>
            <input
              className="hidden"
              type="radio"
              name="activityLevel"
              value="not_busy"
              onChange={() => handleChange("not_busy")}
            />
            <div className={`z-10 relative text-xl ${isChecked === "not_busy" ? "text-white" : "text-cust-orange-normal"}`}>
              Tidak Terlalu Sibuk
            </div>
            <div className={`text-[16px] font-normal ${isChecked === "not_busy" ? "text-white" : "text-cust-black-light-active"}`}>
              Menghabiskan banyak waktu untuk bersantai
            </div>
          </div>
        </label>

        <label className="w-full" style={{ cursor: "pointer" }}>
          <div className={`text-left rounded-xl border-2 border-cust-orange-normal p-3 ${isChecked === "moderately_busy" ? "bg-cust-orange-normal" : "bg-white"}`}>
            <input
              className="hidden"
              type="radio"
              name="activityLevel"
              value="moderately_busy"
              onChange={() => handleChange("moderately_busy")}
            />
            <div className={`z-10 relative text-xl ${isChecked === "moderately_busy" ? "text-white" : "text-cust-orange-normal"}`}>
              Lumayan Sibuk
            </div>
            <div className={`text-[16px] font-normal ${isChecked === "moderately_busy" ? "text-white" : "text-cust-black-light-active"}`}>
              Dapat bersantai di beberapa waktu
            </div>
          </div>
        </label>

        <label className="w-full" style={{ cursor: "pointer" }}>
          <div className={`text-left rounded-xl border-2 border-cust-orange-normal p-3 ${isChecked === "busy" ? "bg-cust-orange-normal" : "bg-white"}`}>
            <input
              className="hidden"
              type="radio"
              name="activityLevel"
              value="busy"
              onChange={() => handleChange("busy")}
            />
            <div className={`z-10 relative text-xl ${isChecked === "busy" ? "text-white" : "text-cust-orange-normal"}`}>
              Sibuk
            </div>
            <div className={`text-[16px] font-normal ${isChecked === "busy" ? "text-white" : "text-cust-black-light-active"}`}>
              Pekerjaan yang terjadwal dalam rentang waktu tertentu
            </div>
          </div>
        </label>

        <label className="w-full" style={{ cursor: "pointer" }}>
          <div className={`text-left rounded-xl border-2 border-cust-orange-normal p-3 ${isChecked === "very_busy" ? "bg-cust-orange-normal" : "bg-white"}`}>
            <input
              className="hidden"
              type="radio"
              name="activityLevel"
              value="very_busy"
              onChange={() => handleChange("very_busy")}
            />
            <div className={`z-10 relative text-xl ${isChecked === "very_busy" ? "text-white" : "text-cust-orange-normal"}`}>
              Sangat Sibuk
            </div>
            <div className={`text-[16px] font-normal ${isChecked === "very_busy" ? "text-white" : "text-cust-black-light-active"}`}>
              Pekerjaan yang terjadwal dalam rentang waktu yang lama
            </div>
          </div>
        </label>

        <Button type={"button"} variation={"primary-rectangle"} onClick={nextStep}>Lanjut</Button>
      </div>
    </div>
  );
};

export default Register1;
