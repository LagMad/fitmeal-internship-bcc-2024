import React, { useState, useRef, useEffect } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { checkCodePassword } from "../../api/services/profile";

const LupaPassword2 = ({ nextStep, email, prevStep }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: email,
    kode: ["", "", "", ""],
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
      throw error;
    }
  };

  const handleKodeChange = (index, value) => {
    value = value.slice(0, 1);

    const updatedKode = [...formData.kode];
    updatedKode[index] = value;
    setFormData({ ...formData, kode: updatedKode });

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
            className={"font-normal h-10 text-center text-xl"}
            type="text"
            maxLength={1}
            onChange={(e) => handleKodeChange(index, e.target.value)}
            value={formData.kode[index]}
            ref={(el) => (inputRefs.current[index] = el)}
            required={true}
          />
        ))}
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
