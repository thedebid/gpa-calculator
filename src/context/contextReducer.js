//Reducer => a function that takes in the old state, and an action => return new state
import gpaData from "./../data/GPA.json";

const contextReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_COURSE":
      gpaData = state.filter((t) => t.id === action.payload);
      return gpaData;
    case "ADD_TRANSACTION":
      gpaData = [action.payload, ...state];
      return gpaData;
    default:
      return state;
  }
};

export default contextReducer;
