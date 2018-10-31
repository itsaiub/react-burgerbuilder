import * as actionTypes from "./actionTypes";
import Axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
     let url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA-4bfBpGnieeiSrukp-47sD7Jk3QXKW-Y"

    if(!isSignup) {
       url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA-4bfBpGnieeiSrukp-47sD7Jk3QXKW-Y'
    }
    Axios.post(url, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFail(error));
      });
  };
};
