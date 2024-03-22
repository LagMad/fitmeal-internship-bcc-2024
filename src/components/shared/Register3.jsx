import React from "react";
import SVGs from "./SVGs";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Register3 = ({nextStep, Form, setForm}) => {
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
    <div className="flex flex-col w-full h-screen justify-start items-center self-center gap-20 my-10" onKeyDown={handleKeyDown}
    tabIndex={0}>
      <SVGs.Progress3 />
      <div className="flex flex-col justify-center items-center w-5/12 gap-10">
        <div className="flex flex-col gap-7 font-bold text-2xl text-cust-orange-normal w-7/12 text-center">
          Berapa berat badan kamu?
          <Input className={"w-full"} placeholder={"*kg"} onChange={(e) => setForm({ ...Form, beratBadan: parseInt(e.target.value)})} required/>
        </div>
        <div className="flex flex-col gap-7 font-bold text-2xl text-cust-orange-normal w-7/12 text-center">
          Berapa tinggi badan kamu?
          <Input className={"w-full"} placeholder={"*cm"} onChange={(e) => setForm({ ...Form, tinggiBadan: parseInt(e.target.value)})} required/>
        </div>
        <Button
          type={"button"}
          variation={"primary-rectangle"}
          onClick={() => {
            handleNextStep();
          }}
        >
          Lanjut
        </Button>
      </div>
    </div>
  );
};

export default Register3;
