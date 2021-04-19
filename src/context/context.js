import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
import initalGpaData from "./../data/GPA.json";

//const initailState = [];

export const GPACalContext = createContext(initalGpaData);
export const Provider = ({ children }) => {
  const [gpaData, dispatch] = useReducer(contextReducer, initalGpaData);
  //Action Creators
  const removeCourse = (id) => dispatch({ type: "REMOVE_COURSE", payload: id });

  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  return (
    <GPACalContext.Provider value={{ removeCourse, addTransaction, gpaData }}>
      {children}
    </GPACalContext.Provider>
  );
};
