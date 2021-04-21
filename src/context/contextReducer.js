//Reducer => a function that takes in the old state, and an action => return new state
import gpaData from "./../data/GPA.json";

const contextReducer = (state, action) => {
  // console.log(gpaData);
  switch (action.type) {
    case "REMOVE_COURSE":
      gpaData = state.filter((t) => t.id === action.payload);
      return gpaData;
    case "ADD_TRANSACTION":
      gpaData = [action.payload, ...state];
      return gpaData;
    case "ADD_SEMESTER":
      const semester = { name: action.payload, courses: [] };
      var semesters = [...state];
      semesters.push(semester);
      return semesters;
    case "REMOVE_SEMESTER":
      const index = state.indexOf(action.payload);
      var semesters = [...state];
      semesters.splice(index, 1);
      return semesters;
    default:
      return state;
  }
};

export default contextReducer;
