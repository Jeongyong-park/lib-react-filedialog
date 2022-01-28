"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var EnhancedTable_1 = __importDefault(require("./EnhancedTable"));
var react_1 = __importDefault(require("react"));
function InnoFileManager(props) {
    return (react_1.default.createElement(EnhancedTable_1.default, { rows: props.rows, onResourceItemDoubleClick: props === null || props === void 0 ? void 0 : props.onResourceItemDoubleClick, onSelectionChange: props === null || props === void 0 ? void 0 : props.onSelectionChange }));
}
exports.default = InnoFileManager;
//# sourceMappingURL=index.js.map