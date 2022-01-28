"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var breadcrumbs_1 = require("./breadcrumbs");
var table_1 = __importDefault(require("./table"));
var treeview_1 = __importDefault(require("./treeview"));
var react_1 = __importDefault(require("react"));
var useStyle = (0, core_1.makeStyles)(function (theme) {
    return (0, core_1.createStyles)({
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
            backgroundImage: "linear-gradient(to right, #fff 0%, #fff 93%, #eee 100%)",
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
    });
});
function FileExplorer(_a) {
    var height = _a.height, onSelectionChange = _a.onSelectionChange, onSelectAndDialogClose = _a.onSelectAndDialogClose, onChangedPath = _a.onChangedPath, _b = _a.fileManagerData, fileManagerData = _b === void 0 ? {
        currentBasePath: "/",
        currentFilelist: [],
        homeDir: "/",
        userDirs: { documents: "", music: "", pictures: "", videos: "" },
    } : _b, _c = _a.defaultPath, defaultPath = _c === void 0 ? "/home/innopam/project/data/PM202010-AICD/dataset" : _c;
    var classes = useStyle();
    var _d = react_1.default.useState(defaultPath), trySearchBasePath = _d[0], setTrySearchBasePath = _d[1];
    react_1.default.useEffect(function () {
        var path = trySearchBasePath;
        onChangedPath && onChangedPath(path);
    }, [trySearchBasePath]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: classes.root, style: { height: height } },
            react_1.default.createElement(core_1.Hidden, { mdDown: true },
                react_1.default.createElement("div", { className: classes.left },
                    react_1.default.createElement(treeview_1.default, { setTrySearchBasePath: setTrySearchBasePath, homePath: fileManagerData.homeDir, userDirs: fileManagerData.userDirs }))),
            react_1.default.createElement("div", { className: classes.right },
                react_1.default.createElement("div", { style: { width: "100%", height: "100%", overflow: "hidden" } },
                    react_1.default.createElement(breadcrumbs_1.FilePathBreadcCrumbs, { homePath: fileManagerData.homeDir, currentPath: fileManagerData.currentBasePath, setTrySearchBasePath: setTrySearchBasePath }),
                    react_1.default.createElement(table_1.default, { rows: fileManagerData.currentFilelist, onResourceItemDoubleClick: function (event, idx, row) {
                            if (row.isDirectory) {
                                setTrySearchBasePath(row.path);
                            }
                            else {
                                onSelectionChange && onSelectionChange([row]);
                                onSelectAndDialogClose && onSelectAndDialogClose();
                            }
                        }, onSelectionChange: onSelectionChange }))))));
}
exports.default = FileExplorer;
var getUserDirs = function (homeDir, currentFilelist) {
    var findedPath = function (name1, name2) {
        var _a;
        return ((_a = currentFilelist.find(function (d) { return d.name.toLowerCase() === name1 || d.name.toLowerCase() === name2; })) === null || _a === void 0 ? void 0 : _a.path) || "";
    };
    var documents = findedPath("문서", "documents"), pictures = findedPath("사진", "pictures"), music = findedPath("음악", "music"), videos = findedPath("비디오", "videos");
    return { documents: documents, pictures: pictures, music: music, videos: videos };
};
//# sourceMappingURL=fileExplorer.js.map