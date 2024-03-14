import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fitmeal-62ca66e08dfd.herokuapp.com/v1/",
});

export { axiosInstance };
