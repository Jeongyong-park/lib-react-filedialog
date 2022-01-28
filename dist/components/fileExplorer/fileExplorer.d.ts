import IFileInfo from "./IFileInfo";
import React from "react";
import { IFileManagerData } from ".";
interface FileExplorerProps {
    height: number;
    onSelectionChange?: (rows: IFileInfo[]) => void | undefined;
    onSelectAndDialogClose?: () => void;
    fileManagerData: IFileManagerData;
    defaultPath?: string;
    onChangedPath: (path: string) => void;
}
export default function FileExplorer({ height, onSelectionChange, onSelectAndDialogClose, onChangedPath, fileManagerData, defaultPath, }: FileExplorerProps): React.ReactElement;
export {};
