import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Semester extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="col-12 col-lg-6 mt-2" style={{ color: "black" }}>
        <div className="semester card">
          <div className="card-body">
            <h5 className="card-title d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                {this.props.semester.name}
                <span className="semester__gpa badge badge-warning ml-2">
                  {/* {this.props.gpaStore!.getGpa(this.props.semester)} */}6
                </span>
              </div>
              <span
                className="semester__delete-button text-danger mr-2"
                style={{ cursor: "pointer" }}
                // onClick={() =>
                //   this.props.gpaStore!.removeSemester(this.props.semester)
                // }
              >
                <FontAwesomeIcon icon="times" />
              </span>
            </h5>

            <ul className="course-list list-group">
              {this.props.semester.courses.map((course, i) => (
                <li
                  key={i}
                  className="course list-group-item d-flex justify-content-between align-items-center"
                >
                  <span style={{ flex: 1 }}>
                    <span className="course__name">{course.name}</span>
                  </span>
                  <span
                    className="course__grade badge badge-primary badge-pill mr-2"
                    style={{ minWidth: "30px" }}
                  >
                    {course.grade}
                  </span>
                  <span style={{ flexBasis: "83px" }}>
                    <span className="course__credit-unit badge badge-pill mr-1">
                      {course.credit} Hours
                    </span>

                    <span
                      className="course__delete-button text-danger mr-2"
                      style={{ cursor: "pointer" }}
                      //   onClick={() =>
                      //     this.props.gpaStore!.removeCourse(
                      //       this.props.semester,
                      //       course,
                      //     )
                      //   }
                    >
                      <FontAwesomeIcon icon="times" />
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Semester;
