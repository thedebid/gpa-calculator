import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Downloader() {
  //   downloadJSON = () => {
  //     const json = JSON.stringify(this.props.gpaStore!.semesters);
  //     const data = 'data:text/json;charset=utf-8,' + encodeURIComponent(json);
  //     const element = document.createElement('a');
  //     element.setAttribute('href', data);
  //     element.setAttribute('download', 'GPA.json');
  //     element.click();
  //   };

  return (
    <button
      className="btn btn-primary btn-sm mb-2 ml-2"
      onClick={() => this.downloadJSON()}
    >
      <FontAwesomeIcon icon="download" /> Export as JSON
    </button>
  );
}

export default Downloader;
