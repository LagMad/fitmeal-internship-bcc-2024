import React from "react";
import { useNavigate } from "react-router-dom";
import SVGs from "./SVGs";

const DashboardMenu = () => {
const navigate = useNavigate()

  return (
    <div className="flex flex-col bg-white drop-shadow-xl h-fit rounded-lg px-5 py-7 gap-10">
      <button onClick={() => navigate("/lacaknutrisi")}>
        <SVGs.Menu />
      </button>
      <button>
        <SVGs.RencanaMakan />
      </button>
      <button onClick={() => navigate("/dashboard")}>
        <SVGs.ProfileDashboard />
      </button>
    </div>
  );
};

export default DashboardMenu;
