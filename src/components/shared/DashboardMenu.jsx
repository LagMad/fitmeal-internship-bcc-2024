import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SVGs from "./SVGs";

const DashboardMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const orange = "#FA6815";
  const grey = "#B0B0B0";

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col bg-white drop-shadow-xl h-fit rounded-lg px-5 py-7 gap-10">
      <button onClick={() => navigate("/dashboard/lacaknutrisi")}>
        <SVGs.Menu fill={isActive("/dashboard/lacaknutrisi") ? orange : grey} />
      </button>
      <button onClick={() => navigate("/dashboard/rencanamakan")}>
        <SVGs.RencanaMakan
          fill={isActive("/dashboard/rencanamakan") ? orange : grey}
        />
      </button>
      <button onClick={() => navigate("/dashboard")}>
        <SVGs.ProfileDashboard fill={isActive("/dashboard") ? orange : grey} />
      </button>
    </div>
  );
};

export default DashboardMenu;
