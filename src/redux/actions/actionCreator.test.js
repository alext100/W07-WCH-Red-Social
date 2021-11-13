import { getUser } from "../../factories/usersFactory";
import { userLoginAction, userLogoutAction } from "./actionCreator";
import actionTypes from "./actionTypes";

describe("Given a userLoginAction action creator", () => {
  describe("When it receives a user", () => {
    test("Then it should return a userLogin action with a user received", () => {
      const user = getUser();
      const expectedAction = {
        type: actionTypes.userLogin,
        user,
      };

      const actionResult = userLoginAction(user);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a userLogoutAction action creator", () => {
  describe("When it invokes", () => {
    test("Then it should return a userLogout action", () => {
      const expectedAction = {
        type: actionTypes.userLogout,
      };

      const actionResult = userLogoutAction();

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
