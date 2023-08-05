import axios from "axios";

const URL = "";

const api = axios.create({
  baseURL: URL,
});
var config = {
  headers: { "Access-Control-Allow-Origin": "*" },
};

export const logout = (email, _callback) => {
  api
    .post(`/patients/forgot_password`, email, config)
    .then((response) => {
      _callback(response);
    })
    .catch((err) => {
      _callback(err);
    });
};

export const login = () => {
    
}
