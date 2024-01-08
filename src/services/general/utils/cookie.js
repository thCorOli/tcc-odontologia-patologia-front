import Cookies from "js-cookie";

const TOKEN_COOKIE_NAME = "token";

export const setTokenCookie = (token) => {
  Cookies.set(TOKEN_COOKIE_NAME, token, { secure: true, sameSite: "None" });
};

export const getTokenCookie = () => {
  return Cookies.get(TOKEN_COOKIE_NAME);
};

export const removeTokenCookie = () => {
  Cookies.remove(TOKEN_COOKIE_NAME);
};