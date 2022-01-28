import { createStyles, Hidden, makeStyles, Theme } from "@material-ui/core";
//import { getFileList } from "service/FileManagerService";
import { FilePathBreadcCrumbs } from "./breadcrumbs";
import IFileInfo from "./IFileInfo";
import InnoFileManager from "./table";
import LeftTreeView from "./treeview";
import React from "react";
import { IFileManagerData, IUserDirs } from ".";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      minWidth: 650,
      width: "100%",
      flexFlow: "row wrap",
      borderBlock: "1px solid #eee",
    },
    left: {
      width: 240,
      height: "100%",
      paddingRight: 24,
      border: "none",
      backgroundImage:
        "linear-gradient(to right, #fff 0%, #fff 93%, #eee 100%)",
    },
    right: { flexGrow: 3, height: "100%" },
    selectedDataArea: {
      flexGrow: 1,
      margin: 0,
      padding: theme.spacing(2),
      backgroundColor: "#E3F2FD",
      "& > *": {
        margin: theme.spacing(1, 2),
      },
    },
    margin: {
      margin: theme.spacing(1, 0),
    },
  })
);

interface FileExplorerProps {
  height: number;
  onSelectionChange?: (rows: IFileInfo[]) => void | undefined;
  onSelectAndDialogClose?: () => void;
  fileManagerData: IFileManagerData;
  defaultPath?: string;
  onChangedPath: (path: string) => void;
}

export default function FileExplorer({
  height,
  onSelectionChange,
  onSelectAndDialogClose,
  onChangedPath,
  fileManagerData = {
    currentBasePath: "/",
    currentFilelist: [],
    homeDir: "/",
    userDirs: { documents: "", music: "", pictures: "", videos: "" },
  },
  defaultPath = "/home/innopam/project/data/PM202010-AICD/dataset",
}: FileExplorerProps): React.ReactElement {
  const classes = useStyle();
  const [trySearchBasePath, setTrySearchBasePath] =
    React.useState<string>(defaultPath);

  React.useEffect(() => {
    const path = trySearchBasePath;

    onChangedPath && onChangedPath(path);
  }, [trySearchBasePath]);

  return (
    <>
      <div className={classes.root} style={{ height: height }}>
        <Hidden mdDown>
          <div className={classes.left}>
            <LeftTreeView
              setTrySearchBasePath={setTrySearchBasePath}
              homePath={fileManagerData.homeDir}
              userDirs={fileManagerData.userDirs}
            />
          </div>
        </Hidden>
        <div className={classes.right}>
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            <FilePathBreadcCrumbs
              homePath={fileManagerData.homeDir}
              currentPath={fileManagerData.currentBasePath}
              setTrySearchBasePath={setTrySearchBasePath}
            />
            <InnoFileManager
              rows={fileManagerData.currentFilelist}
              onResourceItemDoubleClick={(event, idx, row) => {
                if (row.isDirectory) {
                  setTrySearchBasePath(row.path);
                } else {
                  onSelectionChange && onSelectionChange([row]);
                  onSelectAndDialogClose && onSelectAndDialogClose();
                  //TODO 더블클릭한 아이템이 파일일경우 처리
                }
              }}
              onSelectionChange={onSelectionChange}
              // onResourceItemRightClick={({ event, number, rowData }) => console.log("onResourceItemRightClick", event, number, rowData)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const getUserDirs = (
  homeDir: string,
  currentFilelist: IFileInfo[]
): IUserDirs => {
  const findedPath = (name1: string, name2: string): string =>
    currentFilelist.find(
      (d) => d.name.toLowerCase() === name1 || d.name.toLowerCase() === name2
    )?.path || "";

  const documents = findedPath("문서", "documents"),
    pictures = findedPath("사진", "pictures"),
    music = findedPath("음악", "music"),
    videos = findedPath("비디오", "videos");

  return { documents, pictures, music, videos };
};
