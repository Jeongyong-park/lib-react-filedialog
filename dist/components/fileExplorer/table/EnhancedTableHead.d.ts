/// <reference types="react" />
interface EnhancedTableHeadProps {
    classes: any;
    order: "asc" | "desc";
    orderBy: any;
    numSelected: number;
    rowCount: number;
    onRequestSort: any;
}
declare function EnhancedTableHead(props: EnhancedTableHeadProps): React.ReactElement;
export default EnhancedTableHead;
