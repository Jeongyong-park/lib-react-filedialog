import IFileInfo from "./IFileInfo";
import FileExplorer from "./fileExplorer";
import FileExplorerDialog from "./fileExplorerDialog";
export interface IFileManagerData {
    currentBasePath: string;
    currentFilelist: IFileInfo[];
    homeDir: string;
    userDirs: IUserDirs;
}
export interface IUserDirs {
    documents: string;
    music: string;
    pictures: string;
    videos: string;
}
export { FileExplorer, FileExplorerDialog };
