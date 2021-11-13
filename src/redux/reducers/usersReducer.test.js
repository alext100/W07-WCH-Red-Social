import { getUser } from "../../factories/usersFactory";
import actionTypes from "../actions/actionTypes";
import usersReducer from "./usersReducer";

describe("Given usersReducer reducer", () => {
  describe("When it receives a user and userLogin action", () => {
    test("Then it should return a new user with isAuthenticated: true", () => {
      const initialUser = {
        isAuthenticated: false,
      };
      const user = getUser();

      const action = {
        type: actionTypes.userLogin,
        user: user,
      };
      const newUser = usersReducer(initialUser, action);

      expect(newUser).toHaveProperty("isAuthenticated", true);
    });
  });
});
