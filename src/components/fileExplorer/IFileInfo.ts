export default interface IFileInfo {
    name: string;
    isDirectory: boolean;
    path: string;
    size: number | string;
    createDate: Date | string;
    updateDate: Date | string;
    ext: string;
}

export type KeyOfFileInfo = keyof IFileInfo;
