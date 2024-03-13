import React, { useState } from "react";
import SVGs from "./SVGs";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Register3 = ({nextStep}) => {
  return (
    <div className="flex flex-col w-full justify-center items-center self-center gap-20 mb-16">
      <SVGs.Progress3 />
      <div className="flex flex-col justify-center items-center w-5/12 gap-10">
        <div className="flex flex-col gap-7 font-bold text-2xl text-cust-orange-normal w-7/12 text-center">
          Berapa berat badan kamu?
          <Input className={"w-full"} placeholder={"*kg"}/>
        </div>
        <div className="flex flex-col gap-7 font-bold text-2xl text-cust-orange-normal w-7/12 text-center">
          Berapa tinggi badan kamu?
          <Input className={"w-full"} placeholder={"*cm"}/>
        </div>
        <Button
          className={"w-full"}
          type={"button"}
          variation={"primary-rectangle"}
          onClick={nextStep}
        >
          Lanjut
        </Button>
      </div>
    </div>
  );
};

export default Register3;
