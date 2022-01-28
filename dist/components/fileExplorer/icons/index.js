"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileIcon = exports.DirectoryIcon = exports.FolderVideoPurple = exports.FolderPicturesBlue = exports.FolderMusicGreen = exports.FolderHomeRed = exports.FolderVideoYellow = exports.FolderPicturesYellow = exports.FolderMusicYellow = exports.FolderRecentYellow = exports.FolderDocumentsYellow = exports.FolderYellow = void 0;
var core_1 = require("@material-ui/core");
var FileIcon_1 = require("./FileIcon");
Object.defineProperty(exports, "FileIcon", { enumerable: true, get: function () { return FileIcon_1.FileIcon; } });
var DirectoryIcon_1 = require("./DirectoryIcon");
Object.defineProperty(exports, "DirectoryIcon", { enumerable: true, get: function () { return DirectoryIcon_1.DirectoryIcon; } });
var useStyle = (0, core_1.makeStyles)(function (theme) {
    return (0, core_1.createStyles)({
        icon: {
            marginRight: theme.spacing(1),
            width: 24,
            height: 24
        }
    });
});
var FolderYellow = function (props) {
    var classes = useStyle();
    return (React.createElement(core_1.SvgIcon, { className: classes.icon, viewBox: "0 0 64 64", width: 64, height: 64 },
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "24", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { fill: "#b58f1b" }, d: "M 7,44.5 C 7,45.885 8.115,47 9.5,47 H 54.5 C 55.885,47 57,45.885 57,44.5 V 17.5 C 57,16.115 55.885,15 54.5,15 H 29 V 12.5 C 29,11.115 27.885,10 26.5,10 H 9.5 C 8.115,10 7,11.115 7,12.5" }),
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "22", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e4e4e4" }, width: "44", height: "20", x: "10", y: "18", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e2b322" }, width: "50", height: "32", x: "7", y: "23", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { opacity: 0.1, fill: "#ffffff" }, d: "M 9.5,10 C 8.115,10 7,11.115 7,12.5 V 13.5 C 7,12.115 8.115,11 9.5,11 H 26.5 C 27.885,11 29,12.115 29,13.5 V 12.5 C 29,11.115 27.885,10 26.5,10 Z M 29,15 V 16 H 54.5 C 55.89,16 57,17.115 57,18.5 V 17.5 C 57,16.115 55.89,15 54.5,15 Z" })));
};
exports.FolderYellow = FolderYellow;
var FolderMusicYellow = function (props) {
    var classes = useStyle();
    return (React.createElement(core_1.SvgIcon, { className: classes.icon, viewBox: "0 0 64 64", width: 64, height: 64 },
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "24", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { fill: "#b58f1b" }, d: "M 7,44.5 C 7,45.885 8.115,47 9.5,47 H 54.5 C 55.885,47 57,45.885 57,44.5 V 17.5 C 57,16.115 55.885,15 54.5,15 H 29 V 12.5 C 29,11.115 27.885,10 26.5,10 H 9.5 C 8.115,10 7,11.115 7,12.5" }),
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "22", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e4e4e4" }, width: "44", height: "20", x: "10", y: "18", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e2b322" }, width: "50", height: "32", x: "7", y: "23", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { opacity: 0.1, fill: "#ffffff" }, d: "M 9.5,10 C 8.115,10 7,11.115 7,12.5 V 13.5 C 7,12.115 8.115,11 9.5,11 H 26.5 C 27.885,11 29,12.115 29,13.5 V 12.5 C 29,11.115 27.885,10 26.5,10 Z M 29,15 V 16 H 54.5 C 55.89,16 57,17.115 57,18.5 V 17.5 C 57,16.115 55.89,15 54.5,15 Z" }),
        React.createElement("path", { style: { fill: "#4f3e0c" }, d: "M 29,40.54 C 28.4,40.18 27.7,40 27,40 24.8,40 23,41.8 23,44 23,46.2 24.8,48 27,48 29.2,48 31,46.2 31,44 V 34 H 39 V 40.54 C 38.4,40.18 37.7,40 37,40 34.8,40 33,41.8 33,44 33,46.2 34.8,48 37,48 39.2,48 41,46.2 41,44 V 30 H 29" })));
};
exports.FolderMusicYellow = FolderMusicYellow;
var FolderDocumentsYellow = function (props) {
    var classes = useStyle();
    return (React.createElement(core_1.SvgIcon, { className: classes.icon, viewBox: "0 0 64 64", width: 64, height: 64 },
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "24", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { fill: "#b58f1b" }, d: "M 7,44.5 C 7,45.885 8.115,47 9.5,47 H 54.5 C 55.885,47 57,45.885 57,44.5 V 17.5 C 57,16.115 55.885,15 54.5,15 H 29 V 12.5 C 29,11.115 27.885,10 26.5,10 H 9.5 C 8.115,10 7,11.115 7,12.5" }),
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "22", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e4e4e4" }, width: "44", height: "20", x: "10", y: "18", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e2b322" }, width: "50", height: "32", x: "7", y: "23", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { opacity: 0.1, fill: "#ffffff" }, d: "M 9.5,10 C 8.115,10 7,11.115 7,12.5 V 13.5 C 7,12.115 8.115,11 9.5,11 H 26.5 C 27.885,11 29,12.115 29,13.5 V 12.5 C 29,11.115 27.885,10 26.5,10 Z M 29,15 V 16 H 54.5 C 55.89,16 57,17.115 57,18.5 V 17.5 C 57,16.115 55.89,15 54.5,15 Z" }),
        React.createElement("path", { style: { fill: "#4f3e0c" }, d: "M 25.5 29 C 24.669 29 24 29.669 24 30.5 L 24 47.5 C 24 48.331 24.669 49 25.5 49 L 38.5 49 C 39.331 49 40 48.331 40 47.5 L 40 34 L 35 29 L 25.5 29 z" })));
};
exports.FolderDocumentsYellow = FolderDocumentsYellow;
var FolderRecentYellow = function (props) {
    var classes = useStyle();
    return (React.createElement(core_1.SvgIcon, { className: classes.icon, viewBox: "0 0 64 64", width: 64, height: 64 },
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "24", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { fill: "#b58f1b" }, d: "M 7,44.5 C 7,45.885 8.115,47 9.5,47 H 54.5 C 55.885,47 57,45.885 57,44.5 V 17.5 C 57,16.115 55.885,15 54.5,15 H 29 V 12.5 C 29,11.115 27.885,10 26.5,10 H 9.5 C 8.115,10 7,11.115 7,12.5" }),
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "22", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e4e4e4" }, width: "44", height: "20", x: "10", y: "18", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e2b322" }, width: "50", height: "32", x: "7", y: "23", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { opacity: 0.1, fill: "#ffffff" }, d: "M 9.5,10 C 8.115,10 7,11.115 7,12.5 V 13.5 C 7,12.115 8.115,11 9.5,11 H 26.5 C 27.885,11 29,12.115 29,13.5 V 12.5 C 29,11.115 27.885,10 26.5,10 Z M 29,15 V 16 H 54.5 C 55.89,16 57,17.115 57,18.5 V 17.5 C 57,16.115 55.89,15 54.5,15 Z" }),
        React.createElement("path", { style: { fill: "#4f3e0c" }, d: "M 32 27 A 12 12 0 0 0 20 39 A 12 12 0 0 0 32 51 A 12 12 0 0 0 44 39 A 12 12 0 0 0 32 27 z M 32 30 A 9 9 0 0 1 41 39 A 9 9 0 0 1 32 48 A 9 9 0 0 1 23 39 A 9 9 0 0 1 32 30 z M 30 33 L 30 41 L 38 41 L 38 38 L 33 38 L 33 33 L 30 33 z" })));
};
exports.FolderRecentYellow = FolderRecentYellow;
var FolderPicturesYellow = function (props) {
    var classes = useStyle();
    return (React.createElement(core_1.SvgIcon, { className: classes.icon, viewBox: "0 0 64 64", width: 64, height: 64 },
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "24", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { fill: "#b58f1b" }, d: "M 7,44.5 C 7,45.885 8.115,47 9.5,47 H 54.5 C 55.885,47 57,45.885 57,44.5 V 17.5 C 57,16.115 55.885,15 54.5,15 H 29 V 12.5 C 29,11.115 27.885,10 26.5,10 H 9.5 C 8.115,10 7,11.115 7,12.5" }),
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "22", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e4e4e4" }, width: "44", height: "20", x: "10", y: "18", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e2b322" }, width: "50", height: "32", x: "7", y: "23", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { opacity: 0.1, fill: "#ffffff" }, d: "M 9.5,10 C 8.115,10 7,11.115 7,12.5 V 13.5 C 7,12.115 8.115,11 9.5,11 H 26.5 C 27.885,11 29,12.115 29,13.5 V 12.5 C 29,11.115 27.885,10 26.5,10 Z M 29,15 V 16 H 54.5 C 55.89,16 57,17.115 57,18.5 V 17.5 C 57,16.115 55.89,15 54.5,15 Z" }),
        React.createElement("path", { style: { fill: "#4f3e0c" }, d: "M 23.4 31 C 22.625 31 22 31.625 22 32.4 L 22 45.6 C 22 46.375 22.625 47 23.4 47 L 40.6 47 C 41.375 47 42 46.375 42 45.6 L 42 32.4 C 42 31.625 41.375 31 40.6 31 L 23.4 31 z M 28 37 L 34 43 L 37 39 L 40 43 L 40 45 L 24 45 L 24 41 L 28 37 z" })));
};
exports.FolderPicturesYellow = FolderPicturesYellow;
var FolderVideoYellow = function (props) {
    var classes = useStyle();
    return (React.createElement(core_1.SvgIcon, { className: classes.icon, viewBox: "0 0 64 64", width: 64, height: 64 },
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "24", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { fill: "#b58f1b" }, d: "M 7,44.5 C 7,45.885 8.115,47 9.5,47 H 54.5 C 55.885,47 57,45.885 57,44.5 V 17.5 C 57,16.115 55.885,15 54.5,15 H 29 V 12.5 C 29,11.115 27.885,10 26.5,10 H 9.5 C 8.115,10 7,11.115 7,12.5" }),
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "22", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e4e4e4" }, width: "44", height: "20", x: "10", y: "18", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e2b322" }, width: "50", height: "32", x: "7", y: "23", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { opacity: 0.1, fill: "#ffffff" }, d: "M 9.5,10 C 8.115,10 7,11.115 7,12.5 V 13.5 C 7,12.115 8.115,11 9.5,11 H 26.5 C 27.885,11 29,12.115 29,13.5 V 12.5 C 29,11.115 27.885,10 26.5,10 Z M 29,15 V 16 H 54.5 C 55.89,16 57,17.115 57,18.5 V 17.5 C 57,16.115 55.89,15 54.5,15 Z" }),
        React.createElement("path", { style: { fill: "#4f3e0c" }, d: "M 22.5 31 C 21.669 31 21 31.669 21 32.5 L 21 45.5 C 21 46.331 21.669 47 22.5 47 L 37.5 47 C 38.331 47 39 46.331 39 45.5 L 39 39 L 39 32.5 C 39 31.669 38.331 31 37.5 31 L 22.5 31 z M 39 39 L 45 45 L 45 33 L 39 39 z" })));
};
exports.FolderVideoYellow = FolderVideoYellow;
var FolderHomeRed = function (props) {
    var classes = useStyle();
    return (React.createElement(core_1.SvgIcon, { className: classes.icon, viewBox: "0 0 64 64", width: 64, height: 64 },
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "24", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { fill: "#bf4b4b" }, d: "M 7,44.5 C 7,45.885 8.115,47 9.5,47 H 54.5 C 55.885,47 57,45.885 57,44.5 V 17.5 C 57,16.115 55.885,15 54.5,15 H 29 V 12.5 C 29,11.115 27.885,10 26.5,10 H 9.5 C 8.115,10 7,11.115 7,12.5" }),
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "22", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e4e4e4" }, width: "44", height: "20", x: "10", y: "18", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e25252" }, width: "50", height: "32", x: "7", y: "23", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { opacity: 0.1, fill: "#ffffff" }, d: "M 9.5,10 C 8.115,10 7,11.115 7,12.5 V 13.5 C 7,12.115 8.115,11 9.5,11 H 26.5 C 27.885,11 29,12.115 29,13.5 V 12.5 C 29,11.115 27.885,10 26.5,10 Z M 29,15 V 16 H 54.5 C 55.89,16 57,17.115 57,18.5 V 17.5 C 57,16.115 55.89,15 54.5,15 Z" }),
        React.createElement("path", { style: { fill: "#4f1d1d" }, d: "M 22,40 H 24 V 48 H 30 V 42 H 34 V 48 H 40 V 40 H 42 L 32,30 Z" })));
};
exports.FolderHomeRed = FolderHomeRed;
var FolderMusicGreen = function (props) {
    var classes = useStyle();
    return (React.createElement(core_1.SvgIcon, { className: classes.icon, viewBox: "0 0 64 64", width: 64, height: 64 },
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "24", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { fill: "#60924b" }, d: "M 7,44.5 C 7,45.885 8.115,47 9.5,47 H 54.5 C 55.885,47 57,45.885 57,44.5 V 17.5 C 57,16.115 55.885,15 54.5,15 H 29 V 12.5 C 29,11.115 27.885,10 26.5,10 H 9.5 C 8.115,10 7,11.115 7,12.5" }),
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "22", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e4e4e4" }, width: "44", height: "20", x: "10", y: "18", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#87b158" }, width: "50", height: "32", x: "7", y: "23", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { opacity: 0.1, fill: "#ffffff" }, d: "M 9.5,10 C 8.115,10 7,11.115 7,12.5 V 13.5 C 7,12.115 8.115,11 9.5,11 H 26.5 C 27.885,11 29,12.115 29,13.5 V 12.5 C 29,11.115 27.885,10 26.5,10 Z M 29,15 V 16 H 54.5 C 55.89,16 57,17.115 57,18.5 V 17.5 C 57,16.115 55.89,15 54.5,15 Z" }),
        React.createElement("path", { style: { fill: "#2f3e1f" }, d: "M 29,40.54 C 28.4,40.18 27.7,40 27,40 24.8,40 23,41.8 23,44 23,46.2 24.8,48 27,48 29.2,48 31,46.2 31,44 V 34 H 39 V 40.54 C 38.4,40.18 37.7,40 37,40 34.8,40 33,41.8 33,44 33,46.2 34.8,48 37,48 39.2,48 41,46.2 41,44 V 30 H 29" })));
};
exports.FolderMusicGreen = FolderMusicGreen;
var FolderPicturesBlue = function (props) {
    var classes = useStyle();
    return (React.createElement(core_1.SvgIcon, { className: classes.icon, viewBox: "0 0 64 64", width: 64, height: 64 },
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "24", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { fill: "#4877b1" }, d: "M 7,44.5 C 7,45.885 8.115,47 9.5,47 H 54.5 C 55.885,47 57,45.885 57,44.5 V 17.5 C 57,16.115 55.885,15 54.5,15 H 29 V 12.5 C 29,11.115 27.885,10 26.5,10 H 9.5 C 8.115,10 7,11.115 7,12.5" }),
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "22", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e4e4e4" }, width: "44", height: "20", x: "10", y: "18", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#5294e2" }, width: "50", height: "32", x: "7", y: "23", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { opacity: 0.1, fill: "#ffffff" }, d: "M 9.5,10 C 8.115,10 7,11.115 7,12.5 V 13.5 C 7,12.115 8.115,11 9.5,11 H 26.5 C 27.885,11 29,12.115 29,13.5 V 12.5 C 29,11.115 27.885,10 26.5,10 Z M 29,15 V 16 H 54.5 C 55.89,16 57,17.115 57,18.5 V 17.5 C 57,16.115 55.89,15 54.5,15 Z" }),
        React.createElement("path", { style: { fill: "#1d344f" }, d: "M 23.4 31 C 22.625 31 22 31.625 22 32.4 L 22 45.6 C 22 46.375 22.625 47 23.4 47 L 40.6 47 C 41.375 47 42 46.375 42 45.6 L 42 32.4 C 42 31.625 41.375 31 40.6 31 L 23.4 31 z M 28 37 L 34 43 L 37 39 L 40 43 L 40 45 L 24 45 L 24 41 L 28 37 z" })));
};
exports.FolderPicturesBlue = FolderPicturesBlue;
var FolderVideoPurple = function (props) {
    var classes = useStyle();
    return (React.createElement(core_1.SvgIcon, { className: classes.icon, viewBox: "0 0 64 64", width: 64, height: 64 },
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "24", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { fill: "#b259b8" }, d: "M 7,44.5 C 7,45.885 8.115,47 9.5,47 H 54.5 C 55.885,47 57,45.885 57,44.5 V 17.5 C 57,16.115 55.885,15 54.5,15 H 29 V 12.5 C 29,11.115 27.885,10 26.5,10 H 9.5 C 8.115,10 7,11.115 7,12.5" }),
        React.createElement("rect", { style: { opacity: 0.2 }, width: "50", height: "32", x: "7", y: "22", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#e4e4e4" }, width: "44", height: "20", x: "10", y: "18", rx: "2.5", ry: "2.5" }),
        React.createElement("rect", { style: { fill: "#ca71df" }, width: "50", height: "32", x: "7", y: "23", rx: "2.5", ry: "2.5" }),
        React.createElement("path", { style: { opacity: 0.1, fill: "#ffffff" }, d: "M 9.5,10 C 8.115,10 7,11.115 7,12.5 V 13.5 C 7,12.115 8.115,11 9.5,11 H 26.5 C 27.885,11 29,12.115 29,13.5 V 12.5 C 29,11.115 27.885,10 26.5,10 Z M 29,15 V 16 H 54.5 C 55.89,16 57,17.115 57,18.5 V 17.5 C 57,16.115 55.89,15 54.5,15 Z" }),
        React.createElement("path", { style: { fill: "#47274e" }, d: "M 22.5 31 C 21.669 31 21 31.669 21 32.5 L 21 45.5 C 21 46.331 21.669 47 22.5 47 L 37.5 47 C 38.331 47 39 46.331 39 45.5 L 39 39 L 39 32.5 C 39 31.669 38.331 31 37.5 31 L 22.5 31 z M 39 39 L 45 45 L 45 33 L 39 39 z" })));
};
exports.FolderVideoPurple = FolderVideoPurple;
//# sourceMappingURL=index.js.map