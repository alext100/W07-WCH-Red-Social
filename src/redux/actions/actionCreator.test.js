import { getUser } from "../../factories/usersFactory";
import { userLoginAction } from "./actionCreator";
import actionTypes from "./actionTypes";

describe("Given a userLoginAction action creator", () => {
  describe("When it receives a user", () => {
    test("Then it should return a userLogin action with a user received", () => {
      const user = getUser();
      console.log("user: ", user);
      const expectedAction = {
        type: actionTypes.userLogin,
        user,
      };

      const actionResult = userLoginAction(user);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
