// export const addName = (newName) => {
//   return { type: "ADD_NAME", payload: newName };
// };

export const getDetails = (username, password) => {
  return { type: "GET_DETAILS", username: username, password: password };
};

// import { bindActionCreators } from "redux";

// const updateUserName = (username) => ({
//   type: "CHANGE_USERNAME",
//   payload: username,
// });
// const updatePassword = (password) => ({
//   type: "CHANGE_PASSWORD",
//   payload: password,
// });

// export const actionCreators = bindActionCreators(
//   {
//     updateUserName,
//     updatePassword,
//   }
//     store.dispatch
// );
