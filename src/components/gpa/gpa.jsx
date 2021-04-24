import React from "react";

function GPA(props) {
  // console.log(props);
  return (
    <h2 className="cgpa text-center">CGPA : {props ? props.cgpa() : "NaN"}</h2>
  );
}
export default GPA;
