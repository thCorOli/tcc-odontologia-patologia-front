import axios from "axios";
import { saveAs } from "file-saver";
import {logout} from "../general/acess"

const URL = "https://tcc-odontologia-back.onrender.com/api/patients";

const api = axios.create({
  baseURL: URL,
});

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

const user = () => {
    return JSON.parse(localStorage.getItem("user"));
};


export const register = (User, _callback) => {
    api
    .post(`/`, User, config)
    .then((response) => {
      _callback(response);
    })
    .catch((errors) => {
      _callback(errors.response);
    });
}

export const login = (Patient, _callback) => {
    api
      .post(`/login`, Patient, config)
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

export const MedicationHistoryById = (id, _callback) => {
    const measurementsConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user().token}`,
      },
    };
  
    return api
      .get(`/history_medications/${id}`, measurementsConfig)
      .then((response) => response.data)
      .catch((err) => {
        _callback(err.response);
      });
};

export const listPatient = (_callback) => {

}

export const submitExam = (FormAnswer, _callback) => {
  const submitMedicationConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${user().token}`,
    },
  };
  api
    .post("/measurements", FormAnswer, submitMedicationConfig)
    .then((response) => {
      _callback(response);
    })
    .catch((err) => {
      _callback(err.response);
    });
};

export const formHistoryCistoPat = (_callback) => {
  const measurementsConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${user().token}`,
    },
  };

  return api
    .get('/history_measurements', measurementsConfig)
    .then((response) => _callback(response))
    .catch((err) => {
      _callback(err.response);
    });
};