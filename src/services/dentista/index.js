import { saveAs } from "file-saver";
import api from "../general/utils/api";
import {} from "../general/auth/index";

export const register = (credentials, _callback) => {
    api
    .post(`/`, credentials)
    .then((response) => {
      _callback(response);
    })
    .catch((errors) => {
      _callback(errors.response);
    });
}

export const registerPatient = (Patient,_callback) => {
  api
  .post(`/`, Patient)
  .then((response) => {
    _callback(response);
  })
  .catch((errors) => {
    _callback(errors.response);
  });
  
}

export const getPatientById = (id,_callback) =>{
  api
  .get(`/${id}`)
  .then((response) => {
    _callback(response);
  })
  .catch((errors) => {
    _callback(errors.response);
  });

}

export const listPatient = (_callback) => {
  api
  .get("/")
  .then((response) => {
    _callback(response);
  }).catch((errors) => {
    _callback(errors.response);
  });
}


export const MedicationHistoryById = (id, _callback) => {
    api
      .get(`patients/history_medications/${id}`)
      .then((response) => response.data)
      .catch((err) => {
        _callback(err.response);
      });
};


export const submitExam = (FormAnswer, _callback) => {
   api
    .post("measurements", FormAnswer)
    .then((response) => {
      _callback(response);
    })
    .catch((err) => {
      _callback(err.response);
    });
};

export const formHistoryCistoPat = (_callback) => {
  return api
    .get("patients/history_measurements")
    .then((response) => _callback(response))
    .catch((err) => {
      _callback(err.response);
    });
};