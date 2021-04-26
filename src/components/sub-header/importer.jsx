import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Importer(props) {
  const handleChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      props.importFromJson(e.target.result);
    };

    reader.readAsText(file);
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        display: "inline",
      }}
    >
      <button className="btn btn-primary btn-sm mb-2">
        <FontAwesomeIcon icon="upload" /> Import GPA from JSON
        <input
          type="file"
          name="GPAJson"
          onChange={(e) => handleChange(e)}
          style={{
            width: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            opacity: 0,
          }}
        />
      </button>
    </div>
  );
}

export default Importer;
