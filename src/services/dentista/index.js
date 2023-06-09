import axios from "axios";
import { saveAs } from "file-saver";

const URL = "";

const api = axios.create({
  baseURL: URL,
});

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };


export const register = (User, _callback) => {
    api
    .post(`/patients`, User, config)
    .then((response) => {
      _callback(response);
    })
    .catch((errors) => {
      _callback(errors.response);
    });
}

export const login = (Patient, _callback) => {
    api
      .post(`/patients/login`, Patient, config)
      .then((response) => {
        logout();
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("admin", JSON.stringify(response.data));
        _callback(response);
      })
      .catch((err) => {
        _callback(err.response);
      });
};


export const MeasurementsHistory = (_callback) => {
    const measurementsConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user().token}`,
      },
    };
  
    return api
      .get('/patients/history_measurements', measurementsConfig)
      .then((response) => _callback(response))
      .catch((err) => {
        _callback(err.response);
      });
};
  
export const MedicationHistoryById = (id, _callback) => {
    const measurementsConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user().token}`,
      },
    };
  
    return api
      .get(`/patients/history_medications/${id}`, measurementsConfig)
      .then((response) => response.data)
      .catch((err) => {
        _callback(err.response);
      });
};