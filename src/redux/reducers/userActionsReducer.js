import actionTypes from "../actions/actionTypes";

const userActionsReducer = (usersList = [], action) => {
  let newUsersList;

  switch (action.type) {
    case actionTypes.createUser:
      newUsersList = [...usersList, action.user];
      break;

    case actionTypes.loadUsers:
      newUsersList = [...action.users];
      break;

    default:
      newUsersList = usersList;
  }
  return newUsersList;
};

export default userActionsReducer;
