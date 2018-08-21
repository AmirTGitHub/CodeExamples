import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { GET_CURRENT_USER, GET_ERRORS } from "./types";

export const registerUser = (newUser, history) => async dispatch => {
  let err;
  try {
    await axios.post("/api/user/register", newUser);
    history.push("/login");
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const loginUser = (user, history) => async dispatch => {
  let error;
  let loginUser;
  try {
    //get token
    const getToken = await axios.post("/api/user/login", user);
    const { token } = getToken.data;
    //save the token in the localStorage
    localStorage.setItem("jwtToken", token);
    // set authentication header
    setAuthToken(token);
    //get the user data from token
    loginUser = jwt_decode(token);
    dispatch(setCurrentUser(loginUser));
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const setCurrentUser = user => {
  return {
    type: GET_CURRENT_USER,
    payload: user
  };
};
