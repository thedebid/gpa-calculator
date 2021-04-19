import * as React from "react";
import { Semesters } from "./../../data/semesters";
function SemesterInput() {
  return (
    <form onSubmit={(e) => this.handleSubmit(e)}>
      <div className="form-row mt-2">
        <div className="col-8">
          <select className="form-control">
            <option defaultValue>Select a semester</option>
            {Semesters.map((index, key) => (
              <option value={index} key={key}>
                {index}
              </option>
            ))}
          </select>
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-success w-100">
            Add semester
          </button>
        </div>
      </div>
    </form>
  );
}

export default SemesterInput;
