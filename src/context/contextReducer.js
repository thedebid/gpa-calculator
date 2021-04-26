//Reducer => a function that takes in the old state, and an action => return new state
import { Semesters as Semes } from "./../data/semesters";

const contextReducer = (state, action) => {
  let semesters;
  switch (action.type) {
    case "ADD_SEMESTER":
      // console.log(Semes);
      const sindex = Semes.find((a) => a.name === action.payload);

      // console.log(s.index);
      semesters = [...state];
      // console.log(semesters.length);
      const status = semesters.find((e) => e.name === action.payload);

      if (status === undefined) {
        const semester = {
          name: action.payload,
          courses: [],
          index: sindex.index,
        };
        semesters.push(semester);
        localStorage.setItem("GPAData", JSON.stringify(semesters));
        return semesters;
      } else {
        return state;
      }

    case "REMOVE_SEMESTER":
      var semindex = state.indexOf(action.payload);
      semesters = [...state];
      semesters.splice(semindex, 1);
      localStorage.setItem("GPAData", JSON.stringify(semesters));
      return semesters;

    case "ADD_COURSE":
      var index = state.findIndex(
        (s) => s.name === action.payload.selectedSemester
      );
      if (index === -1) return;
      semesters = [...state];
      semesters[index].courses.push(action.payload.course);
      localStorage.setItem("GPAData", JSON.stringify(semesters));
      return semesters;

    case "REMOVE_COURSE":
      var semesterIndex = state.findIndex(
        (s) => s.name === action.payload.semester.name
      );
      const courseIndex = state[semesterIndex].courses.indexOf(
        action.payload.course
      );
      if (courseIndex === -1) return state;
      semesters = [...state];
      semesters[semesterIndex].courses.splice(courseIndex, 1);
      localStorage.setItem("GPAData", JSON.stringify(semesters));
      return semesters;

    case "IMPORT_JSON":
      localStorage.setItem("GPAData", action.payload);
      const data = JSON.parse(localStorage.getItem("GPAData")) || [];
      state = data.slice(0);
      // console.log(state);
      return state;
    default:
      return state;
  }
};

export default contextReducer;
