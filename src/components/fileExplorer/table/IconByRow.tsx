import React from "react";
import { DirectoryIcon, FileIcon } from "../icons";
import IFileInfo from "../IFileInfo";

interface IconByRowProp {
  fileInfo: IFileInfo;
}
export default function IconByRow(props: IconByRowProp) {
  const { fileInfo } = props;

  return (
    <div
      style={{
        padding: 12,
        display: "inline-flex",
        verticalAlign: "middle",
        alignItems: "center"
      }}
    >
      {/* {fileInfo.isDirectory ? <AiOutlineFolder className="MuiSvgIcon-root" color="primary" /> : getIconByExtent(fileInfo.ext)} */}
      {fileInfo.ext !== "" ? (
        <FileIcon filename={fileInfo.name} style={{ height: 24, width: 24 }} />
      ) : (
        <DirectoryIcon name={fileInfo.name} style={{ height: 24, width: 24 }} />
      )}
    </div>
  );
}
