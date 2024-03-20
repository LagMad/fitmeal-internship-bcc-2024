import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SVGs from "../../components/shared/SVGs";

import Button from "../../components/ui/Button";
import { getUserData } from "../../api/services/profile";
import DashboardLayout from "../../components/layout/DashboardLayout";
import DashboardMenu from "../../components/shared/DashboardMenu";
import Salad from "../../assets/Salad1.png";

const RencanaMakan = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);

  const getUser = async () => {
    try {
      const response = await getUserData();
      console.log("ini data :", response.data);
      setUserData(response.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getUser();
  });

  return (
    <div>
      <DashboardLayout>
        <div className="flex flex-col mx-32 gap-5 mb-10 z-0">
          <div className="ml-[88px] font-normal text-cust-orange-normal text-xl">
            Rencana Makan
          </div>
          <div className="flex flex-row gap-5">
            <DashboardMenu />
            <div className="grid grid-cols-3 gap-10 flex-col w-full h-fit justify-center items-center">
              <div className="flex flex-col bg-white drop-shadow-2xl rounded-2xl py-6 px-10 gap-5">
                <div className="flex flex-row justify-between items-center">
                  <div className="text-cust-orange-normal font-bold text-xl">
                    Senin
                  </div>
                  <div className="text-cust-black-light-active">
                    11 Maret 2024
                  </div>
                </div>
                <div className="flex w-full bg-cust-green-light-active justify-center items-center rounded-2xl py-5">
                  <img className="" src={Salad} alt="salad" />
                </div>
                <div className="flex w-full font-bold text-cust-orange-normal text-3xl">
                  Salad
                </div>
                <div className="flex flex-col w-full gap-3">
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Protein />
                      <div className="text-lg">Protein</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      48 gram
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Karbohidrat />
                      <div className="text-lg">Karbohidrat</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      325 gram
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Lemak />
                      <div className="text-lg">Lemak</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      20 gram
                    </div>
                  </div>
                </div>
                <Button type={"button"} variation={"primary-rectangle"}>Ubah</Button>
              </div>

              <div className="flex flex-col bg-white drop-shadow-2xl rounded-2xl py-6 px-10 gap-5">
                <div className="flex flex-row justify-between items-center">
                  <div className="text-cust-orange-normal font-bold text-xl">
                    Senin
                  </div>
                  <div className="text-cust-black-light-active">
                    11 Maret 2024
                  </div>
                </div>
                <div className="flex w-full bg-cust-green-light-active justify-center items-center rounded-2xl py-5">
                  <img className="" src={Salad} alt="salad" />
                </div>
                <div className="flex w-full font-bold text-cust-orange-normal text-3xl">
                  Salad
                </div>
                <div className="flex flex-col w-full gap-3">
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Protein />
                      <div className="text-lg">Protein</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      48 gram
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Karbohidrat />
                      <div className="text-lg">Karbohidrat</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      325 gram
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Lemak />
                      <div className="text-lg">Lemak</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      20 gram
                    </div>
                  </div>
                </div>
                <Button type={"button"} variation={"primary-rectangle"}>Ubah</Button>
              </div>

              <div className="flex flex-col bg-white drop-shadow-2xl rounded-2xl py-6 px-10 gap-5">
                <div className="flex flex-row justify-between items-center">
                  <div className="text-cust-orange-normal font-bold text-xl">
                    Senin
                  </div>
                  <div className="text-cust-black-light-active">
                    11 Maret 2024
                  </div>
                </div>
                <div className="flex w-full bg-cust-green-light-active justify-center items-center rounded-2xl py-5">
                  <img className="" src={Salad} alt="salad" />
                </div>
                <div className="flex w-full font-bold text-cust-orange-normal text-3xl">
                  Salad
                </div>
                <div className="flex flex-col w-full gap-3">
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Protein />
                      <div className="text-lg">Protein</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      48 gram
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Karbohidrat />
                      <div className="text-lg">Karbohidrat</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      325 gram
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Lemak />
                      <div className="text-lg">Lemak</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      20 gram
                    </div>
                  </div>
                </div>
                <Button type={"button"} variation={"primary-rectangle"}>Ubah</Button>
              </div>

              <div className="flex flex-col bg-white drop-shadow-2xl rounded-2xl py-6 px-10 gap-5">
                <div className="flex flex-row justify-between items-center">
                  <div className="text-cust-orange-normal font-bold text-xl">
                    Senin
                  </div>
                  <div className="text-cust-black-light-active">
                    11 Maret 2024
                  </div>
                </div>
                <div className="flex w-full bg-cust-green-light-active justify-center items-center rounded-2xl py-5">
                  <img className="" src={Salad} alt="salad" />
                </div>
                <div className="flex w-full font-bold text-cust-orange-normal text-3xl">
                  Salad
                </div>
                <div className="flex flex-col w-full gap-3">
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Protein />
                      <div className="text-lg">Protein</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      48 gram
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Karbohidrat />
                      <div className="text-lg">Karbohidrat</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      325 gram
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Lemak />
                      <div className="text-lg">Lemak</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      20 gram
                    </div>
                  </div>
                </div>
                <Button type={"button"} variation={"primary-rectangle"}>Ubah</Button>
              </div>

              <div className="flex flex-col bg-white drop-shadow-2xl rounded-2xl py-6 px-10 gap-5">
                <div className="flex flex-row justify-between items-center">
                  <div className="text-cust-orange-normal font-bold text-xl">
                    Senin
                  </div>
                  <div className="text-cust-black-light-active">
                    11 Maret 2024
                  </div>
                </div>
                <div className="flex w-full bg-cust-green-light-active justify-center items-center rounded-2xl py-5">
                  <img className="" src={Salad} alt="salad" />
                </div>
                <div className="flex w-full font-bold text-cust-orange-normal text-3xl">
                  Salad
                </div>
                <div className="flex flex-col w-full gap-3">
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Protein />
                      <div className="text-lg">Protein</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      48 gram
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Karbohidrat />
                      <div className="text-lg">Karbohidrat</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      325 gram
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Lemak />
                      <div className="text-lg">Lemak</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      20 gram
                    </div>
                  </div>
                </div>
                <Button type={"button"} variation={"primary-rectangle"}>Ubah</Button>
              </div>

              <div className="flex flex-col bg-white drop-shadow-2xl rounded-2xl py-6 px-10 gap-5">
                <div className="flex flex-row justify-between items-center">
                  <div className="text-cust-orange-normal font-bold text-xl">
                    Senin
                  </div>
                  <div className="text-cust-black-light-active">
                    11 Maret 2024
                  </div>
                </div>
                <div className="flex w-full bg-cust-green-light-active justify-center items-center rounded-2xl py-5">
                  <img className="" src={Salad} alt="salad" />
                </div>
                <div className="flex w-full font-bold text-cust-orange-normal text-3xl">
                  Salad
                </div>
                <div className="flex flex-col w-full gap-3">
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Protein />
                      <div className="text-lg">Protein</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      48 gram
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Karbohidrat />
                      <div className="text-lg">Karbohidrat</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      325 gram
                    </div>
                  </div>
                  <div className="flex flex-row w-full justify-between items-center text-black font-normal">
                    <div className="flex flex-row w-2/3 justify-start items-center gap-3">
                      <SVGs.Lemak />
                      <div className="text-lg">Lemak</div>
                    </div>
                    <div className="flex text-sm w-1/3 justify-end items-end">
                      20 gram
                    </div>
                  </div>
                </div>
                <Button type={"button"} variation={"primary-rectangle"}>Ubah</Button>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default RencanaMakan;
