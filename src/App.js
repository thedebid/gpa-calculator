import React, { useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CGPA from "./components/gpa/gpa";
import CourseInput from "./components/course-input/course-input";
import SemesterGroup from "./components/semester-group/semester-group";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faDownload,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import SubHeader from "./components/sub-header/sub-header";
import SemesterInput from "./components/semester-input/semester-input";
import { GlobalContext } from "./context/context";

library.add(faTimes, faDownload, faUpload);

const App = () => {
  const { gpaData, getCGPA, addSemester, removeSemester, getSGPA } = useContext(
    GlobalContext
  );
  // console.log(getGPA());
  return (
    <div className="App">
      <div className="container mt-5 mb-5">
        <CGPA cgpa={getCGPA} />
        <hr />
        <CourseInput gpaData={gpaData} />
        <hr />
        <SemesterInput addSemester={addSemester} />
        <hr />
        <SubHeader />
        <SemesterGroup
          gpaData={gpaData}
          sgpa={getSGPA}
          removeSemester={removeSemester}
        />
      </div>
    </div>
  );
};

export default App;
