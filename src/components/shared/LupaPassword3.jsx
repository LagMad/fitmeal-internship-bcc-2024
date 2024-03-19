import React, { useState, useEffect } from "react";
import LoginForm from "../auth/LoginForm";
import FooterALT from "./FooterALT";
import { useNavigate } from "react-router-dom";
import LoginPict from "../../assets/LoginPict.png";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { handleLogin } from "../../api/services/auth";

const LupaPassword3 = ({ nextStep, Form, setForm }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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
      e.preventDefault(); // Prevent default form submission behavior
      handleSubmit();
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [errorMessage]);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <form
      className="flex flex-col bg-white drop-shadow-2xl px-10 py-12 w-full rounded-2xl mx-32 gap-6 justify-center"
      onSubmit={(e) => (handleSubmit(e), e.preventDefault())}
    >
      <div className="font-bold text-4xl text-cust-orange-normal">
        Ganti Password
      </div>
      <div className="">Masukkan password baru kamu dengan benar</div>
      <div className="flex flex-col gap-6 font-bold text-cust-orange-normal">
        <Input
          className={"font-normal"}
          type="text"
          name={"email"}
          placeholder={"Password baru"}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required={true}
        />
        <Input
          className={"font-normal"}
          type="text"
          name={"email"}
          placeholder={"Konfirmasi Password baru"}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required={true}
        />
      </div>
      <Button type={"submit"} variation={"primary-rectangle"}>
        Simpan
      </Button>
      <Button
        className={"border-2 border-cust-orange-normal"}
        type={"submit"}
        variation={"secondary-rectangle"}
      >
        Batal
      </Button>
      <div className="text-red-500 font-bold text-center">
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </form>
  );
};

export default LupaPassword3;