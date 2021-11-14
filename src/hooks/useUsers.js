import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../redux/thunks/userThunks";

const useUsers = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);

  const userLogin = (user) => {
    dispatch(loginUserThunk(user));
  };

  return { user, userLogin };
};

export default useUsers;
