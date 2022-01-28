import React from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
  Typography,
} from "@material-ui/core";
import EnhancedTableHead from "./EnhancedTableHead";
import prettyBytes from "pretty-bytes";
import IconByRow from "./IconByRow";
import IFileInfo, { KeyOfFileInfo } from "../IFileInfo";

interface EnhancedTableProps {
  rows: IFileInfo[];
  onResourceItemDoubleClick?: (
    event: React.MouseEvent<HTMLElement>,
    idx: number,
    row: IFileInfo
  ) => void;
  onSelectionChange?: (rows: IFileInfo[]) => void;
}

const useStyles = makeStyles((theme) => ({
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
}));

const EnhacedTable = ({
  rows,
  onResourceItemDoubleClick,
  onSelectionChange,
}: EnhancedTableProps): React.ReactElement => {
  const classes = useStyles();

  const [order, setOrder] = React.useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = React.useState<KeyOfFileInfo>("name");
  const [selected, setSelected] = React.useState<IFileInfo[]>([]);
  const [page] = React.useState<number>(0);
  const [dense] = React.useState<boolean>(true);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(100);

  React.useEffect(() => {
    const rowsLength = rows.length;
    setRowsPerPage(rowsLength > 10 ? rowsLength : 10);
  }, [rows]);

  const handleRequestSort = (event: MouseEvent, property: KeyOfFileInfo) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event: any, fileinfo: IFileInfo) => {
    //const selectedIndex = selected.indexOf(fileinfo);
    let newSelected: any[] = [];

    if (!fileinfo.isDirectory && [".tif", ".shp"].includes(fileinfo.ext)) {
      newSelected = [fileinfo];
    } else {
      newSelected = [];
    }
    onSelectionChange && onSelectionChange(newSelected);
    // 복수 파일 선택시의 코드
    // if (selectedIndex === -1) {
    //     if (!fileinfo.isDirectory && [".tif", ".shp"].includes(fileinfo.ext)) {
    //         newSelected = newSelected.concat(selected, fileinfo);
    //     } else {
    //         newSelected = [...selected];
    //     }
    // } else if (selectedIndex === 0) {
    //     newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //     newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //     newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    // }
    setSelected(newSelected);
  };

  type Comparator = (a: IFileInfo, b: IFileInfo) => number;
  const descendingComparator = (a: IFileInfo, b: IFileInfo): -1 | 0 | 1 => {
    if (a[orderBy] === b[orderBy]) return 0;
    return a[orderBy] > b[orderBy] ? -1 : 1;
  };

  function getComparator(): Comparator {
    return order === "desc"
      ? (a: IFileInfo, b: IFileInfo) => descendingComparator(a, b)
      : (a: IFileInfo, b: IFileInfo) => -descendingComparator(a, b);
  }

  /**
   * @see https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
   * @see https://www.30secondsofcode.org/js/s/stable-sort
   */
  function stableSort(array: IFileInfo[], comparator: Comparator): IFileInfo[] {
    return array
      .map((item: IFileInfo, index: number) => ({ item, index }))
      .sort((a, b) => comparator(a.item, b.item) || a.index - b.index)
      .map(({ item }) => item);
  }

  const isSelected = (fileinfo: IFileInfo) => selected.indexOf(fileinfo) !== -1;
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <TableContainer
      style={{
        height: "calc(100% - 24px)",
        maxHeight: 600,
        userSelect: "none",
      }}
    >
      <Table stickyHeader size={dense ? "small" : "medium"}>
        <EnhancedTableHead
          classes={classes}
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          rowCount={rows.length}
        />

        <TableBody>
          {stableSort(rows, getComparator()).map((row, index) => {
            const isItemSelected = isSelected(row);
            const labelId = `enhanced-table-checkbox-${index}`;
            const filesize =
              row.size &&
              prettyBytes(typeof row.size === "number" ? row.size : 0);
            const updateDate = new Date(row.updateDate).toLocaleString();

            return (
              <TableRow
                hover
                onDoubleClick={(event) => {
                  if (typeof onResourceItemDoubleClick === "function") {
                    onResourceItemDoubleClick(event, index, row);
                  }
                }}
                onClick={(event) => handleClick(event, row)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.name}
                selected={isItemSelected}
              >
                <TableCell
                  component="th"
                  id={labelId}
                  scope="row"
                  padding="none"
                >
                  <IconByRow fileInfo={row} />
                  <span
                    style={{
                      padding: "6px 0",
                      display: "inline-flex",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: 300,
                    }}
                  >
                    <Tooltip title={row.name} aria-label={row.name}>
                      <Typography variant="body1">{row.name}</Typography>
                    </Tooltip>
                  </span>
                </TableCell>
                <TableCell align="right">
                  {!row.isDirectory && filesize}
                </TableCell>
                <TableCell align="left">{updateDate}</TableCell>
              </TableRow>
            );
          })}
          {emptyRows > 0 && (
            <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EnhacedTable;
