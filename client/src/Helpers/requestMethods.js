import axios from "axios";

const BASE_URL = "http://localhost:3000/";

let request = axios.create({ baseURL: BASE_URL });

request.interceptors.request.use(
  (config) => {
    const TOKEN = localStorage.getItem("token");

    if (TOKEN) {
      config.headers = { Authorization: `Bearer ${TOKEN}` };
    }

    return config;
  },
  (error) => {
    console.log(error);
  }
);

export default request;
