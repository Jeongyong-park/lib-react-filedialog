import React from "react";
import { FolderYellow } from "../icons";

interface DirectoryIconProps {
  name: string;
  style?: React.CSSProperties;
  className?: string;
}

export const DirectoryIcon = (
  props: DirectoryIconProps
): React.ReactElement => {
  return (
    <div style={props.style} className={props.className}>
      <FolderYellow />
    </div>
  );
};
