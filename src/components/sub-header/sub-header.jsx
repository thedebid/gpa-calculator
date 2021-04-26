import React from "react";
import Downloader from "./downloader";
//import Importer from "./importer";

const SubHeader = (props) => (
  <div className="text-right">
    {/* <Importer /> */}
    <Downloader gpaData={props.gpaData} />
  </div>
);

export default SubHeader;
