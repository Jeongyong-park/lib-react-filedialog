"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilePathBreadcCrumbs = void 0;
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var react_1 = __importDefault(require("react"));
var icons_1 = require("../icons");
var useStyle = (0, styles_1.makeStyles)(function (theme) {
    return (0, styles_1.createStyles)({
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
    });
});
var FilePathBreadcCrumbs = function (props) {
    var classes = useStyle();
    var _a = react_1.default.useState([]), pathes = _a[0], setPathes = _a[1];
    var _b = react_1.default.useState(""), lastDir = _b[0], setLastDir = _b[1];
    react_1.default.useEffect(function () {
        if (props.currentPath !== "/") {
            var pathes_1 = props.currentPath
                .replace(props.homePath, "{Home}")
                .split(/\\|\//);
            setLastDir(pathes_1.pop() || "");
            setPathes(pathes_1);
        }
    }, [props]);
    var handleClick = function (event, idx) {
        var selectedPathes = pathes.slice(0, idx + 1).join("/");
        var newPath = selectedPathes.replace("{Home}", props.homePath);
        console.log("newPath :", newPath);
        (props === null || props === void 0 ? void 0 : props.setTrySearchBasePath) && props.setTrySearchBasePath(newPath);
    };
    return (react_1.default.createElement(core_1.Breadcrumbs, { className: classes.breadcrumbs, maxItems: 2, "aria-label": "breadcrumb" },
        react_1.default.createElement(core_1.Link, { color: "inherit", href: "#", onClick: function () {
                return (props === null || props === void 0 ? void 0 : props.setTrySearchBasePath) &&
                    props.setTrySearchBasePath(props.homePath);
            } },
            react_1.default.createElement("span", { style: { display: "flex" } },
                react_1.default.createElement(icons_1.FolderHomeRed, { style: { flexGrow: 1 } }),
                react_1.default.createElement(core_1.Typography, { variant: "body1", style: { flexGrow: 1 } }, "Home"))),
        pathes.map(function (dir, idx) {
            return idx !== 0 && (react_1.default.createElement(core_1.Link, { className: classes.link, color: "inherit", href: "#", onClick: function (e) { return handleClick(e, idx); }, key: idx }, dir));
        }),
        props.homePath !== props.currentPath && (react_1.default.createElement(core_1.Typography, { color: "textPrimary" }, lastDir))));
};
exports.FilePathBreadcCrumbs = FilePathBreadcCrumbs;
//# sourceMappingURL=index.js.map