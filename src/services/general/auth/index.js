import api from "../utils/api";
import { setTokenCookie, removeTokenCookie, getTokenCookie } from "../utils/cookie";

export const loginDentist = async (credentials, _callback) => {
    api
      .post(`patients/login`, credentials)
      .then((response) => {
        logout();
        setTokenCookie(response.data.token);
        localStorage.setItem("user",Math.random())
        _callback(response);
      })
      .catch((err) => {
        _callback(err.response);
      });
};

export const loginLaboratory = (Patient, _callback) => {
  api
    .post(`laboratory/login`, Patient)
    .then((response) => {
      logout();
      setTokenCookie(response.data.token);
      localStorage.setItem("laboratory", Math.random());
      _callback(response);
    })
    .catch((err) => {
      _callback(err.response);
    });
};

export const logout = () => {
  removeTokenCookie();
};

export const isAuthenticated = () => {
  return !!getTokenCookie();
}