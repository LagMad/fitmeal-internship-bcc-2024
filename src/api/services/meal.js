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

export { getMealData };
