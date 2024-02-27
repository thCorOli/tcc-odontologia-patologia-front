import axios from "axios";

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

 
