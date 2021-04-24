import React, { useState } from "react";
import { Semesters } from "./../../data/semesters";
function SemesterInput(props) {
  const [selectedSemester, setSelectedSemester] = useState("Select a semester");
  const handleSubmit = () => {
    if (selectedSemester === "Select a semester") {
      return;
    } else {
      props.addSemester(selectedSemester);
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-row mt-2">
        <div className="col-8">
          <select
            className="form-control"
            onChange={(e) => setSelectedSemester(e.target.value)}
          >
            <option defaultValue>Select a semester</option>
            {Semesters.map((index, key) => (
              <option value={index.name} key={key}>
                {index.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-4">
          <button
            type="submit"
            className="btn btn-success w-100"
            onClick={handleSubmit}
          >
            Add semester
          </button>
        </div>
      </div>
    </form>
  );
}

export default SemesterInput;
