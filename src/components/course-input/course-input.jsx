import * as React from "react";
import { Component } from "react";
import { Grade } from "./../../data/grade";
class CourseInput extends Component {
  //   state = {
  //     selectedSemester: this.props.gpaStore!.semesters[0],
  //     course: {
  //       name: '',
  //       grade: '',
  //       credit: 0,
  //     },
  //   };

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
    console.log(Grade);
    console.log(this.props);

    Grade.map((setting) => console.log(setting.Grade));
    Grade.map((setting) => console.log(setting.Point));
    return (
      <form className="course-input">
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="course-input__name form-control"
              placeholder="Course Name"
              //   onChange={(e: ChangeEvent<HTMLInputElement>) =>
              //     this.setState({
              //       course: {
              //         ...this.state.course,
              //         name: e.target.value,
              //       },
              //     })
              //   }
            />
          </div>
        </div>
        <div className="form-row mt-2">
          <div className="col-5">
            <select
              className="course-input__semester form-control"
              //   defaultValue={this.state.selectedSemester.name}
              //   onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              //     this.handleSemesterChange(e)
              //   }
            >
              <option>Select a semester</option>
              {this.props.gpaData.map((semester) => (
                <option
                  key={semester.name}
                  value={semester.name}
                  // defaultChecked={
                  //   semester.name === this.state.selectedSemester.name
                  // }
                >
                  {semester.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4">
            <input
              type="text"
              className="course-input__credit-unit form-control"
              placeholder="Credit Hours"
              //   onChange={(e: ChangeEvent<HTMLInputElement>) =>
              //     this.setState({
              //       course: {
              //         ...this.state.course,
              //         credit: Number(e.target.value),
              //       },
              //     })
              //   }
            />
          </div>
          <div className="col-3">
            <select
              className="course-input__grade form-control"
              //   value={this.state.course.grade}
              //   onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              //     this.setState({
              //       course: {
              //         ...this.state.course,
              //         grade: e.target.value,
              //       },
              //     })
              //   }
            >
              <option>Select Grade</option>
              {Grade.map((grade, key) => (
                <option value={grade.Point} key={key}>
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
