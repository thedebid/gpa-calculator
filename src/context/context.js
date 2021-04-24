import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
//import initalGpaData from "./../data/GPA.json";
import { Grade } from "./../data/grade";

// const initailState = [];

const initailState = JSON.parse(localStorage.getItem("GPAData")) || [];
//console.log(initailState);

export const GlobalContext = createContext(initailState);
export const GlobalProvider = ({ children }) => {
  const [gpaData, dispatch] = useReducer(contextReducer, initailState);
  //Action Creators

  const addCourse = (course) => {
    // const id = uuidv4();

    dispatch({ type: "ADD_COURSE", payload: course });
  };
  const addSemester = (name) => {
    dispatch({ type: "ADD_SEMESTER", payload: name });
  };
  const removeSemester = (name) => {
    dispatch({ type: "REMOVE_SEMESTER", payload: name });
  };

  const removeCourse = (semester, course) => {
    dispatch({ type: "REMOVE_COURSE", payload: { semester, course } });
  };

  const getCGPA = () => {
    let points = 0;
    let credits = 0;
    gpaData.forEach((element) => {
      points += getTotalPoints(element);
      credits += getTotalCredits(element);
    });
    const cgpa = points / credits;
    return cgpa.toFixed(2);
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
    return semester.courses?.reduce((point, course) => {
      return point + convertGrade(course.grade) * course.credit;
    }, 0);
  };

  //calculate total number of credits registred in a semester
  const getTotalCredits = (semester) => {
    return semester.courses?.reduce((credits, course) => {
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

        addSemester,
        removeSemester,
        getCGPA,
        addCourse,
        getSGPA,
        gpaData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
