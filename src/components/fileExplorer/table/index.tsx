import EnhacedTable from "./EnhancedTable";
import IFileInfo from "../IFileInfo";
import React from "react";

interface InnoFileManagerProps {
  rows: IFileInfo[];
  onResourceItemDoubleClick?: (
    event: React.MouseEvent<HTMLElement>,
    idx: number,
    row: IFileInfo
  ) => void;
  onSelectionChange?: (rows: IFileInfo[]) => void;
}

export default function InnoFileManager(
  props: InnoFileManagerProps
): React.ReactElement {
  return (
    <EnhacedTable
      rows={props.rows}
      onResourceItemDoubleClick={props?.onResourceItemDoubleClick}
      onSelectionChange={props?.onSelectionChange}
    />
  );
}
