"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles.css");
var fileExplorer_1 = require("./components/fileExplorer");
var react_1 = require("react");
function App() {
    var _a = (0, react_1.useState)(true), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)({
        currentBasePath: "",
        currentFilelist: [],
        homeDir: "/",
        userDirs: {
            documents: "",
            music: "",
            pictures: "",
            videos: "",
        },
    }), fileManagerData = _b[0], setfileManagerData = _b[1];
    return (React.createElement("div", { className: "App" },
        React.createElement("h1", null, "Hello CodeSandbox"),
        React.createElement("h2", null, "Start editing to see some magic happen!"),
        React.createElement(fileExplorer_1.FileExplorerDialog, { title: "test", open: open, onClose: function () {
                setOpen(false);
            }, onChangedPath: function (path) {
            }, fileManagerData: fileManagerData })));
}
exports.default = App;
//# sourceMappingURL=App.js.map