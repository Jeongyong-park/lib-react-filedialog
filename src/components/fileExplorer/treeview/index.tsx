import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem, { TreeItemProps } from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import { IUserDirs } from "../";
import {
  FolderDocumentsYellow,
  FolderHomeRed,
  FolderMusicGreen,
  FolderPicturesBlue,
  FolderVideoPurple,
} from "../icons";

// declare module "csstype" {
//   interface Properties {
//     "--tree-view-color"?: string;
//     "--tree-view-bg-color"?: string;
//   }
// }

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
};

const useTreeItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      userSelect: "none",
      color: theme.palette.text.secondary,
      "&:hover > $content": {
        backgroundColor: theme.palette.action.hover,
      },
      "&:focus > $content, &$selected > $content": {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
        color: "var(--tree-view-color)",
      },
      "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label":
        {
          backgroundColor: "transparent",
        },
    },
    content: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      //fontWeight: theme.typography.fontWeightMedium,
      "$expanded > &": {
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
    group: {
      marginLeft: 0,
      "& $content": {
        paddingLeft: theme.spacing(2),
      },
    },
    expanded: {},
    selected: {},
    label: {
      fontWeight: "inherit",
      color: "inherit",
    },
    labelRoot: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0.5, 0),
      "&:hover,&:active": {
        background: "none",
      },
    },
    labelIcon: {
      marginRight: theme.spacing(1),
    },
    labelText: {
      fontWeight: "inherit",
      flexGrow: 1,
    },
  })
);

function StyledTreeItem(props: StyledTreeItemProps) {
  const classes = useTreeItemStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={
        {
          // "--tree-view-color": color,
          // "--tree-view-bg-color": bgColor,
        }
      }
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 264,
      flexGrow: 1,
      maxWidth: 400,
      padding: theme.spacing(5, 0),
    },
  })
);

interface LeftTreeViewProps {
  homePath: string;
  currentPath?: string;
  userDirs: IUserDirs;
  setTrySearchBasePath?: (newTrySearchBasePath: string) => void;
}

export default function LeftTreeView(
  props: LeftTreeViewProps
): React.ReactElement {
  const classes = useStyles();

  const onClickHandler = (event: React.MouseEvent, path: string): void => {
    if (path !== "") {
      props.setTrySearchBasePath && props.setTrySearchBasePath(path);
    }
  };
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      {/* <StyledTreeItem nodeId="1" labelText="Recent" onClick={(e) => onClickHandler(e, "Recent")} labelIcon={FolderRecentYellow} /> */}
      <StyledTreeItem
        nodeId="2"
        labelText="Home"
        onClick={(e) => onClickHandler(e, props.homePath)}
        labelIcon={FolderHomeRed}
      />
      <StyledTreeItem
        nodeId="3"
        labelText="Documents"
        onClick={(e) => onClickHandler(e, props.userDirs.documents)}
        labelIcon={FolderDocumentsYellow}
      />
      <StyledTreeItem
        nodeId="4"
        labelText="Music"
        onClick={(e) => onClickHandler(e, props.userDirs.music)}
        labelIcon={FolderMusicGreen}
      />
      <StyledTreeItem
        nodeId="5"
        labelText="Pictures"
        onClick={(e) => onClickHandler(e, props.userDirs.pictures)}
        labelIcon={FolderPicturesBlue}
      />
      <StyledTreeItem
        nodeId="6"
        labelText="Videos"
        onClick={(e) => onClickHandler(e, props.userDirs.videos)}
        labelIcon={FolderVideoPurple}
      />
    </TreeView>
  );
}
