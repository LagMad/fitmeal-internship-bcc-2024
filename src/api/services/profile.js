import { axiosInstance } from "../coreApi";

const getUserData = async () => {
  const token = window.localStorage.getItem("token");

  try {
    const response = await axiosInstance.get(`v1/user/get-user-profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }); 
    return response.data;
  } catch (error) {
    throw error;
  }
};

const editUserData = async (body) => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await axiosInstance.patch(
      `v1/user/edit-profile`,
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
  try {
    const response = await axiosInstance.patch(
      `v1/user/edit-profile/change-password`,
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

const getCodePassword = async (body) => {
  try {
    const response = await axiosInstance.post("v1/user/forgot-password/get", {
      email: body.email,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const checkCodePassword = async (body) => {
  try {
    const response = await axiosInstance.post("v1/user/forgot-password", {
      email: body.email,
      kode: body.kode,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const forgotPassword = async (body) => {
  try {
    const response = await axiosInstance.post("v1/user/forgot-password/change-password", {
      email: body.email,
      newPassword: body.newPassword,
      confirmPassword: body.confirmPassword
    })
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}


export { getUserData, editUserData, changePassword, getCodePassword, checkCodePassword, forgotPassword };
