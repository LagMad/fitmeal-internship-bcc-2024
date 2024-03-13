import React from "react";
import LoginForm from "../components/auth/LoginForm";
import FooterALT from "../components/shared/FooterALT";

const LoginPage = () => {
  return (
    <div>
      {/* LOGIN NAV */}
      <nav className="fixed top-0 left-0 z-50 w-screen h-20 flex justify-between items-center px-36 bg-white font-Poppins">
        <div className=" flex justify-between w-full items-center">
          <a className="flex w-1/6 font-RammettoOne text-cust-orange-normal items-center text-3xl" href="/">
            FitMeal
          </a>
        </div>
      </nav>

      {/* LOGIN FORM */}
      <main className="flex flex-col items-center w-full mt-16">
        <LoginForm />
      </main>

      {/* LOGIN FOOTER */}
      <FooterALT position={"right"}/>
    </div>
  );
};

export default LoginPage;
