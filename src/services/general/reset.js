import axios from "axios";

const URL = "//127.0.0.1:3001";

const api = axios.create({
  baseURL: URL,
});
var config = {
  headers: { "Access-Control-Allow-Origin": "*" },
};

export const ResetPasswordRequest = (email, _callback) => {
  api
    .post(`/patients/forgot_password`, email, config)
    .then((response) => {
      _callback(response);
    })
    .catch((err) => {
      _callback(err);
    });
};

export const ResetPasswordLabRequest = (email, _callback) => {
  api
    .post(`/doctors/forgot_password`, email, config)
    .then((response) => {
      _callback(response);
    })
    .catch((err) => {
      _callback(err);
    });
};