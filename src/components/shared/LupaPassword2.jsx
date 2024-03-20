import React, { useState, useRef } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { checkCodePassword } from "../../api/services/profile";

const LupaPassword2 = ({ nextStep, email, prevStep }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: email, // Initialize email field
    kode: ["", "", "", ""], // Initialize kode as an array of strings
  });

  const inputRefs = useRef([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = {
        ...formData,
        kode: parseInt(formData.kode.join(""), 10),
      };

      const response = await checkCodePassword(formDataToSend);
      nextStep(email);
    } catch (error) {
      // Error handling code remains the same
    }
  };

  // Update the kode value in formData on input change
  const handleKodeChange = (index, value) => {
    // Ensure value is only a single digit character
    value = value.slice(0, 1);
  
    const updatedKode = [...formData.kode];
    updatedKode[index] = value; // Update the value directly as strings
    setFormData({ ...formData, kode: updatedKode });
  
    // Move focus to the next input field if available
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <form
      className="flex flex-col bg-white drop-shadow-2xl px-10 py-12 w-full rounded-2xl mx-32 gap-6 justify-center"
      onSubmit={handleSubmit}
    >
      <div className="font-bold text-4xl text-cust-orange-normal">
        Kode Verifikasi
      </div>
      <div className="">
        Masukkan kode verifikasi yang telah kami kirim ke alamat email kamu
      </div>
      <div className="flex flex-row gap-6 font-bold text-cust-orange-normal">
        {[0, 1, 2, 3].map((index) => (
          <Input
            key={index}
            className={"font-normal h-20 text-center text-5xl"}
            type="text"
            maxLength={1}
            onChange={(e) => handleKodeChange(index, e.target.value)}
            value={formData.kode[index]} // Bind value from state
            ref={(el) => (inputRefs.current[index] = el)} // Assign ref to input
            required={true}
          />
        ))}
      </div>
      <div className="text-center text-cust-black-light-active">
        Kirim ulang kode verifikasi 0:54
      </div>
      <Button type={"submit"} variation={"primary-rectangle"}>
        Lanjut
      </Button>
      <Button
        className={"border-2 border-cust-orange-normal"}
        type={"button"}
        variation={"secondary-rectangle"}
        onClick={(email) => prevStep(email)}
      >
        Ganti Email
      </Button>
      <div className="text-red-500 font-bold text-center">
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </form>
  );
};

export default LupaPassword2;
