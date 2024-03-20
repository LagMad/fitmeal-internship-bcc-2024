import { axiosInstance } from "../coreApi";

// const handleLogin = async (body) => {
//   try {
//     const response = await axiosInstance.post("v1/user/login", {
//       email: body.email,
//       password: body.password,
//     });

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

const handleLogin = async (body) => {
  try {
    const response = await axiosInstance.post("v1/user/login", {
      email: body.email,
      password: body.password,
    });

    const { token } = response.data;
    window.localStorage.setItem("token", token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const handleRegister = async (body) => {
  try {
    const response = await axiosInstance.post("v1/user/register", {
      userName: body.userName,
      email: body.email,
      password: body.password,
      aktivitas: body.aktivitas,
      gender: body.gender,
      umur: body.umur,
      alamat: body.alamat,
      beratBadan: body.beratBadan,
      tinggiBadan: body.tinggiBadan,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { handleLogin, handleRegister };
