import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
import initalGpaData from "./../data/GPA.json";
import { Grade } from "./../data/grade";
//const initailState = [];

export const GlobalContext = createContext(initalGpaData);
export const GlobalProvider = ({ children }) => {
  const [gpaData, dispatch] = useReducer(contextReducer, initalGpaData);
  //Action Creators
  const removeCourse = (id) => dispatch({ type: "REMOVE_COURSE", payload: id });

  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  const addSemester = (name) => {
    dispatch({ type: "ADD_SEMESTER", payload: name });
  };
  const removeSemester = (name) => {
    dispatch({ type: "REMOVE_SEMESTER", payload: name });
  };

  const getCGPA = () => {
    return 1;
  };

  //calculate SGPA
  const getSGPA = (semester) => {
    const points = getTotalPoints(semester);
    const credits = getTotalCredits(semester);
    const sgpa = points / credits;
    return sgpa.toFixed(2);
  };

  //calculate total honor point earned in a semester
  const getTotalPoints = (semester) => {
    return semester.courses.reduce((point, course) => {
      return point + convertGrade(course.grade) * course.credit;
    }, 0);
  };

  //calculate total number of credits registred in a semester
  const getTotalCredits = (semester) => {
    return semester.courses.reduce((credits, course) => {
      return (credits = credits + course.credit);
    }, 0);
  };

  //convert grade into point
  const convertGrade = (grade) => {
    const point = Grade.find((a) => a.Grade === grade);
    return point ? point.Point : 0;
  };

  return (
    <GlobalContext.Provider
      value={{
        removeCourse,
        addTransaction,
        addSemester,
        removeSemester,
        getCGPA,
        getSGPA,
        gpaData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
