import React, { Component } from "react";
import Semester from "./semester";

class SemesterGroup extends Component {
  render() {
    this.props.gpaData.sort((a, b) => (a.index > b.index ? 1 : -1));

    return (
      <div className="row">
        {this.props.gpaData.map((semester) => (
          <Semester
            semester={semester}
            key={semester.name}
            calSGPA={this.props.sgpa}
            removeSemester={this.props.removeSemester}
            removeCourse={this.props.removeCourse}
          />
        ))}
      </div>
    );
  }
}

export default SemesterGroup;
