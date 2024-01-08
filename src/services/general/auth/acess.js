import api from "../utils/api";
import { setTokenCookie, removeTokenCookie } from "../utils/cookie";

export const login = async (credentials, _callback) => {
  console.log("AAA", credentials);
    api
      .post(`patients/login`, credentials)
      .then((response) => {
        logout();
        setTokenCookie(response.data.token);
        _callback(response);
      })
      .catch((err) => {
        _callback(err.response);
      });
};

export const logout = () => {
  removeTokenCookie();
};