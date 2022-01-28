import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";

const headCells = [
  { id: "name", numeric: false, disablePadding: true, label: "Name" },
  { id: "size", numeric: true, disablePadding: false, label: "File Size" },
  {
    id: "updateDate",
    numeric: false,
    disablePadding: false,
    label: "Modified",
  },
];

interface EnhancedTableHeadProps {
  classes: any;
  order: "asc" | "desc";
  orderBy: any;
  numSelected: number;
  rowCount: number;
  onRequestSort: any;
}
function EnhancedTableHead(props: EnhancedTableHeadProps): React.ReactElement {
  const { classes, order, orderBy, onRequestSort } = props;

  const createSortHandler = (property: string) => (event: any) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead style={{ width: "100%" }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            // padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ padding: "8px 16px" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
export default EnhancedTableHead;
