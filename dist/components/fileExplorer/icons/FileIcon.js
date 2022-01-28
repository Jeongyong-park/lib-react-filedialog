"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileIcon = void 0;
var material_file_icons_1 = require("material-file-icons");
var FileIcon = function (props) {
    return (React.createElement("div", { style: props.style, className: props.className, dangerouslySetInnerHTML: { __html: (0, material_file_icons_1.getIcon)(props.filename).svg } }));
};
exports.FileIcon = FileIcon;
//# sourceMappingURL=FileIcon.js.map