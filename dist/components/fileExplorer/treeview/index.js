"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var TreeView_1 = __importDefault(require("@material-ui/lab/TreeView"));
var TreeItem_1 = __importDefault(require("@material-ui/lab/TreeItem"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var ArrowDropDown_1 = __importDefault(require("@material-ui/icons/ArrowDropDown"));
var ArrowRight_1 = __importDefault(require("@material-ui/icons/ArrowRight"));
var icons_1 = require("../icons");
var useTreeItemStyles = (0, styles_1.makeStyles)(function (theme) {
    return (0, styles_1.createStyles)({
        root: {
            userSelect: "none",
            color: theme.palette.text.secondary,
            "&:hover > $content": {
                backgroundColor: theme.palette.action.hover,
            },
            "&:focus > $content, &$selected > $content": {
                backgroundColor: "var(--tree-view-bg-color, " + theme.palette.grey[400] + ")",
                color: "var(--tree-view-color)",
            },
            "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label": {
                backgroundColor: "transparent",
            },
        },
        content: {
            color: theme.palette.text.secondary,
            borderTopRightRadius: theme.spacing(2),
            borderBottomRightRadius: theme.spacing(2),
            paddingRight: theme.spacing(1),
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
    });
});
function StyledTreeItem(props) {
    var classes = useTreeItemStyles();
    var labelText = props.labelText, LabelIcon = props.labelIcon, labelInfo = props.labelInfo, color = props.color, bgColor = props.bgColor, other = __rest(props, ["labelText", "labelIcon", "labelInfo", "color", "bgColor"]);
    return (react_1.default.createElement(TreeItem_1.default, __assign({ label: react_1.default.createElement("div", { className: classes.labelRoot },
            react_1.default.createElement(LabelIcon, { color: "inherit", className: classes.labelIcon }),
            react_1.default.createElement(Typography_1.default, { variant: "body2", className: classes.labelText }, labelText),
            react_1.default.createElement(Typography_1.default, { variant: "caption", color: "inherit" }, labelInfo)), style: {}, classes: {
            root: classes.root,
            content: classes.content,
            expanded: classes.expanded,
            selected: classes.selected,
            group: classes.group,
            label: classes.label,
        } }, other)));
}
var useStyles = (0, styles_1.makeStyles)(function (theme) {
    return (0, styles_1.createStyles)({
        root: {
            height: 264,
            flexGrow: 1,
            maxWidth: 400,
            padding: theme.spacing(5, 0),
        },
    });
});
function LeftTreeView(props) {
    var classes = useStyles();
    var onClickHandler = function (event, path) {
        if (path !== "") {
            props.setTrySearchBasePath && props.setTrySearchBasePath(path);
        }
    };
    return (react_1.default.createElement(TreeView_1.default, { className: classes.root, defaultCollapseIcon: react_1.default.createElement(ArrowDropDown_1.default, null), defaultExpandIcon: react_1.default.createElement(ArrowRight_1.default, null), defaultEndIcon: react_1.default.createElement("div", { style: { width: 24 } }) },
        react_1.default.createElement(StyledTreeItem, { nodeId: "2", labelText: "Home", onClick: function (e) { return onClickHandler(e, props.homePath); }, labelIcon: icons_1.FolderHomeRed }),
        react_1.default.createElement(StyledTreeItem, { nodeId: "3", labelText: "Documents", onClick: function (e) { return onClickHandler(e, props.userDirs.documents); }, labelIcon: icons_1.FolderDocumentsYellow }),
        react_1.default.createElement(StyledTreeItem, { nodeId: "4", labelText: "Music", onClick: function (e) { return onClickHandler(e, props.userDirs.music); }, labelIcon: icons_1.FolderMusicGreen }),
        react_1.default.createElement(StyledTreeItem, { nodeId: "5", labelText: "Pictures", onClick: function (e) { return onClickHandler(e, props.userDirs.pictures); }, labelIcon: icons_1.FolderPicturesBlue }),
        react_1.default.createElement(StyledTreeItem, { nodeId: "6", labelText: "Videos", onClick: function (e) { return onClickHandler(e, props.userDirs.videos); }, labelIcon: icons_1.FolderVideoPurple })));
}
exports.default = LeftTreeView;
//# sourceMappingURL=index.js.map