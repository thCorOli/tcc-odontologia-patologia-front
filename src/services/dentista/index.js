import { saveAs } from "file-saver";
import api from "../general/utils/api";
import { getTokenCookie } from "../general/utils/cookie";

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


export const MedicationHistoryById = (id, _callback) => {
    api
      .get(`patients/history_medications/${id}`)
      .then((response) => response.data)
      .catch((err) => {
        _callback(err.response);
      });
};

export const listPatient = (_callback) => {

}

export const submitExam = (FormAnswer, _callback) => {
   api
    .post("patients/measurements", FormAnswer)
    .then((response) => {
      _callback(response);
    })
    .catch((err) => {
      _callback(err.response);
    });
};

export const formHistoryCistoPat = (_callback) => {
  return api
    .get('patients/history_measurements')
    .then((response) => _callback(response))
    .catch((err) => {
      _callback(err.response);
    });
};