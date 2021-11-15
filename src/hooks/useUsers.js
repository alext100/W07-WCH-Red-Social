import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../redux/actions/actionCreator";
import {
  createUserThunk,
  loadUsersThunk,
  loginUserThunk,
} from "../redux/thunks/userThunks";

const useUsers = () => {
  const dispatch = useDispatch();
  const { user, usersList } = useSelector(({ user, usersList }) => ({
    user,
    usersList,
  }));

  const userLogin = (user) => {
    dispatch(loginUserThunk(user));
  };

  const createUser = (user) => {
    dispatch(createUserThunk(user));
  };

  const isUserLoggedIn = useCallback(() => {
    const token = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
    );
    if (token) {
      const userData = jwtDecode(token.token);
      dispatch(userLoginAction(userData));
    }
  }, [dispatch]);

  const loadUsers = useCallback(() => {
    dispatch(loadUsersThunk());
  }, [dispatch]);

  return { user, usersList, userLogin, createUser, isUserLoggedIn, loadUsers };
};

export default useUsers;
