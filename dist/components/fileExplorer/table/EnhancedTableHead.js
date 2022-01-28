"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
var headCells = [
    { id: "name", numeric: false, disablePadding: true, label: "Name" },
    { id: "size", numeric: true, disablePadding: false, label: "File Size" },
    {
        id: "updateDate",
        numeric: false,
        disablePadding: false,
        label: "Modified",
    },
];
function EnhancedTableHead(props) {
    var classes = props.classes, order = props.order, orderBy = props.orderBy, onRequestSort = props.onRequestSort;
    var createSortHandler = function (property) { return function (event) {
        onRequestSort(event, property);
    }; };
    return (React.createElement(core_1.TableHead, { style: { width: "100%" } },
        React.createElement(core_1.TableRow, null, headCells.map(function (headCell) { return (React.createElement(core_1.TableCell, { key: headCell.id, align: headCell.numeric ? "right" : "left", sortDirection: orderBy === headCell.id ? order : false, style: { padding: "8px 16px" } },
            React.createElement(core_1.TableSortLabel, { active: orderBy === headCell.id, direction: orderBy === headCell.id ? order : "asc", onClick: createSortHandler(headCell.id) },
                headCell.label,
                orderBy === headCell.id ? (React.createElement("span", { className: classes.visuallyHidden }, order === "desc" ? "sorted descending" : "sorted ascending")) : null))); }))));
}
exports.default = EnhancedTableHead;
//# sourceMappingURL=EnhancedTableHead.js.map