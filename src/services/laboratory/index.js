import api from "../general/utils/api";
import jwt_decode from "jwt-decode";
import { getTokenCookie } from "../general/utils/cookie";


export const getId = () => {
  const token = getTokenCookie("token");
  const decodedToken = jwt_decode(token);
  return decodedToken.lab_id;
}


export const register = (User, _callback) => {
    api
    .post(User)
    .then((response) => {
      _callback(response);
    })
    .catch((errors) => {
      _callback(errors.response);
    });
}

export const getListForms = (_callback) => {
  const lab_id = getId();
  api
    .get(`labs/${lab_id}/list_form_submissions`)
    .then((response) => {
      _callback(response)
    })
    .catch((err) => {
      _callback(err.response);
    });
};

export const getPatientById = (id,_callback) =>{
  const lab_id = getId();
  api
  .get(`/labs/${lab_id}/patients/${id}/form_submissions`)
  .then((response) => {
    _callback(response);
  })
  .catch((errors) => {
    _callback(errors.response);
  });
}

export const getPatientInfo = (id,_callback) => {
  const lab_id = getId();
  api
  .get(`labs/${lab_id}/form_submissions/${id}/patient`)
  .then((response)=>{
    _callback(response);
  })
  .catch((err) => {
    _callback(err.response)
  })
}


 
