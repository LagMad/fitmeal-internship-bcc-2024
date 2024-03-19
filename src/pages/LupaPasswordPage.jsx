import React, { useState, useEffect } from "react";
import FooterALT from "../components/shared/FooterALT";
import { useNavigate } from "react-router-dom";
import LoginPict from "../assets/LoginPict.png";
import { handleLogin } from "../api/services/auth";
import LupaPassword1 from "../components/shared/LupaPassword1";
import LupaPassword2 from "../components/shared/LupaPassword2";
import LupaPassword3 from "../components/shared/LupaPassword3";

const LupaPasswordPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    try {
      const response = await handleLogin(formData);

      window.localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { status } = error.response;
        if (status === 500) {
          setErrorMessage("Email atau password salah. Silakan coba lagi!");
        } else if (status === 400) {
          setErrorMessage("Itu bukan email. Silakan coba lagi!");
        } else if (status === 404) {
          setErrorMessage("Email tidak ditemukan!");
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
      } else {
        setErrorMessage("Network error. Please try again.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [errorMessage]);

  const BoxList = [
    <LupaPassword1
      nextStep={handleNextStep}
      Form={formData}
      setForm={setFormData}
    />,
    <LupaPassword2
      nextStep={handleNextStep}
      Form={formData}
      setForm={setFormData}
    />,
    <LupaPassword3
      nextStep={handleNextStep}
      Form={formData}
      setForm={setFormData}
    />,
  ];

  return (
    <div>
      <nav className="fixed top-0 left-0 z-50 w-screen h-20 flex justify-between items-center px-36 bg-white font-Poppins">
        <div className=" flex justify-between w-full items-center">
          <a
            className="flex w-1/6 font-RammettoOne text-cust-orange-normal items-center text-3xl"
            href="/"
          >
            FitMeal
          </a>
        </div>
      </nav>

      <main className="flex flex-col items-center w-full mt-16">
        <div
          className="flex flex-row w-full h-auto pt-10 font-Poppins mb-16"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="w-1/2">
            <div className="relative">
              <img className="absolute z-40" src={LoginPict} alt="login" />
            </div>
          </div>
          <div className="flex w-1/2 justify-center items-start">
            {BoxList[currentStep]}
          </div>
        </div>
      </main>

      <FooterALT position={"right"} />
    </div>
  );
};

export default LupaPasswordPage;
