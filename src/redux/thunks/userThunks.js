import axios from "axios";
import jwtDecode from "jwt-decode";
import { loadUsersAction, userLoginAction } from "../actions/actionCreator";

const urlApi = process.env.REACT_APP_API_URL;
const localStorageKey = process.env.REACT_APP_LOCALSTORAGE_KEY;

export const loginUserThunk = (user) => async (dispatch) => {
  const response = await axios.post(urlApi + "/users/login", user);
  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(userLoginAction(user));
    localStorage.setItem(localStorageKey, JSON.stringify({ token: token }));
  } else {
    const error = new Error("Thunk error!");
    error.code = 400;
  }
};

export const createUserThunk = (user) => async (dispatch) => {
  const { data: newUser } = await axios.post(urlApi + "/users/register", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  dispatch(createUserThunk(newUser));
};

export const loadUsersThunk = () => {
  return async (dispatch) => {
    const { data: users } = await axios.get(urlApi + "/users");
    dispatch(loadUsersAction(users));
  };
};
