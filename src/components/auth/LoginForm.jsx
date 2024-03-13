import React, {useState} from "react";
import LoginPict from "../../assets/LoginPict.png";
import Input from "../ui/Input.jsx"
import Button from "../ui/Button";
import SVGs from "../shared/SVGs.jsx";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div className="flex flex-row w-full h-auto pt-10 font-Poppins mb-16">
      <div className="w-1/2">
        <div className="relative">
          <img className="absolute z-40" src={LoginPict} alt="login" />
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-start">
        <div className="flex flex-col bg-white drop-shadow-2xl px-10 py-12 w-full rounded-2xl mx-32 gap-6 justify-center">
            <div className="justify-start items-start w-full text-lg">
                Selamat datang di {" "} <span className="text-cust-orange-normal font-RammettoOne text-xl">FitMeal</span>
            </div>
            <div className="font-bold text-4xl text-cust-orange-normal">
                Masuk
            </div>
            <div className="flex flex-col gap-6 font-bold text-cust-orange-normal">
                <div className="">
                    Username
                    <Input className={"font-normal"} type="text" name={"username"} placeholder={"Masukkan username kamu"} required={true}/>
                </div>
                <div className="">
                    Password
                    <Input className={"relative font-normal"} type={showPassword ? 'text' : 'password'} name={"password"} placeholder={"Masukkan password kamu"} required={true}/>
                </div>
            </div>
            <div className="text-cust-orange-normal font-semibold self-end">
                Lupa Password?
            </div>
            <Button type={"button"} variation={"primary-rectangle"}>Masuk</Button>
            <div className="self-center">
                Belum punya akun? <a className="font-semibold text-cust-orange-normal" href="/register">Daftar</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
