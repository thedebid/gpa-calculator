import * as React from "react";
import { Component } from "react";
import { Grade } from "./../../data/grade";
import { v4 as uuidv4 } from "uuid";

class CourseInput extends Component {
  constructor() {
    super();
    this.state = {
      selectedSemester: "Select a semester",
      course: {
        id: uuidv4(),
        name: "",
        grade: "Select Grade",
        credit: "",
      },
    };
  }

  handleSubmit = () => {
    if (this.state.selectedSemester === "Select a semester") return;
    if (this.state.course.grade === "Select Grade") return;
    if (this.state.course.credit === 0 || this.state.course.credit === "")
      return;
    if (this.state.course.name === "") return;
    this.props.addCourse(this.state);

    this.setState({
      selectedSemester: "Select a semester",
      course: {
        id: uuidv4(),
        name: "",
        grade: "Select Grade",
        credit: "",
      },
    });
  };

  //   handleSubmit = (e: FormEvent) => {
  //     e.preventDefault();
  //     this.props.gpaStore!.addCourse(
  //       this.state.selectedSemester,
  //       this.state.course,
  //     );
  //   };

  //   handleSemesterChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //     const selectedSemester = this.props.gpaStore!.semesters.find(
  //       s => s.name === e.target.value,
  //     );
  //     if (selectedSemester) {
  //       this.setState({
  //         selectedSemester,
  //       });
  //     }
  //   };

  render() {
    // console.log(this.state.selectedSemester);
    // console.log(this.state.course.credit);
    // console.log(this.state.course.name);
    // console.log(this.state.course.grade);
    // console.log(Grade);
    // console.log(this.props);

    // Grade.map((setting) => console.log(setting.Grade));
    // Grade.map((setting) => console.log(setting.Point));
    // console.log(this.props.gpaData.length);
    return (
      <form className="course-input" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <div className="col-lg-6 col-xs-12 mt-2">
            {this.props.gpaData.length > 0 ? (
              <select
                className="course-input__semester form-control"
                value={this.state.selectedSemester}
                onChange={(e) =>
                  this.setState({
                    selectedSemester: e.target.value,
                  })
                }
              >
                <option>Select a semester</option>
                {this.props.gpaData.map((semester) => (
                  <option
                    key={semester.name}
                    value={semester.name}
                    defaultChecked={
                      semester.name === this.state.selectedSemester.name
                    }
                  >
                    {semester.name}
                  </option>
                ))}
              </select>
            ) : (
              <p>Please add semester first</p>
            )}
          </div>
          <div className="col-lg-6 col-xs-12 mt-2">
            <input
              type="text"
              value={this.state.course.name}
              className="course-input__name form-control"
              placeholder="Course Name"
              onChange={(e) =>
                this.setState({
                  course: {
                    ...this.state.course,
                    name: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>
        <div className="form-row mt-2">
          <div className="col-6 col-xs-6">
            <input
              type="number"
              className="course-input__credit-unit form-control"
              placeholder="Credit Hours"
              value={this.state.course.credit}
              onChange={(e) =>
                this.setState({
                  course: {
                    ...this.state.course,
                    credit: Number(e.target.value),
                  },
                })
              }
            />
          </div>
          <div className="col-6 col-xs-6">
            <select
              className="course-input__grade form-control"
              value={this.state.course.grade}
              onChange={(e) =>
                this.setState({
                  course: {
                    ...this.state.course,
                    grade: e.target.value,
                  },
                })
              }
            >
              <option>Select Grade</option>
              {Grade.map((grade, key) => (
                <option value={grade.Grade} key={key}>
                  {grade.Grade}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row mt-2">
          <div className="col">
            <button
              type="submit"
              className="course-input__add-button btn btn-success w-100"
              onClick={this.handleSubmit}
            >
              Add Course
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default CourseInput;
