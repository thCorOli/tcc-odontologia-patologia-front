import axios from "axios";

const URL = "//127.0.0.1:3001";

const api = axios.create({
  baseURL: URL,
});
var config = {
  headers: { "Access-Control-Allow-Origin": "*" },
};

export const ResetPasswordTokenRequest = (user, _callback) => {
  api
    .post(`/patients/reset_password`, user, config)
    .then((response) => {
      _callback(response);
    })
    .catch((err) => {
      _callback(err);
    });
};

export const ResetPasswordDoctorTokenRequest = (user, _callback) => {
  api
    .post(`/doctors/reset_password`, user, config)
    .then((response) => {
      _callback(response);
    })
    .catch((err) => {
      _callback(err);
    });
};