import React from "react";
import { IUserDirs } from "../";
interface LeftTreeViewProps {
    homePath: string;
    currentPath?: string;
    userDirs: IUserDirs;
    setTrySearchBasePath?: (newTrySearchBasePath: string) => void;
}
export default function LeftTreeView(props: LeftTreeViewProps): React.ReactElement;
export {};
