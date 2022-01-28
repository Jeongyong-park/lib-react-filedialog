"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var icons_1 = require("../icons");
function IconByRow(props) {
    var fileInfo = props.fileInfo;
    return (react_1.default.createElement("div", { style: {
            padding: 12,
            display: "inline-flex",
            verticalAlign: "middle",
            alignItems: "center"
        } }, fileInfo.ext !== "" ? (react_1.default.createElement(icons_1.FileIcon, { filename: fileInfo.name, style: { height: 24, width: 24 } })) : (react_1.default.createElement(icons_1.DirectoryIcon, { name: fileInfo.name, style: { height: 24, width: 24 } }))));
}
exports.default = IconByRow;
//# sourceMappingURL=IconByRow.js.map