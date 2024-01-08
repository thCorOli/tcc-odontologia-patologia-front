import api from "../utils/api";
import { setTokenCookie, removeTokenCookie } from "../utils/cookie";

export const logoutCookie = () => {
  removeTokenCookie();
};

export const login = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);

    if (response.status >= 200 && response.status <= 203) {
      setTokenCookie(response.data.token);
      return response;
    }
  } catch (error) {
    if (error.response) {
      throw new Error(
        `Erro ${error.response.status}: ${error.response.data.message}`,
      );
    } else if (error.request) {
      throw new Error("Erro de rede ou o servidor não respondeu.");
    } else {
      throw new Error("Erro desconhecido ao configurar a requisição.");
    }
  }
};