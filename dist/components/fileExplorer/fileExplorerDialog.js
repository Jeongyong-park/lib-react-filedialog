"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileExplorerDialog = void 0;
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var _1 = require(".");
var useStyles = (0, core_1.makeStyles)(function (theme) {
    return (0, core_1.createStyles)({
        toolbar: {
            margin: theme.spacing(1),
            "&>*": {
                margin: theme.spacing(0.5, 1),
            },
        },
    });
});
var FileExplorerDialog = function (_a) {
    var title = _a.title, open = _a.open, onClose = _a.onClose, onChangedPath = _a.onChangedPath, fileManagerData = _a.fileManagerData;
    var classes = useStyles();
    var _b = react_1.default.useState(null), selectedFile = _b[0], setSelectedFile = _b[1];
    var handleClickCancelClose = function () {
        onClose(null);
    };
    var handleClickOkClose = function () {
        if (selectedFile) {
            onClose(selectedFile);
        }
        else {
        }
    };
    var onSelectionChangeHandler = function (rows) {
        if (rows.length === 0) {
            setSelectedFile(null);
        }
        else {
            setSelectedFile(rows[0]);
        }
    };
    return (react_1.default.createElement(core_1.Dialog, { open: open, onClose: handleClickCancelClose, "aria-labelledby": "form-dialog-title", maxWidth: "md" },
        react_1.default.createElement(core_1.DialogTitle, { id: "form-dialog-title" }, title || "파일 선택"),
        react_1.default.createElement(core_1.DialogContent, { style: { padding: 0, overflow: "hidden" } },
            react_1.default.createElement(_1.FileExplorer, { height: 450, onSelectionChange: onSelectionChangeHandler, onSelectAndDialogClose: handleClickOkClose, fileManagerData: fileManagerData, onChangedPath: onChangedPath }),
            react_1.default.createElement(core_1.Toolbar, { className: classes.toolbar },
                react_1.default.createElement(core_1.Typography, { variant: "body2" }, "\uD30C\uC77C\uBA85:"),
                react_1.default.createElement(core_1.TextField, { style: { flexGrow: 2 }, variant: "outlined", size: "small", value: (selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.name) || "" }))),
        react_1.default.createElement(core_1.DialogActions, null,
            react_1.default.createElement(core_1.Button, { onClick: handleClickCancelClose, color: "primary" }, "\uCDE8\uC18C"),
            react_1.default.createElement(core_1.Button, { variant: "contained", onClick: handleClickOkClose, color: "primary" }, "\uD655\uC778"))));
};
exports.FileExplorerDialog = FileExplorerDialog;
exports.default = exports.FileExplorerDialog;
//# sourceMappingURL=fileExplorerDialog.js.map