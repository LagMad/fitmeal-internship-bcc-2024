import React, { useState } from "react";
import SVGs from "./SVGs";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Register4 = ({ onSubmit, Form, setForm, errorMsg }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    onSubmit(Form);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <>
      <div
        className="flex flex-col w-full h-screen justify-start items-center self-center gap-20 my-10"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <SVGs.Progress4 />
        <div className="flex flex-col justify-center items-center w-5/12 gap-10">
          <div className="font-bold text-4xl text-cust-orange-normal ">
            Buat akun kamu!
          </div>
          <div className="flex flex-col text-left text-cust-orange-normal font-bold w-7/12 gap-3">
            Username
            <Input
              className={"font-normal"}
              placeholder={"Masukkan username kamu"}
              onChange={(e) => setForm({ ...Form, userName: e.target.value })}
            />
          </div>
          <div className="flex flex-col text-left text-cust-orange-normal font-bold w-7/12 gap-3">
            Email
            <Input
              className={"font-normal"}
              placeholder={"fitmeal@gmail.com"}
              onChange={(e) => setForm({ ...Form, email: e.target.value })}
            />
          </div>
          <div className="flex flex-col text-left text-cust-orange-normal font-bold w-7/12 gap-3">
            Password
            <Input
              className={"font-normal"}
              type={showPassword ? "text" : "password"}
              placeholder={"Masukkan password kamu"}
              onChange={(e) => setForm({ ...Form, password: e.target.value })}
            >
              <button
                className={
                  "absolute right-5 top-2 text-cust-orange-normal font-bold"
                }
                onClick={togglePasswordVisibility}
              >
                show
              </button>
            </Input>
          </div>
          <Button
            className={"w-7/12"}
            type={"button"}
            variation={"primary-rectangle"}
            onClick={() => {
              handleSubmit();
            }}
          >
            Buat Akun
          </Button>
          <div className="">
            Sudah punya akun?{" "}
            <a className="font-semibold text-cust-orange-normal" href="/login">
              Masuk
            </a>
          </div>
          <div className=" text-red-500 font-bold">
            {errorMsg && <p>{errorMsg}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register4;
