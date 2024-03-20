import React, { useState, useEffect } from "react";
import LoginForm from "../auth/LoginForm";
import FooterALT from "./FooterALT";
import { useNavigate } from "react-router-dom";
import LoginPict from "../../assets/LoginPict.png";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { handleLogin } from "../../api/services/auth";
import { changePassword, forgotPassword } from "../../api/services/profile";
import Dialogue from "../ui/Dialogue";

const LupaPassword3 = ({ email }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isStatusPasswordChange, setIsStatusPasswordChange] = useState(false);
  const [formData, setFormData] = useState({
    email: email,
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await forgotPassword(formData);
      setIsStatusPasswordChange(true);
    } catch (error) {
      console.log(error);
      if (error.response) {
        const { status } = error.response;
        if (status === 500) {
          setErrorMessage("Email atau password salah. Silakan coba lagi!");
        } else if (status === 400) {
          setErrorMessage("Itu bukan email. Silakan coba lagi!");
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

  const togglePasswordVisibility = (inputName) => {
    switch (inputName) {
      case "newPassword":
        setShowNewPassword(!showNewPassword);
        break;
      case "confirmPassword":
        setShowConfirmPassword(!showConfirmPassword);
        break;
      default:
        break;
    }
  };

  return (
    <>
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
            className={"relative font-normal"}
            type={showNewPassword ? "text" : "password"}
            name={"newPassword"}
            placeholder={"Password baru"}
            onChange={(e) =>
              setFormData({ ...formData, newPassword: e.target.value })
            }
            required={true}
          >
            <button
              className={
                "absolute right-5 top-2 text-cust-orange-normal font-bold"
              }
              onClick={() => togglePasswordVisibility("newPassword")}
            >
              {showNewPassword ? "hide" : "show"}
            </button>
          </Input>
          <Input
            className={"relative font-normal"}
            type={showConfirmPassword ? "text" : "password"}
            name={"confirmPassword"}
            placeholder={"Konfirmasi Password baru"}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            required={true}
          >
            <button
              className={
                "absolute right-5 top-2 text-cust-orange-normal font-bold"
              }
              onClick={() => togglePasswordVisibility("confirmPassword")}
            >
              {showConfirmPassword ? "hide" : "show"}
            </button>
          </Input>
          {formData.newPassword !== formData.confirmPassword && (
            <div className="text-red-500 text-sm font-Poppins font-bold">
              Password tidak cocok.
            </div>
          )}
          <div className="text-red-500 text-sm font-Poppins font-bold text-center">
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </div>
        <Button type={"submit"} variation={"primary-rectangle"}>
          Simpan
        </Button>
        <Button
          className={"border-2 border-cust-orange-normal"}
          type={"button"}
          variation={"secondary-rectangle"}
          onClick={() => navigate("/login")}
        >
          Batal
        </Button>
        <div className="text-red-500 font-bold text-center">
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </form>
      {isStatusPasswordChange && (
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
          onClick={() => {
            setIsStatusPasswordChange(false);
            navigate("/login");
          }}
        />
      )}
    </>
  );
};

export default LupaPassword3;
