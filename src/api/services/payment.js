import { axiosInstance } from "../coreApi";

const payPremium = async (body) => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await axiosInstance.post(
      "v1/user/top-up",
      {
        amount: body.amount,
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

export { payPremium };