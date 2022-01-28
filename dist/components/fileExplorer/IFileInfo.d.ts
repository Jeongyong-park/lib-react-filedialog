export default interface IFileInfo {
    name: string;
    isDirectory: boolean;
    path: string;
    size: number | string;
    createDate: Date | string;
    updateDate: Date | string;
    ext: string;
}
export declare type KeyOfFileInfo = keyof IFileInfo;
