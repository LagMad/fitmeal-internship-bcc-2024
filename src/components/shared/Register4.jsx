import React, { useState } from "react";
import SVGs from "./SVGs";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Register4 = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center self-center gap-20 mb-16">
      <SVGs.Progress4/>
      <div className="flex flex-col justify-center items-center w-5/12 gap-10">
        <div className="font-bold text-4xl text-cust-orange-normal ">
          Buat akun kamu!
        </div>
        <div className="flex flex-col text-left text-cust-orange-normal font-bold w-7/12 gap-3">
          Username
          <Input className={"font-normal"} placeholder={"Masukkan username kamu"}/>
        </div>
        <div className="flex flex-col text-left text-cust-orange-normal font-bold w-7/12 gap-3">
          Email
          <Input className={"font-normal"} placeholder={"fitmeal@gmail.com"}/>
        </div>
        <div className="flex flex-col text-left text-cust-orange-normal font-bold w-7/12 gap-3">
          Password
          <Input className={"font-normal"} type="password" placeholder={"Masukkan password kamu"}/>
        </div>
        <Button className={"w-7/12"} type={"button"} variation={"primary-rectangle"}>Buat Akun</Button>
        <div className="">
          Sudah punya akun? <a className="font-semibold text-cust-orange-normal" href="/login">Masuk</a>
        </div>
      </div>
    </div>
  );
};

export default Register4;
