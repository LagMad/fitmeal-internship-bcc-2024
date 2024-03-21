import { axiosInstance } from "../coreApi";

const getMealData = async () => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await axiosInstance.get(`v1/meal/get`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const tambahNutrisi = async (body) => {
  try {
    const token = window.localStorage.getItem("token");
    const response = await axiosInstance.post(
      "v1/user/tambah-nutrisi",
      {
        kalori: body.kalori,
        protein: body.protein,
        karbohidrat: body.karbohidrat,
        lemak: body.lemak,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getDailyNutritionData = async () => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await axiosInstance.get(`v1/user/daily-nutrition`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getMealData, getDailyNutritionData, tambahNutrisi };
