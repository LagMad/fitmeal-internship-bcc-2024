import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPict from "../../assets/LoginPict.png";
import Input from "../ui/Input.jsx";
import Button from "../ui/Button";
import { handleLogin } from "../../api/services/auth";

const LoginForm = () => {
  const navigate = useNavigate();
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

  return (
    <div className="flex flex-row w-full h-auto pt-10 font-Poppins mb-16" onKeyDown={handleKeyDown}
    tabIndex={0}>
      <div className="w-1/2">
        <div className="relative">
          <img className="absolute z-40" src={LoginPict} alt="login" />
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-start">
        {/* FORM */}
        <form className="flex flex-col bg-white drop-shadow-2xl px-10 py-12 w-full rounded-2xl mx-32 gap-6 justify-center" onSubmit={(e) => (handleSubmit(e), e.preventDefault())}>
          <div className="justify-start items-start w-full text-lg">
            Selamat datang di{" "}
            <span className="text-cust-orange-normal font-RammettoOne text-xl">
              FitMeal
            </span>
          </div>
          <div className="font-bold text-4xl text-cust-orange-normal">
            Masuk
          </div>
          <div className="flex flex-col gap-6 font-bold text-cust-orange-normal">
            <div className="">
              Email
              <Input
                className={"font-normal"}
                type="text"
                name={"email"}
                placeholder={"Masukkan email kamu"}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required={true}
              />
            </div>
            <div className="">
              Password
              <Input
                className={"relative flex font-normal justify-center items-center"}
                type={showPassword ? "text" : "password"}
                name={"password"}
                placeholder={"Masukkan password kamu"}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required={true}
              >
                <button type="button" className={"absolute right-5 top-2"} onClick={togglePasswordVisibility}>{showPassword ? "hide" : "show"}</button>
              </Input>
            </div>
          </div>
          <div className="text-cust-orange-normal font-semibold self-end">
            Lupa Password?
          </div>
          <Button type={"submit"} variation={"primary-rectangle"}>
            Masuk
          </Button>
          <div className="self-center">
            Belum punya akun?{" "}
            <a
              className="font-semibold text-cust-orange-normal"
              href="/register"
            >
              Daftar
            </a>
          </div>
          <div className="text-red-500 font-bold text-center">
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
