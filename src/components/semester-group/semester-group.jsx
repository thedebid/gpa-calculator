import React, { Component } from "react";
import Semester from "./semester";

class SemesterGroup extends Component {
  render() {
    return (
      <div className="row">
        {this.props.gpaData.map((semester) => (
          <Semester semester={semester} key={semester.name} />
        ))}
      </div>
    );
  }
}

export default SemesterGroup;