//Reducer => a function that takes in the old state, and an action => return new state

const contextReducer = (state, action) => {
  // console.log(gpaData);
  switch (action.type) {
    case "ADD_SEMESTER":
      var semesters = [...state];
      const status = semesters.find((e) => e.name === action.payload);
      if (status === undefined) {
        const semester = { name: action.payload, courses: [] };
        semesters.push(semester);
        return semesters;
      } else {
        return state;
      }
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
