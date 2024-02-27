import api from "../utils/api";
import { setTokenCookie, removeTokenCookie, getTokenCookie } from "../utils/cookie";

export const loginDentist = async (credentials, _callback) => {
    api
      .post(`dentists/login`, credentials)
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

export const loginLaboratory = (lab, _callback) => {
  api
    .post(`labs/login`, lab)
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