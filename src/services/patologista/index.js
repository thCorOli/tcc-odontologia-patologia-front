import axios from "axios";
import { saveAs } from "file-saver";

const URL = "";

const api = axios.create({
  baseURL: URL,
});

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
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

export const listSelectPatient = (_callback) => {
  const listPatienConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${user().token}`,
    },
  };

  return api
    .get("/doctors/patient_list", listPatienConfig)
    .then((response) => response.data)
    .catch((err) => {
      _callback(err.response);
    });
};

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

export const submitForm = (FormAnswer, _callback) => {
    const submitMedicationConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${user().token}`,
      },
    };
  
    api
      .post("/medications", FormAnswer, submitMedicationConfig)
      .then((response) => {
        _callback(response);
      })
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
        .post(`patients/resend_email_confirmation`, email, config)
        .then(_callback)
        .catch((err) => {
        _callback(err); //ver tratamento de erro
        });

}

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
  

  function deleteCookie() {
    var today = new Date();
    today.setHours(today.getHours() - 24);
    const expire = "expires=" + today.toUTCString();
    var cvalue = "False";
    document.cookie = "isAdmin=" + cvalue + ";" + expire + ";path=/";
  }
  
  export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    deleteCookie();
  };
  

  
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
