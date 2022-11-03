import axios from "axios";

export const logoutFunc = async () => {
  try {
    await axios.delete("/logout");
  } catch (error) {
    console.log(error);
  }
};

export const setupLogin = (token) => {
  localStorage.setItem("token", token);
};
