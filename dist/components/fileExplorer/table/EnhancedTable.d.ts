import React from "react";
import IFileInfo from "../IFileInfo";
interface EnhancedTableProps {
    rows: IFileInfo[];
    onResourceItemDoubleClick?: (event: React.MouseEvent<HTMLElement>, idx: number, row: IFileInfo) => void;
    onSelectionChange?: (rows: IFileInfo[]) => void;
}
declare const EnhacedTable: ({ rows, onResourceItemDoubleClick, onSelectionChange, }: EnhancedTableProps) => React.ReactElement;
export default EnhacedTable;
