import { Breadcrumbs, Typography, Link, Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import React from "react";

import { FolderHomeRed } from "../icons";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    breadcrumbs: {
      margin: theme.spacing(1),
      userSelect: "none",
      maxWidth: 650
    },
    link: {
      display: "flex"
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20
    }
  })
);

interface FilePathBreadcCrumbsProps {
  homePath: string;
  currentPath: string;
  setTrySearchBasePath?: (newTrySearchBasePath: string) => void;
}

export const FilePathBreadcCrumbs = (
  props: FilePathBreadcCrumbsProps
): React.ReactElement => {
  const classes = useStyle();
  const [pathes, setPathes] = React.useState<string[]>([]);
  const [lastDir, setLastDir] = React.useState<string>("");

  React.useEffect(() => {
    if (props.currentPath !== "/") {
      const pathes: string[] = props.currentPath
        .replace(props.homePath, "{Home}")
        .split(/\\|\//);
      setLastDir(pathes.pop() || "");
      setPathes(pathes);
    }
  }, [props]);
  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    idx: number
  ): void => {
    const selectedPathes = pathes.slice(0, idx + 1).join("/");
    const newPath = selectedPathes.replace("{Home}", props.homePath);
    console.log("newPath :", newPath);
    props?.setTrySearchBasePath && props.setTrySearchBasePath(newPath);
  };
  return (
    <Breadcrumbs
      className={classes.breadcrumbs}
      maxItems={2}
      aria-label="breadcrumb"
    >
      <Link
        color="inherit"
        href="#"
        onClick={() =>
          props?.setTrySearchBasePath &&
          props.setTrySearchBasePath(props.homePath)
        }
      >
        <span style={{ display: "flex" }}>
          <FolderHomeRed style={{ flexGrow: 1 }} />
          <Typography variant="body1" style={{ flexGrow: 1 }}>
            Home
          </Typography>
        </span>
      </Link>
      {pathes.map(
        (dir, idx) =>
          idx !== 0 && (
            <Link
              className={classes.link}
              color="inherit"
              href="#"
              onClick={(e) => handleClick(e, idx)}
              key={idx}
            >
              {dir}
            </Link>
          )
      )}
      {props.homePath !== props.currentPath && (
        <Typography color="textPrimary">{lastDir}</Typography>
      )}
    </Breadcrumbs>
  );
};
