import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../redux/thunks/userThunks";

const useUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users);

  const userLogin = (user) => {
    dispatch(loginUserThunk(user));
  };

  return { users, userLogin };
};

export default useUsers;
