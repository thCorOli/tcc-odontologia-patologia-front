import api from "../general/utils/api";
import jwt_decode from "jwt-decode";
import { getTokenCookie } from "../general/utils/cookie";


export const getId = () => {
  const token = getTokenCookie("token");
  const decodedToken = jwt_decode(token);
  return decodedToken.dentist_id;
}

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
  let dentistId = getId()
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
  let dentistId = getId()
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
  let dentistId = getId()
  api
  .get(`dentists/${dentistId}/patients`)
  .then((response) => {
    _callback(response);
  }).catch((errors) => {
    _callback(errors.response);
  });
}

export const submitForm = (FormAnswer, _callback) => {
  let dentistId = getId();
   api
    .post(`dentists/${dentistId}/form_submissions`, FormAnswer)
    .then((response) => {
      _callback(response);
    })
    .catch((err) => {
      _callback(err.response);
      console.log(err.response)
    });
};

export const listLabs = (_callback) => {
   api
    .get(`dentists/list_labs`)
    .then((response) => _callback(response))
    .catch((err) => {
      _callback(err.response);
    });
};

export const getHistoryFormsPatient = (id,_callback) => {
  let dentistId = getId();
  api
  .get(`dentists/${dentistId}/patients/${id}/form_submissions`)
  .then((response) => _callback(response))
  .catch((err) => {
    _callback(err.response);
  });
}

