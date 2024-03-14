import { axiosInstance } from "../coreApi";

const handleLogin = async (body) => {
  try {
    const response = await axiosInstance.post("user", {
      username: body.username,
      password: body.password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const handleRegister = async (body) => {
  try {
    const response = await axiosInstance.post("user", {
      name: body.name,
      email: body.email,
      password: body.password,
      aktivitas: body.aktivitas,
      gender: body.gender,
      umur: body.umur,
      alamat: body.alamat,
      beratbadan: body.beratbadan,
      tinggibadan: body.tinggibadan,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { handleLogin, handleRegister };
