import React from "react";
import Downloader from "./downloader";
import Importer from "./importer";

const SubHeader = (props) => (
  <div className="text-right">
    <Importer gpaData={props.gpaData} importFromJson={props.importFromJson} />
    <Downloader gpaData={props.gpaData} />
  </div>
);

export default SubHeader;
