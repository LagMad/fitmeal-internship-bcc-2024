import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Register1 from "../shared/Register1";
import Register2 from "../shared/Register2";
import Register3 from "../shared/Register3";
import Register4 from "../shared/Register4";
import RegisterBG1 from "../../assets/RegisterBG1.png";
import RegisterBG2 from "../../assets/RegisterBG2.png";
import Dialogue from "../ui/Dialogue";

import { handleRegister } from "../../api/services/auth";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    aktivitas: "",
    gender: "",
    umur: 0,
    alamat: "",
    beratBadan: 0,
    tinggiBadan: 0,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [statusPopUp, setStatusPopUp] = useState(false);

  const toggleStatusPopUp = () => {
    setStatusPopUp(!statusPopUp);
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

    try {
      const response = await handleRegister(formData);
      toggleStatusPopUp()
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { status, data } = error.response;
        if (status === 500) {
          setErrorMessage("Email sudah terdaftar!");
          d;
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
      } else {
        setErrorMessage("Network error. Please try again.");
      }
    }
  };

  const BoxList = [
    <Register1
      nextStep={handleNextStep}
      Form={formData}
      setForm={setFormData}
    />,
    <Register2
      nextStep={handleNextStep}
      Form={formData}
      setForm={setFormData}
    />,
    <Register3
      nextStep={handleNextStep}
      Form={formData}
      setForm={setFormData}
    />,
    <Register4
      onSubmit={handleSubmit}
      Form={formData}
      setForm={setFormData}
      errorMsg={errorMessage}
    />,
  ];

  return (
    <>
      <div className="flex w-full min-h-screen">
        <div className="flex flex-col relative w-full h-full justify-center items-center">
          {BoxList[currentStep]}
          <img className="absolute left-0 top-52" src={RegisterBG1} alt="bg" />
          <img
            className="absolute right-0 -bottom-20 z-40"
            src={RegisterBG2}
            alt="bg"
          />
        </div>
      </div>
      {statusPopUp && (
        <Dialogue
          type={"success"}
          title={"Berhasil"}
          message={
            <>
              Password baru kamu telah berhasil disimpan, silahkan{" "}
              <span className="font-bold text-cust-orange-normal">Masuk</span>{" "}
              kembali
            </>
          }
          buttonLabel={"Konfirmasi"}
          onClick={() => {toggleStatusPopUp(); navigate("/login")}}
        />
      )}
    </>
  );
};

export default RegisterForm;
