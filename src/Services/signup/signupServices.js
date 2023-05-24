import axios from "axios";

export const signupServices = (email, password, firstName, dataOfBirth) => {
  return axios.post("/api/auth/signup", {
    email: email,
    password: password,
    firstName: firstName,
    dataOfBirth: dataOfBirth,
  });
};
