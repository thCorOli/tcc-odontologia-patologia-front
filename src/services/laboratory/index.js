import axios from "axios";
import {logout} from "../general/acess";
import { saveAs } from "file-saver";

const URL = "/laboratory";

const api = axios.create({
  baseURL: URL,
});

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

const user = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export const register = (User, _callback) => {
    api
    .post(User, config)
    .then((response) => {
      _callback(response);
    })
    .catch((errors) => {
      _callback(errors.response);
    });
}

export const login = (Patient, _callback) => {
  api
    .post(`/logiLaboratoy`, Patient, config)
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

export const listSelectPatient = (_callback) => {
  const listPatienConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${user().token}`,
    },
  };

  return api
    .get("/patient_list", listPatienConfig)
    .then((response) => response.data)
    .catch((err) => {
      _callback(err.response);
    });
};


export const resendEmail = (email,_callback) => {
    const config = {
        headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${user().token}`,
        },
    };
    api
        .post(`/resend_email_confirmation`, email, config)
        .then(_callback)
        .catch((err) => {
        _callback(err); //ver tratamento de erro
        });

} 

 

/*  
export const downloadMeasurements = (_callback) => {
  const measurementsConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${admin().token}`,
    },
    responseType: "blob",
  };

  api
    .get("/admins/download_excel_measurements", measurementsConfig)
    .then((response) => {
      var blob = new Blob([response.data], {
        type: "application/zip",
      });
      //provavel gambiarra, talvez seja melhor criar o nome pelo proprio javascript
      const filename = response.headers["content-disposition"].split(
        "UTF-8''"
      )[1];
      saveAs(blob, filename);
    })
    .catch((err) => _callback(err.response));
};

export const history = (_callback) => {
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


*/
