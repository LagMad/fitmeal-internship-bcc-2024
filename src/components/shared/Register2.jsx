import React, { useState } from "react";
import SVGs from "./SVGs";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Register2 = ({ nextStep, Form, setForm }) => {
  const [isChecked, setIsChecked] = useState("");

  const handleChange = (value) => {
    setIsChecked((prevValue) => (prevValue === value ? "" : value));
    setForm({ ...Form, gender: value });
  };

  const handleNextStep = () => {
    nextStep();
  };

  return (
    <div className="flex flex-col w-full justify-center items-center self-center gap-20 mb-16">
      <SVGs.Progress2 />
      <div className="flex flex-col justify-center items-center w-5/12 gap-10">
        <div className="flex flex-col w-full justify-center items-center gap-7">
          <div className="font-bold text-cust-orange-normal text-2xl">
            Apa jenis kelamin kamu?
          </div>
          <div className="flex flex-row gap-16 w-full justify-center items-center">
            <label
              className="flex flex-row justify-center items-center gap-3 text-xl"
              style={{ cursor: "pointer" }}
            >
              <input
                className="hidden"
                type="radio"
                name="gender"
                value="male"
                checked={isChecked === "male"}
                onChange={() => handleChange("male")}
              />
              <div
                className={`w-6 h-6 border-cust-orange-normal rounded-full ${
                  isChecked === "male" ? "border-[5px]" : "border-[1px]"
                }`}
              ></div>
              Pria
            </label>

            <label
              className="flex flex-row justify-center items-center gap-3 text-xl"
              style={{ cursor: "pointer" }}
            >
              <input
                className="hidden"
                type="radio"
                name="gender"
                value="female"
                checked={isChecked === "female"}
                onChange={() => handleChange("female")}
              />
              <div
                className={`w-6 h-6 border-cust-orange-normal rounded-full ${
                  isChecked === "female" ? "border-[5px]" : "border-[1px]"
                }`}
              ></div>
              Wanita
            </label>
          </div>

          <div className="flex flex-col gap-7 font-bold text-2xl text-cust-orange-normal w-7/12 text-center">
            Berapa umur kamu?
            <Input
              className={"w-full"}
              name={"umur"}
              onChange={(e) => setForm({ ...Form, umur: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-7 font-bold text-2xl text-cust-orange-normal w-7/12 text-center">
            Di mana tempat tinggalmu?
            <Input
              className={"w-full"}
              name={"alamat"}
              onChange={(e) =>
                setForm({ ...Form, alamat: e.target.value })
              }
            />
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Register2;