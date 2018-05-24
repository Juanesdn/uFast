import firebase from 'firebase'; 
import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER,
  REGISTER_USER,
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESS

} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSucces(dispatch, user))
      .catch(() => loginUserFailed(dispatch));
  };
};

export const registerUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => registerUserSuccess(dispatch, user))
      .catch(() => registerUserFailed());
  };
};

const registerUserFailed = (dispatch) => {
  dispatch({ type: REGISTER_USER_FAILED });
};

const registerUserSuccess = (dispatch, user) => {
  dispatch({ 
    type: REGISTER_USER_SUCCESS,
    payload: user
   });
};

const loginUserFailed = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAILED });
};

const loginUserSucces = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
