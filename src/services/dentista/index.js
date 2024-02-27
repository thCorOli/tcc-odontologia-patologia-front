import { saveAs } from "file-saver";
import api from "../general/utils/api";
import jwt_decode from "jwt-decode";
import { getTokenCookie } from "../general/utils/cookie";

const token = getTokenCookie("token");
const decodedToken = jwt_decode(token);
const dentistId = decodedToken.dentist_id;

export const register = (credentials, _callback) => {
    api
    .post(`/dentists`, credentials)
    .then((response) => {
      _callback(response);
    })
    .catch((errors) => {
      _callback(errors.response);
    });
}

export const registerPatient = (patient,_callback) => {
  
  api
  .post(`dentists/${dentistId}/register_patients`, patient)
  .then((response) => {
    _callback(response);
  })
  .catch((errors) => {
    _callback(errors.response);
  });
  
}

export const getPatientById = (id,_callback) =>{
  api
  .get(`dentists/${dentistId}/patients/${id}`)
  .then((response) => {
    _callback(response);
  })
  .catch((errors) => {
    _callback(errors.response);
  });

}

export const listPatient = (_callback) => {
  api
  .get(`dentists/${dentistId}/patients`)
  .then((response) => {
    _callback(response);
  }).catch((errors) => {
    _callback(errors.response);
  });
}

export const submitForm = (FormAnswer, _callback) => {
   api
    .post(`dentists/${dentistId}/form_submissions`, FormAnswer)
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