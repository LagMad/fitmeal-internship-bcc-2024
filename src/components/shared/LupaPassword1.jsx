import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { getCodePassword } from "../../api/services/profile";

const LupaPassword1 = ({ nextStep }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Verifying email and getting code...")
      const response = await getCodePassword(formData);
      nextStep(formData.email)
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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form
      className="flex flex-col bg-white drop-shadow-2xl px-10 py-12 w-full rounded-2xl mx-32 gap-6 justify-center"
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
    >
      <div className="font-bold text-4xl text-cust-orange-normal">
        Lupa Password
      </div>
      <div className="">
        Masukkan alamat email kamu dengan benar dan kami akan mengirimkan kode
        verifikasi
      </div>
      <div className="flex flex-col gap-6 font-bold text-cust-orange-normal">
        <div className="">
          Email
          <Input
            className={"font-normal"}
            type="text"
            name={"email"}
            placeholder={"Masukkan email kamu"}
            onChange={(e) =>
              setFormData({ email: e.target.value })
            }
            required={true}
          />
        </div>
      </div>
      <Button type="submit" variation="primary-rectangle">
        Lanjut
      </Button>
      <div className="text-red-500 font-bold text-center">
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </form>
  );
};

export default LupaPassword1;
