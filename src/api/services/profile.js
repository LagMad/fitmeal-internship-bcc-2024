import { axiosInstance } from "../coreApi";

const getUserData = async () => {
  const token = window.localStorage.getItem("token");
  const userId = window.localStorage.getItem("userId");

  try {
    const response = await axiosInstance.get(`v1/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};




// const editUserData = async (body) => {
//   const token = window.localStorage.getItem("token");
//   try {
//     const response = await axiosInstance.put(
//       `v1/user/edit-profile/${body.id}`, // Assuming the user's ID is included in the body
//       {
//         userName: body.userName,
//         email: body.email,
//         password: body.password,
//         aktivitas: body.aktivitas,
//         gender: body.gender,
//         umur: body.umur,
//         alamat: body.alamat,
//         beratBadan: body.beratBadan,
//         tinggiBadan: body.tinggiBadan,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export { getUserData };
