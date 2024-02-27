import axios from "axios";
import {logout} from "../general/auth/index"


const URL = "http://127.0.0.1:3001/api";

const api = axios.create({
  baseURL: URL,
});

const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":"*", 
        "Access-Control-Allow-Headers":"*"
    },
  };

const user = () => {
    return JSON.parse(localStorage.getItem("user"));
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


