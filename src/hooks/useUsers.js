import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createUserThunk, loginUserThunk } from "../redux/thunks/userThunks";

const useUsers = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);

  const userLogin = (user) => {
    dispatch(loginUserThunk(user));
  };

  const createUser = (user) => {
    dispatch(createUserThunk(user));
  };

  return { user, userLogin, createUser };
};

export default useUsers;
