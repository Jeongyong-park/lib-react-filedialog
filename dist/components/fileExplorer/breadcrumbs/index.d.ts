import React from "react";
interface FilePathBreadcCrumbsProps {
    homePath: string;
    currentPath: string;
    setTrySearchBasePath?: (newTrySearchBasePath: string) => void;
}
export declare const FilePathBreadcCrumbs: (props: FilePathBreadcCrumbsProps) => React.ReactElement;
export {};
