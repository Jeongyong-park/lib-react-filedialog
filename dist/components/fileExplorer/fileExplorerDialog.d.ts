import { IFileManagerData } from ".";
import IFileInfo from "./IFileInfo";
interface FileExplorerDialogProps {
    open: boolean;
    onClose: (selectedFile: IFileInfo | null) => void;
    title?: string;
    fileManagerData: IFileManagerData;
    defaultPath?: string;
    onChangedPath: (path: string) => void;
}
export declare const FileExplorerDialog: ({ title, open, onClose, onChangedPath, fileManagerData, }: FileExplorerDialogProps) => JSX.Element;
export default FileExplorerDialog;
