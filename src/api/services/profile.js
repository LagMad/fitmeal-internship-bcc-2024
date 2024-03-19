import { axiosInstance } from "../coreApi";

const getUserData = async () => {
  const token = window.localStorage.getItem("token");
  const userId = window.localStorage.getItem("userId");

  try {
    const response = await axiosInstance.get(`v1/user/get/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);  
    return response.data;
  } catch (error) {
    throw error;
  }
};

const editUserData = async (body) => {
  const token = window.localStorage.getItem("token");
  const userId = window.localStorage.getItem("userId");
  try {
    const response = await axiosInstance.patch(
      `v1/user/edit-profile/${userId}`,
      {
        userName: body.userName,
        umur: body.umur,
        alamat: body.alamat,
        beratBadan: body.beratBadan,
        tinggiBadan: body.tinggiBadan,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const changePassword = async (oldPassword, newPassword, confirmPassword) => {
  const token = window.localStorage.getItem("token");
  const userId = window.localStorage.getItem("userId");
  try {
    const response = await axiosInstance.patch(
      `v1/user/edit-profile/change-password/${userId}`,
      {
        oldPassword,
        newPassword,
        confirmPassword
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getUserData, editUserData, changePassword };
