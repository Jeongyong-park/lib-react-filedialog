"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var EnhancedTableHead_1 = __importDefault(require("./EnhancedTableHead"));
var pretty_bytes_1 = __importDefault(require("pretty-bytes"));
var IconByRow_1 = __importDefault(require("./IconByRow"));
var useStyles = (0, core_1.makeStyles)(function (theme) { return ({
    root: {
        width: "100%",
    },
    paper: {
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1,
    },
}); });
var EnhacedTable = function (_a) {
    var rows = _a.rows, onResourceItemDoubleClick = _a.onResourceItemDoubleClick, onSelectionChange = _a.onSelectionChange;
    var classes = useStyles();
    var _b = react_1.default.useState("asc"), order = _b[0], setOrder = _b[1];
    var _c = react_1.default.useState("name"), orderBy = _c[0], setOrderBy = _c[1];
    var _d = react_1.default.useState([]), selected = _d[0], setSelected = _d[1];
    var page = react_1.default.useState(0)[0];
    var dense = react_1.default.useState(true)[0];
    var _e = react_1.default.useState(100), rowsPerPage = _e[0], setRowsPerPage = _e[1];
    react_1.default.useEffect(function () {
        var rowsLength = rows.length;
        setRowsPerPage(rowsLength > 10 ? rowsLength : 10);
    }, [rows]);
    var handleRequestSort = function (event, property) {
        var isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };
    var handleClick = function (event, fileinfo) {
        var newSelected = [];
        if (!fileinfo.isDirectory && [".tif", ".shp"].includes(fileinfo.ext)) {
            newSelected = [fileinfo];
        }
        else {
            newSelected = [];
        }
        onSelectionChange && onSelectionChange(newSelected);
        setSelected(newSelected);
    };
    var descendingComparator = function (a, b) {
        if (a[orderBy] === b[orderBy])
            return 0;
        return a[orderBy] > b[orderBy] ? -1 : 1;
    };
    function getComparator() {
        return order === "desc"
            ? function (a, b) { return descendingComparator(a, b); }
            : function (a, b) { return -descendingComparator(a, b); };
    }
    function stableSort(array, comparator) {
        return array
            .map(function (item, index) { return ({ item: item, index: index }); })
            .sort(function (a, b) { return comparator(a.item, b.item) || a.index - b.index; })
            .map(function (_a) {
            var item = _a.item;
            return item;
        });
    }
    var isSelected = function (fileinfo) { return selected.indexOf(fileinfo) !== -1; };
    var emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    return (react_1.default.createElement(core_1.TableContainer, { style: {
            height: "calc(100% - 24px)",
            maxHeight: 600,
            userSelect: "none",
        } },
        react_1.default.createElement(core_1.Table, { stickyHeader: true, size: dense ? "small" : "medium" },
            react_1.default.createElement(EnhancedTableHead_1.default, { classes: classes, numSelected: selected.length, order: order, orderBy: orderBy, onRequestSort: handleRequestSort, rowCount: rows.length }),
            react_1.default.createElement(core_1.TableBody, null,
                stableSort(rows, getComparator()).map(function (row, index) {
                    var isItemSelected = isSelected(row);
                    var labelId = "enhanced-table-checkbox-" + index;
                    var filesize = row.size &&
                        (0, pretty_bytes_1.default)(typeof row.size === "number" ? row.size : 0);
                    var updateDate = new Date(row.updateDate).toLocaleString();
                    return (react_1.default.createElement(core_1.TableRow, { hover: true, onDoubleClick: function (event) {
                            if (typeof onResourceItemDoubleClick === "function") {
                                onResourceItemDoubleClick(event, index, row);
                            }
                        }, onClick: function (event) { return handleClick(event, row); }, role: "checkbox", "aria-checked": isItemSelected, tabIndex: -1, key: row.name, selected: isItemSelected },
                        react_1.default.createElement(core_1.TableCell, { component: "th", id: labelId, scope: "row", padding: "none" },
                            react_1.default.createElement(IconByRow_1.default, { fileInfo: row }),
                            react_1.default.createElement("span", { style: {
                                    padding: "6px 0",
                                    display: "inline-flex",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: 300,
                                } },
                                react_1.default.createElement(core_1.Tooltip, { title: row.name, "aria-label": row.name },
                                    react_1.default.createElement(core_1.Typography, { variant: "body1" }, row.name)))),
                        react_1.default.createElement(core_1.TableCell, { align: "right" }, !row.isDirectory && filesize),
                        react_1.default.createElement(core_1.TableCell, { align: "left" }, updateDate)));
                }),
                emptyRows > 0 && (react_1.default.createElement(core_1.TableRow, { style: { height: (dense ? 33 : 53) * emptyRows } },
                    react_1.default.createElement(core_1.TableCell, { colSpan: 6 })))))));
};
exports.default = EnhacedTable;
//# sourceMappingURL=EnhancedTable.js.map